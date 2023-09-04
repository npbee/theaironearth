import { cloudinaryAudioUrl, generateTheme } from '../utils';
import * as Data from '../data';

export function streamUrlFor(trackId: string) {
  return cloudinaryAudioUrl(trackId);
}

export function canPlay() {
  const hasAudio = true;
  // const hasAudio = typeof window !== 'undefined' && window.Modernizr.audio;

  if (!hasAudio) return false;

  return true;
}

export function injectTrackTheme(track: Data.Track) {
  const theme = generateTheme(track);

  setCustomProp(`--accent`, theme.main);
  setCustomProp(`--accent-high-contrast`, theme.highContrast);
}

export function ejectTrackTheme() {
  removeCustomProp('--accent');
  removeCustomProp('--accent-high-contrast');
}

export function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = `${Math.floor(seconds % 60)}`.padStart(2, '0');

  return `${min}:${sec}`;
}

function setCustomProp(prop, value) {
  document.documentElement.style.setProperty(prop, value);
}

function removeCustomProp(prop) {
  document.documentElement.style.removeProperty(prop);
}

export function nextTrack(currentTrackId: string) {
  if (currentTrackId) {
    const currentTrackIndex = Data.playlistOrder.indexOf(currentTrackId);
    const nextTrackIndex = (currentTrackIndex + 1) % Data.playlistOrder.length;
    const nextTrackId = Data.playlistOrder[nextTrackIndex];
    return nextTrackId;
    //
  } else {
    const nextTrackId = Data.playlistOrder[0];
    return nextTrackId;
  }
}

export function prevTrack(currentTrackId: string) {
  if (currentTrackId) {
    const currentTrackIndex = Data.playlistOrder.indexOf(currentTrackId);
    const count = Data.playlistOrder.length;
    const nextTrackIndex = (currentTrackIndex - 1 + count) % count;
    const nextTrackId = Data.playlistOrder[nextTrackIndex];
    return nextTrackId;
  } else {
    const nextTrackId = Data.playlistOrder[0];
    const nextTrack = Data.tracks[nextTrackId];
    return nextTrack;
  }
}
