<script lang="ts">
  import Loader from './Loader.svelte';
  import Icon from './Icon.svelte';
  import { state, send, canPlay } from '../player';
  import { tracks } from '../data';

  export let trackId: string;
  export let size = '2xl';

  let track = tracks[trackId];

  $: activeTrackId = $state.context.trackId;
  $: isBusy =
    ($state.matches('loading') || $state.matches('starting')) && activeTrackId === trackId;
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
      send({ type: 'play-track', trackId });
    }
  };
</script>

{#if canPlay()}
  <button class="text-muted hover:text-dark active:text-blue-600" on:click={handler}>
    {#if isBusy}
      <span class="sr-only">Loading</span>
      <span class="text-muted"><Loader {size} /></span>
    {:else if isPlaying}
      <span class="sr-only">Pause track '{track.title}'</span>
      <Icon icon="pause" {size} />
    {:else}
      <span class="sr-only">Play track '{track.title}'</span>
      <Icon icon="play" {size} />
    {/if}
  </button>
{/if}
