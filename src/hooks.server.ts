import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.includes('/track/')) {
    redirect(301, event.url.pathname.replace('track', 'tracks'));
  }

  if (event.url.pathname.includes('/album/')) {
    redirect(301, event.url.pathname.replace('album', 'albums'));
  }
  return await resolve(event);
};
