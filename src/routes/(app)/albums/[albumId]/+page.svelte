<script lang="ts">
import Image from '$lib/components/Image.svelte';
import Date from '$lib/components/Date.svelte';
import Heading from '$lib/components/Heading.svelte';
import Tracklist from '$lib/components/Tracklist.svelte';
import ListenLink from '$lib/components/ListenLink.svelte';
import Credits from '$lib/components/Credits.svelte';
import CreditSource from '$lib/components/CreditSource.svelte';
import Track from '$lib/components/Track.svelte';
import type { PageData } from './$types';
import SubtleHeading from '$lib/components/SubtleHeading.svelte';
import Meta from '$lib/components/Meta.svelte';
import TextListenLinkList from '$lib/components/TextListenLinkList.svelte';

export let data: PageData;
let { album } = data;
</script>

<Meta
  title={`${album.title} | The Air on Earth`}
  description={`Album listing, credits, and streaming links for ${album.title} by The Air on Earth`}
/>

<div class="space-y-24">
  <!-- Artwork/Tracklist -->
  <div class="flex flex-col gap-4 md:flex-row md:gap-8">
    <!-- Artwork -->
    <div class="flex-1 md:max-w-md">
      <div>
        <Image src={album.artwork} alt={`Album artwork for ${album.title}`} ratio="100%" />
      </div>
    </div>

    <!-- Title and track list -->
    <div class="flex-1 space-y-8">
      <div class="flex flex-col justify-between gap-3">
        <div>
          <Date dateTime={album.date} />
          <Heading level={1} style="text-5xl">{album.title}</Heading>
        </div>
        <TextListenLinkList links={album.links} />
      </div>
      <Tracklist tracks={album.tracks} />
    </div>
  </div>

  <!-- About -->
  <div class="flex flex-col gap-16 md:justify-between lg:flex-row">
    <div class="flex flex-[2] flex-col gap-10">
      <div class="space-y-4">
        <Heading level={2}>About</Heading>
        <div class="space-y-4 text-lg leading-relaxed">
          {#each album.description as p}
            <p class="">
              <!-- eslint-disable-next-line -->
              {@html p}
            </p>
          {/each}
        </div>
      </div>
    </div>
    <div class="flex-1 space-y-10">
      <div>
        <div class="flex w-full flex-col gap-2">
          <SubtleHeading level="2">Credits</SubtleHeading>
          <Credits credits={album.credits} />
        </div>
      </div>
      <div class="space-y-2">
        <SubtleHeading level="2">Links</SubtleHeading>
        <TextListenLinkList links={album.links} />
      </div>
      {#if album.extras.length > 0}
        <div class="space-y-3">
          <SubtleHeading level="2">Extras</SubtleHeading>
          <div class="space-y-1 text-xs font-medium">
            {#each album.extras as extra}
              <div class="flex items-baseline gap-2">
                {extra.title}
                <div class="flex items-baseline gap-1">
                  {#each extra.urls as url, i}
                    <a
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                      class="block underline"
                      href={url.url}>{url.title}</a
                    >
                    <span
                      aria-hidden="true"
                      class="px-1 text-xs text-gray-400"
                      hidden={i === extra.urls.length - 1}>/</span
                    >
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
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
