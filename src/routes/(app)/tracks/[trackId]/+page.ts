import { tracks } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = async function load({ params }) {
  const track = tracks[params.trackId];

  return {
    track,
  };
};
