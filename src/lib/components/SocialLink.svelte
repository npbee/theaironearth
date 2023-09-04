<script>
  export let link;

  function linkTitle(link) {
    switch (link.type) {
      case 'soundcloud':
        return 'Soundcloud';
      case 'bandcamp':
        return 'Bandcamp';
      case 'spotify':
        return 'Spotify';
      case 'apple-music':
        return 'Apple Music';
      default:
        throw new Error(`Unknown link type ${link.type}`);
    }
  }

  function linkLogoSrc(link) {
    switch (link.type) {
      case 'soundcloud':
        return '/logos/soundcloud.svg';
      case 'bandcamp':
        return '/logos/bandcamp.png';
      case 'spotify':
        return '/logos/spotify.png';
      case 'apple-music':
        return '/logos/apple-music.svg';
      default:
        throw new Error(`Unknown link type ${link.type}`);
    }
  }

  function iconPath(type) {
    return `#${type}`;
  }
</script>

<a
  href={link.url}
  target="_blank"
  rel="noreferrer noopener nofollow"
  class={`social-link social-link--${link.type} text-2xl text-light hover:text-dark focusable active:translate-y-px rounded-sm`}
  title={linkTitle(link)}
>
  <span class="sr-only">{linkTitle(link)}</span>
  <svg class="fill-current">
    <use xlink:href={iconPath(link.type)} />
  </svg>
</a>

<style>
  .social-link > svg {
    width: 1em;
    height: 1em;
  }

  .social-link--spotify > svg {
    width: 0.7em;
    height: 0.7em;
  }

  .social-link--apple-music > svg {
    width: 3em;
  }
</style>
