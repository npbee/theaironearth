import { albums } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = async function load({ params }) {
  const album = albums[params.albumId];

  return {
    album,
  };
};
