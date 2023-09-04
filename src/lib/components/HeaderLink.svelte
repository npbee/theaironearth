<script>
  import { page } from '$app/stores';

  export let href;
</script>

<a
  {href}
  class="header-link border-transparent border-b-2 text-sm tracking-wide text-muted transition-all hover:border-gray-600"
  class:active={$page.url.pathname.includes(href)}><slot /></a
>

<style>
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
