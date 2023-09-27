<script lang="ts">
import ListenLink from '$lib/components/ListenLink.svelte';
import type { ListenLink as ListenLinkType } from '$lib/data';

export let links: Array<ListenLinkType> = [];
</script>

<ul class="flex gap-8">
  {#each links as link, i}
    <li
      class="xafter:content-['•'] relative after:text-xs after:text-gray-700"
      class:after:hidden={i === links.length -1}
    >
      <ListenLink link={link} variant="text" />
      {#if i < links.length - 1}
        <span
          class="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/2 text-xs text-gray-500"
          aria-hidden="true">/</span
        >
      {/if}
    </li>
  {/each}
</ul>
