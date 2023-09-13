<script lang="ts">
  import '../../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import IconSprite from '$lib/components/Icons.svelte';
  import Bg from '$lib/components/Bg.svelte';
</script>

<div class="container flex-1 py-4 px-6 min-h-full flex flex-col gap-12 mx-auto">
  <Header />
  <main class="flex-1">
    <IconSprite />
    <Bg />
    <slot />
  </main>
  <Footer />
</div>
