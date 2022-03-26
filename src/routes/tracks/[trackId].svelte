<script context="module">
  import { albums, tracks } from '../../data';

  export async function load({ params }) {
    let track = tracks[params.trackId];

    return {
      props: {
        track,
      },
    };
  }
</script>

<script lang="ts">
  import Track from '../../components/Track.svelte';
  import type * as Data from '../../data';

  export let track: Data.Track;
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

<div class="mx-auto flex max-w-3xl flex-col gap-12">
  <Track id={track.id} />
</div>
