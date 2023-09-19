<script lang="ts">
import '../../app.css';
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import IconSprite from '$lib/components/Icons.svelte';
import Bg from '$lib/components/Bg.svelte';
</script>

<div class="container mx-auto flex min-h-full flex-1 flex-col gap-12 px-6 py-4">
  <Header />
  <main class="flex-1">
    <IconSprite />
    <Bg />
    <slot />
  </main>
  <Footer />
</div>
