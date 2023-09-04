<script lang="ts">
  import type { Track } from '$lib/data';
  import MicroPlayer from './MicroPlayer.svelte';
  export let tracks: Array<Track>;
</script>

<ol class="flex flex-col gap-3">
  {#each tracks as track}
    <li class="flex items-center gap-2">
      <MicroPlayer trackId={track.id} />
      <a
        href={`/tracks/${track.id}`}
        data-track-list-track="true"
        class="flex flex-1 justify-between border-b-2 border-dashed border-gray-400"
      >
        <span>{track.title}</span>
        <span>{track.length}</span>
      </a>
    </li>
  {/each}
</ol>
