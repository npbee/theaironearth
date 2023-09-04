<script>
  import DecoratedLink from './DecoratedLink.svelte';

  export let album;
</script>

<p class="text-xs">
  from
  <DecoratedLink href={`/albums/${album.id}`}>
    <em>{album.title}</em>
  </DecoratedLink>
</p>
