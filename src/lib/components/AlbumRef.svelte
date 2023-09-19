<script lang="ts">
import type { Album } from '$lib/data';
import DecoratedLink from './DecoratedLink.svelte';

export let album: Album;
</script>

<p class="text-xs">
  from
  <DecoratedLink href={`/albums/${album.id}`}>
    <em>{album.title}</em>
  </DecoratedLink>
</p>
