import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
  const animationCookie = cookies.get('home-animated');

  if (!animationCookie) {
    cookies.set('home-animated', 'true', {
      maxAge: 60 * 60, // expires in 1 hour
    });
  }

  return {
    shouldAnimate: !animationCookie,
  };
};
