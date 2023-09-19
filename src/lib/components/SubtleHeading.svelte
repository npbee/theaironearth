<script lang="ts">
export let level: '1' | '2' = '1';
</script>

{#if level === "1"}
  <h1 {...$$restProps} class="small-caps text-base font-medium text-gray-700 after:content-['—']">
    <slot />
  </h1>
{:else}
  <h2 {...$$restProps} class="small-caps text-sm font-medium text-gray-700 after:content-['—']">
    <slot />
  </h2>
{/if}
