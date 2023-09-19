<script lang="ts">
import { page } from '$app/stores';

export let href: string;
</script>

<a
  href={href}
  class="header-link border-transparent -mb-2 border-b-2 tracking-wide text-muted transition-all hover:border-gray-600"
  class:active={$page.url.pathname.includes(href)}><slot /></a
>

<style lang="postcss">
.header-link {
  font-variant-caps: small-caps;
  font-feature-settings: 'smcp';
  text-decoration: none;
  border-color: transparent;
}

.header-link:hover {
  text-decoration: none;
  @apply border-gray-300;
}

.header-link.active {
  @apply border-gray-600;
}
</style>
