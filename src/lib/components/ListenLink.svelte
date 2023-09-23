<script lang="ts">
import type { ListenLink } from '$lib/data';

export let link: ListenLink;

export let variant: 'lockup' | 'lockup-btn' | 'glyph' = 'lockup';

function linkTitle(link: ListenLink) {
  switch (link.type) {
    case 'soundcloud':
      return 'Listen on Soundcloud';
    case 'bandcamp':
      return 'Listen on Bandcamp';
    case 'spotify':
      return 'Listen on Spotify';
    case 'apple-music':
      return 'Listen on Apple Music';
  }
}
</script>

{#if variant === 'glyph'}
  <a
    href={link.url}
    target="_blank"
    rel="noreferrer noopener nofollow"
    class={`focusable group flex items-center gap-1 rounded-full text-xs font-semibold opacity-50 shadow-2xl active:translate-y-px`}
  >
    <span
      class="flex aspect-square w-6 items-center justify-center p-1 opacity-50 group-hover:opacity-100"
    >
      {#if link.type === 'spotify'}
        <img class="" src="/logos/spotify-small.svg" alt="" />
      {:else if link.type === 'apple-music'}
        <img class="" src="/logos/apple-music-small.svg" alt="" />
      {:else if link.type === 'bandcamp'}
        <img class="" src="/logos/bandcamp-small.png" alt="" />
      {:else if link.type === 'soundcloud'}
        <img class="" src="/logos/soundcloud-small.png" alt="" />
      {/if}
    </span>
    <span class="sr-only">{linkTitle(link)}</span>
  </a>
{:else if variant === 'lockup'}
  <a
    href={link.url}
    target="_blank"
    rel="noreferrer noopener nofollow"
    class={`focusable flex h-8 flex-shrink-0 items-center opacity-60 hover:opacity-100 active:translate-y-px`}
  >
    <span class="sr-only">{linkTitle(link)}</span>
    {#if link.type === 'spotify'}
      <img class="w-[70px] px-2" src="/logos/spotify.png" alt="" />
    {:else if link.type === 'apple-music'}
      <img class="w-[95px] px-2" src="/logos/apple-music.svg" alt="" />
    {:else if link.type === 'bandcamp'}
      <img class="w-[85px]" src="/logos/bandcamp.png" alt="" />
    {:else if link.type === 'soundcloud'}
      <img class="w-28 px-2" src="/logos/soundcloud.png" alt="" />
    {/if}
  </a>
{:else if variant === 'lockup-btn'}
  <a
    href={link.url}
    target="_blank"
    rel="noreferrer noopener nofollow"
    class={`focusable flex h-12 flex-shrink-0 items-center justify-center rounded-full border border-gray-700 opacity-60 transition-colors duration-100 hover:bg-gray-50/50 hover:opacity-100 active:translate-y-px md:h-9`}
  >
    <span class="sr-only">{linkTitle(link)}</span>
    {#if link.type === 'spotify'}
      <img class="w-[70px] px-2" src="/logos/spotify.png" alt="" />
    {:else if link.type === 'apple-music'}
      <img class="w-[95px] px-2" src="/logos/apple-music.svg" alt="" />
    {:else if link.type === 'bandcamp'}
      <img class="w-[85px]" src="/logos/bandcamp.png" alt="" />
    {:else if link.type === 'soundcloud'}
      <img class="w-28 px-2" src="/logos/soundcloud.png" alt="" />
    {/if}
  </a>
{/if}
