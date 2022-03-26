<script>
  import { page } from '$app/stores';

  export let href;
</script>

<a
  {href}
  class="header-link border-b-2 border-transparent text-sm tracking-wide text-muted transition-all hover:border-gray-600"
  class:active={$page.url.pathname.includes(href)}><slot /></a
>

<style>
  .header-link {
    font-variant-caps: small-caps;
    font-feature-settings: 'smcp';
  }

  .header-link:hover {
    text-decoration: none;
  }

  .header-link.active {
    @apply border-gray-600;
  }
</style>
