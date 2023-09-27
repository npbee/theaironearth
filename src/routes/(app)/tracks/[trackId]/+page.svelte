<script lang="ts">
import Meta from '$lib/components/Meta.svelte';
import Track from '$lib/components/Track.svelte';
import type { PageData } from './$types';

export let data: PageData;
$: track = data.track;
</script>

<Meta
  title={`${track.title} | The Air on Earth`}
  description={`Track listing, credits, and streaming links for ${track.title} by The Air on Earth`}
/>

<div class="mx-auto flex flex-col gap-8">
  {#key track.id}
    <Track id={track.id} />
  {/key}
</div>
