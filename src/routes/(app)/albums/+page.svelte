<script lang="ts">
import Date from '$lib/components/Date.svelte';
import Heading from '$lib/components/Heading.svelte';
import ListenLink from '$lib/components/ListenLink.svelte';
import { albums, type Album } from '$lib/data';
import SubtleHeading from '$lib/components/SubtleHeading.svelte';
import FadingRule from '$lib/components/FadingRule.svelte';
import CoverPlayer from '$lib/components/CoverPlayer.svelte';
import Meta from '$lib/components/Meta.svelte';

let albumCount = Object.keys(albums).length;

function getFirstTrackId(album: Album) {
  let firstTrack = album.tracks.at(0);
  if (!firstTrack) {
    throw new Error('No first track?');
  }
  return firstTrack.id;
}
</script>

<Meta title="Albums | The Air on Earth" description="Albums released by The Air on Earth" />

<div class="space-y-24">
  <section>
    <div class="flex flex-col justify-between gap-2">
      <div class="relative flex h-fit items-baseline justify-between gap-2 px-2">
        <SubtleHeading level="1">Albums</SubtleHeading>
        <p class="small-caps text-sm font-medium text-muted">{albumCount} total</p>
      </div>
      <FadingRule />
    </div>
    <div class="flex flex-col divide-y divide-gray-800/10 border-b border-gray-800/10">
      {#each Object.values(albums) as album}
        <div class="flex flex-col gap-4 py-8 md:flex-row">
          <div class="w-full text-5xl md:w-48">
            <CoverPlayer trackId={getFirstTrackId(album)} />
          </div>
          <div class="flex flex-1 flex-col justify-between gap-4 py-2">
            <div class="flex items-baseline justify-between gap-6">
              <div>
                <a href={`/albums/${album.id}`} class="block">
                  <Heading level={2}>
                    {album.title}
                  </Heading>
                </a>
                <Date dateTime={album.date} />
              </div>
              <p class="small-caps px-2 text-sm font-medium">{album.tracks.length} tracks</p>
            </div>
            <div class="space-y-5">
              <ul
                class="hidden flex-col gap-4 opacity-75 hover:opacity-100 md:flex md:w-3/4 md:flex-row"
              >
                {#each album.links as link}
                  <li><ListenLink link={link} variant="lockup" /></li>
                {/each}
              </ul>
              <ul class="flex flex-col gap-4 md:hidden md:w-3/4 md:flex-row">
                {#each album.links as link}
                  <li><ListenLink link={link} variant="lockup-btn" /></li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- <section> -->
  <!--   <div class="flex flex-col justify-between gap-2"> -->
  <!--     <div class="relative flex h-fit items-baseline justify-between gap-2 px-2"> -->
  <!--       <SubtleHeading level="1">Other Work</SubtleHeading> -->
  <!--     </div> -->
  <!--     <FadingRule /> -->
  <!--   </div> -->
  <!-- </section> -->
</div>
