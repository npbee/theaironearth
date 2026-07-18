<script>
import ListenLink from '$lib/components/ListenLink.svelte';
import Heading from '$lib/components/Heading.svelte';
import { site } from '$lib/data';
import SubtleHeading from '$lib/components/SubtleHeading.svelte';
import Meta from '$lib/components/Meta.svelte';
</script>

<Meta
  title="About | The Air on Earth"
  description="Wandering, ambient pop music that's patient and immersive."
/>

<section class="flex max-w-prose flex-col gap-12">
  <div class="space-y-4 leading-relaxed">
    <div class="">
      <SubtleHeading level="1">About</SubtleHeading>
      <Heading level={2}>The Air on Earth</Heading>
    </div>
    <p class="">
      Wandering, ambient pop. Vocal harmonies, delayed guitars, drone-y synths, and found sound.
      Long songs are not uncommon.
    </p>
  </div>
  <div class="space-y-3">
    <SubtleHeading level="2">Links</SubtleHeading>
    <ul class="list-disc space-y-1 pl-5">
      {#each Object.values(site.links) as link}
        <li>
          <ListenLink link={link} variant="text" size="text-base" />
        </li>
      {/each}
    </ul>
  </div>
</section>
