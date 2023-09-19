<script lang="ts">
import Track from '$lib/components/Track.svelte';
import type { PageData } from './$types';

export let data: PageData;
let { track } = data;
</script>

<svelte:head>
  <title>The Air on Earth&thinsp; |&thinsp; {track.title}</title>
  <meta
    name="description"
    content={`Track listing, credits, and purchase/streaming links for ${track.title} by The Air on Earth`}
  />
  <meta
    name="description"
    content={`Track listing, credits, and purchase/streaming links for ${track.title} by The Air on Earth`}
  />
  <meta
    property="og:description"
    content={`Track listing, credits, and purchase/streaming links for ${track.title} by The Air on Earth`}
  />
  <meta property="og:url" content={`https://theaironearth.com/track/${track.id}`} />
  <meta
    name="twitter:description"
    content={`Track listing, credits, and purchase/streaming links for ${track.title} by The Air on Earth`}
  />
</svelte:head>

<div class="mx-auto flex flex-col gap-8">
  <Track id={track.id} />
</div>
