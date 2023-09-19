<script lang="ts">
import '../app.css';
import Nav from '$lib/components/Nav.svelte';
import Bg from '$lib/components/Bg.svelte';
import Footer from '$lib/components/Footer.svelte';
import IconSprite from '$lib/components/Icons.svelte';
import Logo from '$lib/components//Logo.svelte';
import type { PageData } from './$types';
import SiteListenLinks from '$lib/components/SiteListenLinks.svelte';
import SocialLinks from '$lib/components/SocialLinks.svelte';

export let data: PageData;

let shouldAnimate = data.shouldAnimate;
</script>

<svelte:head>
  <title>The Air on Earth</title>
  <meta name="description" content="Ambient/pop/electronic music project" />
  <meta property="og:description" content="Ambient/pop/electronic music project based" />
  <meta property="og:url" content="https://theaironearth.com" />
  <meta name="twitter:description" content="Ambient/pop/electronic music project based" />
</svelte:head>

<Bg />
<IconSprite />
<main class="flex h-full flex-1 flex-col justify-center gap-8 p-6" class:animate={shouldAnimate}>
  <div class="flex flex-col justify-center gap-4 md:flex-1">
    <h1 class="logo w-64">
      <Logo />
      <span class="sr-only">The Air on Earth</span>
    </h1>
    <div class="nav text-sm">
      <Nav />
    </div>
  </div>
  <div
    class="links flex w-full flex-1 flex-col items-center justify-between gap-4 md:flex-none md:flex-row"
  >
    <div class="order-2 flex w-full gap-8 text-gray-600 md:order-1 md:w-auto">
      <SocialLinks />
    </div>
    <div
      class="order-1 flex w-full flex-col justify-around gap-4 md:order-2 md:w-auto md:flex-row [&>a]:h-12 [&>a]:justify-center [&>a]:rounded-full [&>a]:border [&>a]:border-gray-900 [&>a]:px-2 md:[&>a]:border-none"
    >
      <SiteListenLinks variant="lockup" />
    </div>
  </div>
</main>

<style>
.animate .logo {
  opacity: 0;
  animation: fly-right 900ms 200ms forwards;
}

.animate .nav {
  opacity: 0;
  animation: fly-up 900ms 900ms forwards;
}

.animate .links {
  opacity: 0;
  animation: fly-left 900ms 1800ms forwards;
}

@keyframes fly-right {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes fly-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fly-left {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .logo,
  .nav,
  .links {
    animation: none;
    opacity: 1;
  }
}
</style>
