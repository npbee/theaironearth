<script lang="ts">
  import * as Data from '../data';
  import Heading from './Heading.svelte';
  import AlbumRef from './AlbumRef.svelte';
  import { generateTheme } from '../utils';
  import MicroPlayer from './MicroPlayer.svelte';
  import ListenLink from './ListenLink.svelte';
  import Image from './Image.svelte';
  import Lyrics from './Lyrics.svelte';
  import Credits from './Credits.svelte';

  export let id: string;
  export let context = 'track';

  let track = Data.tracks[id];
  let album = Data.albums[track.albumId];

  function trackColor(
    track: Data.Track,
    color: 'main' | 'mainAlpha' | 'mainAlpha2' | 'highContrast'
  ) {
    const theme = generateTheme(track);

    return theme[color];
  }

  let artwork = track.artwork ?? album.artwork;
</script>

<div class="space-y-8">
  <div class="flex flex-1 flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div class="space-y-1">
      <div class="flex items-center gap-2">
        <Heading level={context === 'album' ? 2 : 1} style="">
          <a href={`/tracks/${track.id}`}>{track.title}</a></Heading
        >
        <MicroPlayer trackId={track.id} size={context === 'album' ? '2xl' : '3xl'} />
      </div>
      {#if context === 'track'}
        <AlbumRef {album} />
      {/if}
    </div>

    <ul class="flex items-center gap-6 flex-wrap">
      {#each track.links as link}
        <li><ListenLink {link} /></li>
      {/each}
    </ul>
  </div>

  <hr
    class="my-0 h-1 rounded-lg border-none"
    style={`background-color: ${trackColor(track, 'main')}`}
  />
</div>

<div class="flex flex-col justify-between gap-8 md:flex-row">
  {#if track.lyrics.length > 0}
    <Lyrics lyrics={track.lyrics} />
  {/if}

  <div class="flex w-full flex-col items-end space-y-8 md:w-72">
    <div class="w-full">
      <Image ratio="100%" src={artwork} alt={`Artwork for ${track.title}`} />
    </div>
    <Credits credits={track.credits} />
  </div>
</div>
