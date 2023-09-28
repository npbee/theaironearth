<script lang="ts">
import { cloudinaryImgUrl as url } from '$lib/utils';
import type { ComponentProps } from 'svelte';
import Image from './Image.svelte';

type ImageProps = ComponentProps<Image>;

export let src: ImageProps['src'];

let props = $$props as ImageProps;
let bigUrl = url(`${src}.webp`, `w_1200`);
</script>

<a href={bigUrl} target="_blank">
  <Image {...props} src={src} />
</a>
