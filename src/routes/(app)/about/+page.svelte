<script>
import Image from '$lib/components/Image.svelte';
import ListenLink from '$lib/components/ListenLink.svelte';
import Heading from '$lib/components/Heading.svelte';
import { site } from '$lib/data';
import SubtleHeading from '$lib/components/SubtleHeading.svelte';
</script>

<svelte:head>
  <title>The Air on Earth | About</title>
  <meta name="description" content="History and bio" />
  <meta name="description" content="History and bio" />
  <meta property="og:description" content="History and bio" />
  <meta property="og:url" content="https://theaironearth.com/about" />
  <meta name="twitter:description" content="History and bio" />
</svelte:head>

<section class="flex flex-col gap-10 md:flex-row">
  <div class="flex-1">
    <figure>
      <Image src="about" alt="Picture of Nick Ball from The Air on Earth" />
    </figure>
  </div>
  <div class="flex flex-col gap-10">
    <div class="max-w-prose flex-[2] space-y-4 leading-relaxed">
      <div class="">
        <SubtleHeading level="1">About</SubtleHeading>
        <Heading level={3}>The Air on Earth</Heading>
      </div>
      <p class="">
        Recording as The Air on Earth, Nick Ball creates wandering, ambient pop music that's patient
        and immersive. Vocal harmonies, delayed guitars, drone-y synths, and found sound are often
        used to create intimate and expanding atmospheres. Long songs are not uncommon.
        <em>Good Sport</em>
        is the second full-length album and builds upon the first self-titled release with higher fidelity
        and an emphasis on vocal melodies.
      </p>
      <p class="">
        Nick was a member of the band
        <a href="https://scarey.org" class="decorated-link">S. Carey</a>, playing guitar and
        contributing to albums such as
        <em>All We Grow</em>, <em>Range of Light</em>, and <em>Break Me Open</em>. Nick has also
        contributed to albums from artists
        <a href="https://www.luraymusic.com/" class="decorated-link">Luray</a>
        and
        <a href="https://www.aeroflynn.org/" class="decorated-link">Aero Flynn</a>, and was a past
        touring member of the band
        <a href="https://www.aabondy.co/" class="decorated-link">A.A. Bondy</a>.
      </p>
    </div>
    <div class="space-y-3">
      <SubtleHeading level="2">Links</SubtleHeading>
      <ul class="grid flex-col gap-2 md:grid-cols-2">
        {#each Object.values(site.links) as link}
          <li class="py-2 md:py-1">
            <ListenLink link={link} variant="lockup-btn" />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
