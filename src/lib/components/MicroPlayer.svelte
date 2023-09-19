<script lang="ts">
import Loader from './Loader.svelte';
import Icon from './Icon.svelte';
import { state, send, canPlay } from '$lib/player';
import { tracks } from '$lib/data';

export let trackId: string;
export let size = '2xl';
export let context: 'light' | 'dark' = 'light';

let track = tracks[trackId];

$: activeTrackId = $state.context.trackId;
$: isBusy = ($state.matches('loading') || $state.matches('starting')) && activeTrackId === trackId;
$: isPlaying = $state.value === 'playing' && activeTrackId === trackId;
$: isPaused = $state.value === 'paused' && activeTrackId === trackId;

$: handler = () => {
  if (isPlaying) {
    send('pause');
  } else if (isPaused) {
    send('play');
  } else if (isBusy) {
    send('stop');
  } else {
    // eslint-disable-next-line
    // @ts-ignore
    send({ type: 'play-track', trackId } as const);
  }
};
</script>

{#if canPlay()}
  <button
    class:text-gray-100={context === 'dark'}
    class:text-muted={context === 'light' || isBusy}
    class="hover:text-text-gray-400 active:text-blue-600 flex"
    on:click={handler}
  >
    {#if isBusy}
      <span class="sr-only">Loading</span>
      <span class:text-muted={context === "light"} class:text-gray-100={context === "dark"}
        ><Loader size={size} /></span
      >
    {:else if isPlaying}
      <span class="sr-only">Pause track '{track.title}'</span>
      <Icon icon="pause" size={size} />
    {:else}
      <span class="sr-only">Play track '{track.title}'</span>
      <Icon icon="play" size={size} />
    {/if}
  </button>
{/if}
