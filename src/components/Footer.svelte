<script>
  import { site } from '../data';
  import SocialLink from './SocialLink.svelte';
</script>

<footer class="flex items-center justify-between text-muted">
  <div class="flex items-center gap-6">
    <SocialLink link={site.links.bandcamp} />
    <SocialLink link={site.links.soundcloud} />
    <SocialLink link={site.links.spotify} />
  </div>
  <a href="/" class="text-xs">&copy; The Air on Earth</a>
</footer>
