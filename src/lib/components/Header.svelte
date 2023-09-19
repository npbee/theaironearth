<script lang="ts">
import Logo from '$lib/components//Logo.svelte';
import MiniPlayer from './MiniPlayer.svelte';
import Nav from '$lib/components/Nav.svelte';
</script>

<header class="flex items-center justify-between gap-8">
  <div class="space-y-3">
    <a href="/" class={`block w-24`}>
      <span class="sr-only">The Air on Earth</span>
      <Logo />
    </a>

    <div class="text-sm">
      <Nav />
    </div>
  </div>
  <MiniPlayer />
</header>
