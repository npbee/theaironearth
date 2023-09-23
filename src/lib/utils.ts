import type * as Data from './data';

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dhhjogfy6';

export function cloudinaryImgUrl(src: string, transform?: string) {
  return `${CLOUDINARY_BASE}/image/upload/${transform ? transform + '/' : ''}v1575831765/img/${src}`;
}

export function cloudinaryAudioUrl(trackId: string): string {
  return `${CLOUDINARY_BASE}/video/upload/q_auto/v1575831765/audio/${trackId}.mp3`;
}

export function generateTheme(track: Data.Track) {
  const { main, highContrast } = track.theme;

  const generatedTheme = {
    main: hsla(main),
    mainAlpha: hsla(main, 0.5),
    mainAlpha2: hsla(main, 0.1),
    highContrast: hsla(main),
  };

  if (highContrast) {
    return Object.assign(generatedTheme, {
      highContrast: hsla(highContrast),
    });
  }

  return generatedTheme;
}

function hsla(config: Data.Theme, alpha = 1) {
  return `hsla(${config.h}, ${config.s}%, ${config.l}%, ${alpha})`;
}
