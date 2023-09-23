<script lang="ts">
import type { Track } from '$lib/data';
import MicroPlayer from './MicroPlayer.svelte';
export let tracks: Array<Track>;
</script>

<ol class="flex flex-col divide-y divide-gray-800/20 border-b border-gray-800/20">
  {#each tracks as track}
    <li class="flex items-center gap-2 py-2">
      <div class="text-2xl">
        <MicroPlayer trackId={track.id} />
      </div>
      <a
        href={`/tracks/${track.id}`}
        data-track-list-track="true"
        class="flex flex-1 items-center justify-between"
      >
        <span class="small-caps text-sm font-medium">{track.title}</span>
        <span class="text-sm font-medium text-muted">{track.length}</span>
      </a>
    </li>
  {/each}
</ol>
