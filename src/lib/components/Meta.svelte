<script lang="ts">
import { page } from '$app/stores';
import { cloudinaryImgUrl } from '$lib/utils';

export let title: string;
export let description: string;

let img = cloudinaryImgUrl('og.jpg');
console.log(img);
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={description} />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="twitter:description" content={description} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:image" content={img} />
</svelte:head>
