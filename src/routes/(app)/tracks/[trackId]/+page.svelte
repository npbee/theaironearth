<script lang="ts">
import Meta from '$lib/components/Meta.svelte';
import Track from '$lib/components/Track.svelte';
import type { PageData } from './$types';

export let data: PageData;
let { track } = data;
</script>

<Meta
  title={`${track.title} | The Air on Earth`}
  description={`Track listing, credits, and purchase/streaming links for ${track.title} by The Air on Earth`}
/>

<div class="mx-auto flex flex-col gap-8">
  <Track id={track.id} />
</div>
