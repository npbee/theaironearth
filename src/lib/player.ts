import { get, writable } from "svelte/store";
import { cloudinaryAudioUrl } from "./utils";

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



async function play(trackId: string) {
  try {
    await audioElement.play();

    store.set({
      status: 'playing',
      trackId,
    })

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
