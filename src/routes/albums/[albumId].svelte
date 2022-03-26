<script context="module">
  import { albums } from '../../data';

  export async function load({ params }) {
    const album = albums[params.albumId];

    return {
      props: {
        album,
      },
    };
  }
</script>

<script lang="ts">
  import Image from '../../components/Image.svelte';
  import Date from '../../components/Date.svelte';
  import Heading from '../../components/Heading.svelte';
  import Tracklist from '../../components/Tracklist.svelte';
  import SocialLink from '../../components/SocialLink.svelte';
  import Credits from '../../components/Credits.svelte';
  import CreditSource from '../../components/CreditSource.svelte';
  import Track from '../../components/Track.svelte';

  export let album;
</script>

<svelte:head>
  <title>The Air on Earth | {album.title}</title>
  <meta
    name="description"
    content={`Album listing, credits, and purchase/streaming links for ${album.title} by The Air on Earth`}
  />
  <meta
    name="description"
    content={`Album listing, credits, and purchase/streaming links for ${album.title} by The Air on Earth`}
  />
  <meta
    property="og:description"
    content={`Album listing, credits, and purchase/streaming links for ${album.title} by The Air on Earth`}
  />
  <meta property="og:url" content={`https://theaironearth.com/album/${album.id}`} />
  <meta
    name="twitter:description"
    content={`Album listing, credits, and purchase/streaming links for ${album.title} by The Air on Earth`}
  />
</svelte:head>

<div class="space-y-48">
  <!-- Artwork/Tracklist -->
  <div class="flex flex-col gap-4 md:flex-row md:gap-8">
    <!-- Artwork -->
    <div class="flex-1 md:max-w-md">
      <div>
        <Image src={album.artwork} alt={`Album artwork for ${album.title}`} ratio="100%" />
      </div>
      {#if album.extraArtwork}
        <a
          href={album.extraArtwork.src}
          target="_blank"
          rel="noreferrer noopener nofollow"
          class="text-grey-600 hover:text-grey-900 trans flex items-center justify-center
          py-4 text-sm underline"
        >
          <span class="mr-1">
            {album.extraArtwork.name} ({album.extraArtwork.size})
          </span>
          <svg class="fill-current" style="width: 1em; height: 1em;">
            <use xlink:href="#link-icon" />
          </svg>
        </a>
      {/if}
    </div>

    <!-- Title and track list -->
    <div class="flex-1 space-y-8">
      <div class="flex items-end justify-between">
        <div>
          <Date dateTime={album.date} />
          <Heading level={1}>{album.title}</Heading>
        </div>
        <ul class="flex items-center gap-6">
          {#each album.links as link}
            <li><SocialLink {link} /></li>
          {/each}
        </ul>
      </div>
      <Tracklist tracks={album.tracks} />
    </div>
  </div>

  <!-- About -->
  <div class="flex flex-col gap-16 md:flex-row md:justify-between">
    <div class="flex flex-col gap-6">
      <Heading level={2}>About</Heading>
      <!-- Description -->
      <div class="max-w-prose space-y-4 text-lg leading-relaxed">
        {#each album.description as p}
          <p class="">
            {@html p}
          </p>
        {/each}
      </div>

      <!-- Credits -->
    </div>
    <div class="flex w-full justify-end md:max-w-sm">
      <Credits credits={album.credits} />
    </div>
  </div>

  <!-- Tracks -->
  {#each album.tracks as track}
    <section class="space-y-8">
      <Track id={track.id} context="album" />
    </section>
  {/each}

  <div class="space-y-16">
    {#each album.imgs as img}
      <div class="">
        <Image src={img.src} alt={img.alt} ratio={img.ratio} />
        {#if img.credit}
          <p class="text-grey-400 mt-2 flex gap-1 text-sm">
            Photo by:
            <CreditSource source={img.credit} />
          </p>
        {/if}
      </div>
    {/each}
  </div>
</div>
