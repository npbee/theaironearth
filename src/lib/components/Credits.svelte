<script lang="ts">
import type { Credit } from '$lib/data';
import CreditSource from './CreditSource.svelte';

export let credits: Array<Credit>;
</script>

<ul class="space-y-6 text-sm">
  {#each credits as credit}
    <li class="space-y-0.5">
      <strong>
        <!-- eslint-disable-next-line -->
        {@html credit.credit}
      </strong>
      <CreditSource source={credit.source} />
    </li>
  {/each}
</ul>
