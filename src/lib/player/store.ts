import { readable } from 'svelte/store';
import { init } from './machine';

const service = init();

export const state = readable(service.state, (set) => {
  service.subscribe((state) => {
    if (state.changed) {
      set(state);
    }
  });
  return () => {
    //
  };
});

export const send = service.send;
