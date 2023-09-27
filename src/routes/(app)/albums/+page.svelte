<script lang="ts">
import Date from '$lib/components/Date.svelte';
import Heading from '$lib/components/Heading.svelte';
import { albums, otherWorks, type Album } from '$lib/data';
import SubtleHeading from '$lib/components/SubtleHeading.svelte';
import FadingRule from '$lib/components/FadingRule.svelte';
import CoverPlayer from '$lib/components/CoverPlayer.svelte';
import Meta from '$lib/components/Meta.svelte';
import Image from '$lib/components/Image.svelte';
import TextListenLinkList from '$lib/components/TextListenLinkList.svelte';

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
      </div>
      <FadingRule />
    </div>
    <div
      class="flex flex-col divide-y divide-gray-800/10 border-b border-gray-800/10 md:flex-row md:gap-16 lg:gap-16"
    >
      {#each Object.values(albums) as album}
        <div class="flex flex-1 flex-col gap-4 py-8">
          <div class="w-full text-5xl">
            <CoverPlayer trackId={getFirstTrackId(album)} />
          </div>
          <div class="flex flex-1 flex-col justify-between gap-3 py-2">
            <div class="flex items-baseline justify-between gap-4">
              <div>
                <Date dateTime={album.date} />
                <a href={`/albums/${album.id}`} class="block">
                  <Heading level={2} class="text-3xl lg:text-4xl">
                    {album.title}
                  </Heading>
                </a>
              </div>
              <p class="small-caps px-2 text-sm font-medium">{album.tracks.length} tracks</p>
            </div>
            <TextListenLinkList links={album.links} />
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="flex flex-col gap-4">
    <div class="flex flex-col justify-between gap-2">
      <div class="relative flex h-fit items-baseline justify-between gap-2 px-2">
        <SubtleHeading level="1">Other Work</SubtleHeading>
      </div>
      <FadingRule />
    </div>
    <div class="xother-works grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {#each otherWorks.slice().sort((a, b) => b.year - a.year) as work}
        <div class="flex flex-col">
          <div class="w-full overflow-hidden rounded-sm shadow">
            <Image src={work.artwork} alt={`Album artwork for ${work.title}`} ratio="100%" />
          </div>
          <div class="flex flex-1 flex-col justify-between gap-4 px-2 py-2 md:gap-2">
            <div class="flex items-baseline justify-between gap-4">
              <div class="space-y-1">
                <Heading level={3} class="text-3xl md:text-2xl lg:text-xl">{work.title}</Heading>
                <p class="lg:text-sm">{work.artist}</p>
              </div>
              <div>
                <p class="small-caps text-base lg:text-xs">{work.year}</p>
              </div>
            </div>
            <p class="font-medium italic lg:text-xs">{work.credit}</p>
            {#if work.links.length > 0}
              <TextListenLinkList links={work.links} />
            {:else}
              <span class="text-xs" aria-hidden="true">-</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
