<script>
  import Date from '$lib/components/Date.svelte';
  import Image from '$lib/components/Image.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import SocialLink from '$lib/components/SocialLink.svelte';
  import { albums } from '$lib/data';
</script>

<svelte:head>
  <title>The Air on Earth | Albums</title>
  <meta name="description" content="Released albums with purchase and streaming links." />
  <meta property="og:description" content="Released albums with purchase and streaming links." />
  <meta property="og:url" content="https://theaironearth.com/albums" />
  <meta name="twitter:description" content="Released tracks with purchase and streaming links." />
</svelte:head>

<section class="flex grid-cols-2 flex-col gap-24 md:grid md:gap-4">
  {#each Object.values(albums) as album}
    <div class="flex flex-col gap-4">
      <a href={`/albums/${album.id}`} class="md:max-w-md">
        <Image ratio="100%" src={album.artwork} alt={`Album artwork for ${album.title}`} />
      </a>
      <div class="mb-16 space-y-4">
        <div>
          <Date dateTime={album.date} />
          <a href={`/albums/${album.id}`} class="block">
            <Heading level={2}>
              {album.title}
            </Heading>
          </a>
        </div>
        <ul class="flex items-center gap-6">
          {#each album.links as link}
            <li><SocialLink {link} /></li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</section>
