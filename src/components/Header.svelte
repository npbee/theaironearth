<script>
  import Logo from './Logo.svelte';
  import HeaderLink from './HeaderLink.svelte';
  import MiniPlayer from './MiniPlayer.svelte';
</script>

<header class="flex items-center justify-between gap-8">
  <div class="space-y-3">
    <a href="/" class="block w-24">
      <h1>
        <span class="sr-only">The Air on Earth</span>
        <Logo />
      </h1>
    </a>

    <nav class="flex justify-between gap-4 md:justify-start">
      <HeaderLink href="/albums">Albums</HeaderLink>
      <HeaderLink href="/tracks">Tracks</HeaderLink>
      <HeaderLink href="/about">About</HeaderLink>
    </nav>
  </div>
  <MiniPlayer />
</header>
