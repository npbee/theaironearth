import { get, writable } from "svelte/store";
import { cloudinaryAudioUrl, generateTheme } from "./utils";
import { playlistOrder, tracks } from "$lib/data";

interface LoadingState {
  status: 'loading',
  trackId: string;
}

interface IdleState {
  status: 'idle',
}

interface PlayingState {
  status: 'playing';
  trackId: string;
}

interface PausedState {
  status: 'paused';
  trackId: string;
}

interface ErrorState {
  status: 'error',
  trackId: string;
}

type State = IdleState | LoadingState | PlayingState | PausedState | ErrorState;


const store = writable<State>({
  status: 'idle'
})

let audioElement: HTMLAudioElement;

if (typeof Audio !== 'undefined') {
  audioElement = new Audio();
  audioElement.setAttribute('preload', 'auto');
}

export const player = {
  subscribe: store.subscribe,

  async start(trackId: string) {
    store.set({
      status: 'loading',
      trackId
    })

    const audioUrl = cloudinaryAudioUrl(trackId);
    audioElement.src = audioUrl;
    audioElement.load();

    await play(trackId);
  },

  pause() {
    const state = get(store);
    if (state.status !== 'playing') return;
    audioElement.pause();
    store.set({
      status: 'paused',
      trackId: state.trackId,
    })
  },

  async play() {
    const state = get(store);
    if (state.status !== 'paused') return;
    await play(state.trackId);
  }
}


let onEnd: () => void = () => { };

async function play(trackId: string) {
  try {
    audioElement.removeEventListener('ended', onEnd);
    await audioElement.play();

    injectTrackTheme(trackId)

    store.set({
      status: 'playing',
      trackId,
    })

    onEnd = () => {
      const nextTrackId = nextTrack(trackId);
      player.start(nextTrackId);
    }

    audioElement.addEventListener('ended', onEnd)

  } catch (err) {
    // Safari wants another user-initiated click to actually start the audio
    if (err instanceof Error && err.name === 'NotAllowedError') {
      // Not sure...
    }

    store.set({
      status: 'error',
      trackId,
    })
  }
}

export function injectTrackTheme(trackId: string) {
  const theme = generateTheme(tracks[trackId]);

  setCustomProp(`--accent`, theme.main);
  setCustomProp(`--accent-high-contrast`, theme.highContrast);
}

export function ejectTrackTheme() {
  removeCustomProp('--accent');
  removeCustomProp('--accent-high-contrast');
}

function setCustomProp(prop: string, value: string) {
  document.documentElement.style.setProperty(prop, value);
}

function removeCustomProp(prop: string) {
  document.documentElement.style.removeProperty(prop);
}

function nextTrack(currentTrackId: string) {
  if (currentTrackId) {
    const currentTrackIndex = playlistOrder.indexOf(currentTrackId);
    const nextTrackIndex = (currentTrackIndex + 1) % playlistOrder.length;
    const nextTrackId = playlistOrder[nextTrackIndex];
    return nextTrackId;
  } else {
    const nextTrackId = playlistOrder[0];
    return nextTrackId;
  }
}
