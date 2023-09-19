<script lang="ts">
import { site } from '$lib/data';
import ListenLink from './ListenLink.svelte';

export let variant: 'text' | 'glyph' | 'lockup' = 'text';
</script>

<ListenLink variant={variant} link={site.links.apple} />
<ListenLink variant={variant} link={site.links.soundcloud} />
<ListenLink variant={variant} link={site.links.bandcamp} />
<ListenLink variant={variant} link={site.links.spotify} />
