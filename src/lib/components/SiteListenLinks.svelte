<script lang="ts">
  import { site } from '$lib/data';
  import ListenLink from './ListenLink.svelte';

  export let variant: 'text' | 'glyph' | 'lockup' = 'text';
</script>

<ListenLink {variant} link={site.links.apple} />
<ListenLink {variant} link={site.links.soundcloud} />
<ListenLink {variant} link={site.links.bandcamp} />
<ListenLink {variant} link={site.links.spotify} />
