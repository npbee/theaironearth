<script>
import { fly } from 'svelte/transition';
import { state } from '$lib/player';
import MicroPlayer from './MicroPlayer.svelte';
import * as Data from '$lib/data';

$: isPlaying = !$state.matches('init');
let isErrored = $state.matches('error-playing');

$: trackId = $state.context.trackId;
$: track = Data.tracks[trackId];
$: scLink = track.links.find((link) => link.type === 'soundcloud');
</script>

{#if isErrored}
  <div class="text-red-700 max-w-xs text-sm">
    Could not play this track!
    {#if scLink}
      <span
        >Try playing again or listening directly from
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="decorated-link"
          href={scLink.url}
        >
          Soundcloud
        </a>.
      </span>
    {/if}
  </div>
{:else if isPlaying}
  <div class="player flex justify-between gap-4" in:fly={{ x: 20, duration: 300 }}>
    <div class="">
      <p class="small-caps text-xs">Now playing</p>
      <a class="text-sm font-semibold" href={`/tracks/${track.id}`}>{track.title}</a>
    </div>
    <div class="flex text-2xl">
      <MicroPlayer trackId={track.id} />
    </div>
  </div>
{/if}
