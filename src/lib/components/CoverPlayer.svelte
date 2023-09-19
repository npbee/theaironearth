<script lang="ts">
import { albums, tracks } from '$lib/data';
import Image from './Image.svelte';
import MicroPlayer from './MicroPlayer.svelte';

export let trackId: string;

let track = tracks[trackId];
let album = albums[track.albumId];
let artwork = album.artwork;
let context = album.coverStyle;
</script>

<div class="w-100 relative aspect-square overflow-hidden rounded-sm hover:opacity-75">
  <Image ratio="100%" src={artwork} alt={`Artwork for ${track.title}`} />
  <div
    class="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center"
  >
    <MicroPlayer trackId={track.id} context={context} />
  </div>
</div>
