<script lang="ts">
import * as Data from '../data';
import Heading from './Heading.svelte';
import AlbumRef from './AlbumRef.svelte';
import { generateTheme } from '../utils';
import MicroPlayer from './MicroPlayer.svelte';
import Image from './Image.svelte';
import Lyrics from './Lyrics.svelte';
import Credits from './Credits.svelte';
import SubtleHeading from './SubtleHeading.svelte';
import TextListenLinkList from './TextListenLinkList.svelte';

export let id: string;
export let context = 'track';

let track = Data.tracks[id];
let album = Data.albums[track.albumId];
let trackTheme = generateTheme(track);
let alpha = trackTheme['mainAlpha'];
let artwork = track.artwork ?? album.artwork;
</script>

<div class="flex flex-col gap-8 md:flex-row md:items-start">
  <div
    class="top-8 w-full overflow-hidden rounded-sm md:sticky md:max-w-md"
    style={`box-shadow: 0px 0px 30px 1px ${alpha};`}
  >
    <Image ratio="100%" src={artwork} alt={`Artwork for ${track.title}`} />
  </div>

  <div class="flex flex-1 flex-col gap-8">
    <div class="space-y-2">
      <div class="space-y-2">
        <div class="relative flex w-full items-baseline gap-3">
          <Heading level={context === 'album' ? 2 : 1}>
            <a href={`/tracks/${track.id}`}>{track.title}</a></Heading
          >
          <div
            class="flex items-baseline"
            class:text-2xl={context === 'album'}
            class:text-3xl={context === 'track'}
          >
            <MicroPlayer trackId={track.id} size={context === 'album' ? '2xl' : '3xl'} />
          </div>
        </div>
        {#if context === 'track'}
          <div class="flex items-center justify-between">
            <AlbumRef album={album} />
          </div>
        {/if}
      </div>
    </div>
    <div class="flex flex-col justify-between gap-8">
      {#if track.lyrics.length > 0}
        <Lyrics lyrics={track.lyrics} />
      {/if}
    </div>

    <div class="flex w-full flex-col space-y-2 md:w-72">
      <SubtleHeading level="2" id="credits">Credits</SubtleHeading>
      <Credits credits={track.credits} />
    </div>

    <div class="space-y-3">
      <SubtleHeading level="2" id="links">Links</SubtleHeading>
      <TextListenLinkList links={track.links} />
    </div>
  </div>
</div>
