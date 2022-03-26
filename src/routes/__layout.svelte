<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import IconSprite from '../components/Icons.svelte';
</script>

<Header />
<main class="flex-1">
  <IconSprite />
  <div class="bg" />
  <slot />
</main>
<Footer />

<style>
  .bg {
    position: fixed;
    width: 105%;
    height: 100%;
    top: 0px;
    left: -8px;
    z-index: -1;
    background-image: url('/img/bg.jpg');
    background-position: top left;
    background-size: cover;
  }

  @media screen and (min-width: 700px) {
    .bg {
      background-position: center right;
    }
  }
</style>
