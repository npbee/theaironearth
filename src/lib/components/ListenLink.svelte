<script lang="ts">
  import type { ListenLink } from '$lib/data';

  export let link: ListenLink;

  export let variant: 'text' | 'lockup' | 'glyph' = 'text';

  function linkTitle(link: ListenLink) {
    switch (link.type) {
      case 'soundcloud':
        return 'Soundcloud';
      case 'bandcamp':
        return 'Bandcamp';
      case 'spotify':
        return 'Spotify';
      case 'apple-music':
        return 'Apple Music';
    }
  }
</script>

{#if variant === 'text'}
  <a
    href={link.url}
    target="_blank"
    rel="noreferrer noopener nofollow"
    class={`text-xs font-semibold flex gap-1 items-center focusable active:translate-y-px group`}
  >
    <span
      class="w-6 opacity-50 group-hover:opacity-100 aspect-square flex items-center justify-center p-1"
    >
      {#if link.type === 'spotify'}
        <img class="" src="/logos/spotify-small.svg" alt="Spotify" />
      {:else if link.type === 'apple-music'}
        <img class="" src="/logos/apple-music-small.svg" alt="Apple Music" />
      {:else if link.type === 'bandcamp'}
        <img class="" src="/logos/bandcamp-small.png" alt="Bandcamp" />
      {:else if link.type === 'soundcloud'}
        <img class="" src="/logos/soundcloud-small.png" alt="Soundcloud" />
      {/if}
    </span>
    <span class="text-gray-700 whitespace-nowrap">{linkTitle(link)}</span>
  </a>
{:else if variant === 'glyph'}
  <a
    href={link.url}
    target="_blank"
    rel="noreferrer noopener nofollow"
    class={`text-xs font-semibold flex gap-1 items-center focusable active:translate-y-px group`}
  >
    <span
      class="w-6 opacity-50 group-hover:opacity-100 aspect-square flex items-center justify-center p-1"
    >
      {#if link.type === 'spotify'}
        <img class="" src="/logos/spotify-small.svg" alt="Spotify" />
      {:else if link.type === 'apple-music'}
        <img class="" src="/logos/apple-music-small.svg" alt="Apple Music" />
      {:else if link.type === 'bandcamp'}
        <img class="" src="/logos/bandcamp-small.png" alt="Bandcamp" />
      {:else if link.type === 'soundcloud'}
        <img class="" src="/logos/soundcloud-small.png" alt="Soundcloud" />
      {/if}
    </span>
    <span class="sr-only">{linkTitle(link)}</span>
  </a>
{:else if variant === 'lockup'}
  <a
    href={link.url}
    target="_blank"
    rel="noreferrer noopener nofollow"
    class={`flex flex-shrink-0 items-center focusable active:translate-y-px opacity-60 hover:opacity-100`}
  >
    <span class="sr-only">{linkTitle(link)}</span>
    {#if link.type === 'spotify'}
      <img class="w-[70px] px-2" src="/logos/spotify.png" alt="Spotify" />
    {:else if link.type === 'apple-music'}
      <img class="w-[95px] px-2" src="/logos/apple-music.svg" alt="Apple Music" />
    {:else if link.type === 'bandcamp'}
      <img class="w-[85px]" src="/logos/bandcamp.png" alt="Bandcamp" />
    {:else if link.type === 'soundcloud'}
      <img class="w-28 px-2" src="/logos/soundcloud.png" alt="Soundcloud" />
    {/if}
  </a>
{/if}
