<script lang="ts">
export let level = 2;
</script>

{#if level === 1}
  <h1 class="text-4xl" {...$$restProps}><slot /></h1>
{:else if level === 2}
  <h2 class="text-3xl" {...$$restProps}><slot /></h2>
{:else if level === 3}
  <h3 {...$$restProps}><slot /></h3>
{:else if level === 4}
  <h4><slot /></h4>
{:else if level === 5}
  <h5><slot /></h5>
{:else if level === 6}
  <h6><slot /></h6>
{/if}

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-family: 'Playfair Display', serif;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt', 'dlig', 'swsh', 'pnum';
  font-feature-settings: 'kern', 'liga', 'clig', 'calt', 'dlig', 'swsh', 'pnum';
}
</style>
