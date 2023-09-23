<script lang="ts">
import Heading from '$lib/components/Heading.svelte';
import CoverPlayer from '$lib/components/CoverPlayer.svelte';
import AlbumRef from '$lib/components/AlbumRef.svelte';
import * as Data from '$lib/data';
import FadingRule from '$lib/components/FadingRule.svelte';
import SubtleHeading from '$lib/components/SubtleHeading.svelte';
import Meta from '$lib/components/Meta.svelte';

function album(track: Data.Track): Data.Album {
  return Data.albums[track.albumId];
}

let allTracks = Array.from(Object.values(Data.tracks));
</script>

<Meta title="Tracks | The Air on Earth" description="All tracks released by The Air on Earth" />

<div class="flex flex-col justify-between gap-2">
  <div class="relative flex h-fit items-baseline justify-between gap-2 px-2">
    <SubtleHeading level="1">Tracks</SubtleHeading>
    <p class="small-caps text-sm font-medium text-muted">{allTracks.length} total</p>
  </div>
  <FadingRule />
</div>
<div class="tracks flex flex-col gap-0 divide-y divide-gray-800/10">
  {#each Object.values(Data.tracks) as track}
    <div class="flex w-full flex-col items-center gap-4 py-4">
      <div class="flex w-full gap-4">
        <div class="w-16 text-3xl">
          <CoverPlayer trackId={track.id} />
        </div>
        <div class="flex flex-1 flex-col justify-center gap-2">
          <Heading level={2} class="text-2xl">
            <a href={`/tracks/${track.id}`}> {track.title}</a></Heading
          >
          <div class="text-muted">
            <AlbumRef album={album(track)} />
          </div>
        </div>
        <div class="flex items-center px-2 text-sm font-semibold text-muted">
          {track.length}
        </div>
      </div>
    </div>
  {/each}
</div>
