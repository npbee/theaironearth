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
  import FadingRule from './FadingRule.svelte';

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

  let trackTheme = generateTheme(track);
  let color = trackTheme['main'];
  let alpha = trackTheme['mainAlpha'];
  let alpha2 = trackTheme['mainAlpha2'];

  let artwork = track.artwork ?? album.artwork;
</script>

<div class="flex flex-col md:flex-row gap-16 items-start">
  <div
    class="w-full md:w-1/2 rounded-sm overflow-hidden md:sticky top-8"
    style={`box-shadow: 0px 0px 30px 1px ${alpha};`}
  >
    <Image ratio="100%" src={artwork} alt={`Artwork for ${track.title}`} />
  </div>

  <div class="flex flex-col gap-8">
    <div class="space-y-2">
      <div class="space-y-2">
        <div class="flex items-baseline gap-2 relative">
          <Heading level={context === 'album' ? 2 : 1} style="">
            <a href={`/tracks/${track.id}`}>{track.title}</a></Heading
          >
          <div class="text-3xl flex items-baseline">
            <MicroPlayer trackId={track.id} size={context === 'album' ? '2xl' : '3xl'} />
          </div>
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
    <div class="flex flex-col justify-between gap-8">
      {#if track.lyrics.length > 0}
        <Lyrics lyrics={track.lyrics} />
      {/if}

      <FadingRule />

      <div class="flex w-full flex-col space-y-8 md:w-72">
        <Credits credits={track.credits} />
      </div>
    </div>
  </div>
</div>
