<script>
  import DecoratedLink from './DecoratedLink.svelte';

  export let source;

  const sources = Array.isArray(source) ? source : [source];
</script>

<ul class="flex flex-wrap justify-end gap-1">
  {#each sources as source}
    <li class="inline-flex whitespace-nowrap">
      {#if source.link}
        <DecoratedLink rel="noreferrer noopener nofollow" target="_blank" href={source.link}>
          {source.name}
        </DecoratedLink>
      {:else}
        <span class="source">{source.name}</span>
      {/if}
    </li>
  {/each}
</ul>

<style>
  li:after {
    content: ', ';
  }
  li:last-child::after {
    content: '';
  }
</style>
