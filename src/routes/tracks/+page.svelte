<script lang="ts">
  import Image from '$lib/components/Image.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import SocialLink from '$lib/components/SocialLink.svelte';
  import MicroPlayer from '$lib/components/MicroPlayer.svelte';
  import AlbumRef from '$lib/components/AlbumRef.svelte';
  import * as Data from '$lib/data';

  function album(track: Data.Track): Data.Album {
    return Data.albums[track.albumId];
  }

  function artwork(track: Data.Track) {
    return album(track).artwork;
  }
</script>

<svelte:head>
  <title>The Air on Earth | Tracks</title>
  <meta
    name="description"
    content="All of the tracks created by the band with their corresponding
    purchase and streaming links."
  />
  <meta name="description" content="Released tracks with purchase and streaming links." />
  <meta property="og:description" content="Released tracks with purchase and streaming links." />
  <meta property="og:url" content="https://theaironearth.com/tracks" />
  <meta name="twitter:description" content="Released tracks with purchase and streaming links." />
</svelte:head>

<div class="tracks grid grid-cols-1 gap-16 md:grid md:grid-cols-4">
  {#each Object.values(Data.tracks) as track}
    <div class="flex items-center gap-4">
      <a class="w-32 hover:opacity-75" href={`/tracks/${track.id}`}>
        <Image ratio="100%" src={artwork(track)} alt={`Artwork for ${track.title}`} />
      </a>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col justify-center">
          <div class="flex gap-1">
            <Heading level={3} style="text-2xl">
              <a href={`/tracks/${track.id}`}> {track.title}</a></Heading
            >
            <MicroPlayer trackId={track.id} size="lg" />
          </div>
          <AlbumRef album={album(track)} />
        </div>
        <ul class="flex items-center gap-6">
          {#each track.links as link}
            <li><SocialLink {link} /></li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</div>

<style>
  .tracks {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
</style>
