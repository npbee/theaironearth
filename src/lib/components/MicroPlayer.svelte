<script lang="ts">
import Loader from './Loader.svelte';
import Icon from './Icon.svelte';
import { player } from '$lib/player';
import { tracks } from '$lib/data';

export let trackId: string;
export let size = '2xl';
export let context: 'light' | 'dark' = 'light';

let track = tracks[trackId];

$: isBusy = $player.status === 'loading' && $player.trackId === trackId;
$: isPlaying = $player.status === 'playing' && $player.trackId === trackId;
$: isPaused = $player.status === 'paused' && $player.trackId === trackId;

$: handler = () => {
  if (isPlaying) {
    player.pause();
  } else if (isPaused) {
    player.play();
  } else {
    player.start(trackId);
  }
};
</script>

<button
  class:text-gray-100={context === 'dark'}
  class:text-muted={context === 'light' || isBusy}
  class="active:text-blue-600 flex h-full w-full items-center justify-center ring-offset-2 hover:text-gray-500"
  on:click={handler}
>
  {#if isBusy}
    <span class="sr-only">Loading</span>
    <span class:text-muted={context === "light"} class:text-gray-100={context === "dark"}
      ><Loader /></span
    >
  {:else if isPlaying}
    <span class="sr-only">Pause track '{track.title}'</span>
    <Icon icon="pause" size={size} role="presentation" />
  {:else}
    <span class="sr-only">Play track '{track.title}'</span>
    <Icon icon="play" size={size} role="presentation" />
  {/if}
</button>
