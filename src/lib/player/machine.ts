// eslint-disable-next-line
// @ts-nocheck
import { createMachine, assign, interpret } from '@xstate/fsm';
import * as Data from '../data';
import { injectTrackTheme, streamUrlFor } from './utils';

type Context = {
  currentTime: number;
  duration: number;
  percentPlayed: number;
  trackId: string;
};

type PlayTrack = { type: 'play-track'; trackId: string };
type TimeUpdate = { type: 'time-update'; currentTime: number; duration: number; trackId: string };
type Seek = { type: 'seek'; to: number };

const machine = createMachine({
  id: 'player',
  initial: 'init',
  context: {
    currentTime: null,
    duration: null,
    percentPlayed: 0,
    trackId: Data.playlistOrder[0],
  },
  states: {
    stopped: {
      entry: [pause],
      on: {
        'play-track': 'loading',
      },
    },
    init: {
      on: {
        'play-track': 'loading',
      },
    },
    paused: {
      entry: [pause],
      on: {
        play: 'starting',
        'play-track': 'loading',
      },
    },
    loading: {
      entry: [
        assign({
          trackId: (_: Context, evt: PlayTrack) => evt.trackId,
        }),
        load,
      ],
      on: {
        loaded: 'starting',
        'play-track': 'loading',
        stop: 'stopped',
        failed: 'error-playing',
      },
    },
    starting: {
      entry: [play],
      on: {
        stop: 'stopped',
        started: 'playing',
        'play-track': 'loading',
        failed: 'error-playing',
        ready: 'stopped',
      },
    },
    'error-playing': {
      on: {
        'play-track': 'loading',
      },
    },
    playing: {
      on: {
        seek: {
          target: 'playing',
          actions: seek,
        },
        pause: 'paused',
        'play-track': 'loading',
        'time-update': {
          target: 'playing',
          actions: assign({
            currentTime: updateCurrentTime,
            percentPlayed: updatePercentPlayed,
            duration: updateDuration,
          }),
        },
      },
    },
  },
});

let send;

export function init() {
  const service = interpret(machine).start();

  send = service.send;

  return service;
}

let audio;
let onTimeUpdate;
let onEnd;

if (typeof Audio !== 'undefined') {
  audio = new Audio();
  audio.setAttribute('preload', 'auto');
}

export function nextTrack(currentTrackId: string) {
  if (currentTrackId) {
    const currentTrackIndex = Data.playlistOrder.indexOf(currentTrackId);
    const nextTrackIndex = (currentTrackIndex + 1) % Data.playlistOrder.length;
    const nextTrackId = Data.playlistOrder[nextTrackIndex];
    return nextTrackId;
    //
  } else {
    const nextTrackId = Data.playlistOrder[0];
    return nextTrackId;
  }
}

export function prevTrack(currentTrackId: string) {
  if (currentTrackId) {
    const currentTrackIndex = Data.playlistOrder.indexOf(currentTrackId);
    const count = Data.playlistOrder.length;
    const nextTrackIndex = (currentTrackIndex - 1 + count) % count;
    const nextTrackId = Data.playlistOrder[nextTrackIndex];
    return nextTrackId;
  } else {
    const nextTrackId = Data.playlistOrder[0];
    const nextTrack = Data.tracks[nextTrackId];
    return nextTrack;
  }
}

async function play(context: Context) {
  const { trackId } = context;

  try {
    audio.removeEventListener('ended', onEnd);
    audio.removeEventListener('timeupdate', onTimeUpdate);

    await audio.play();

    const track = Data.tracks[trackId];
    injectTrackTheme(track);

    send('started');

    onTimeUpdate = () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      send({ type: 'time-update', currentTime, duration, trackId });
    };
    audio.addEventListener('timeupdate', onTimeUpdate);

    onEnd = () => {
      const nextTrackId = nextTrack(trackId);
      send({ type: 'play-track', trackId: nextTrackId });
    };
    audio.addEventListener('ended', onEnd);
  } catch (err) {
    console.error(err);
    // Safari wants another user-initiated click to actually start the audio
    if (err.name === 'NotAllowedError') {
      send('ready');
    } else {
      send('failed');
    }
  }
}

function pause() {
  audio.pause();
}

function seek(_context: Context, evt: Seek) {
  audio.currentTime = evt.to;
}

async function load(context: Context) {
  const { trackId } = context;

  let url;

  try {
    url = streamUrlFor(trackId);
  } catch (err) {
    return send('failed');
  }
  audio.src = url;

  audio.load();

  send('loaded');
}

function updateCurrentTime(_context: Context, evt: TimeUpdate) {
  return evt.currentTime;
}

function updateDuration(_context: Context, evt: TimeUpdate) {
  const { duration } = evt;

  return Number.isNaN(duration) ? 0 : duration;
}

function updatePercentPlayed(_context: Context, evt: TimeUpdate) {
  const { currentTime, duration } = evt;

  return currentTime / duration;
}
