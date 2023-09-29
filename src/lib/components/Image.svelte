<script lang="ts">
import { cloudinaryImgUrl as url } from '$lib/utils';

interface Size {
  breakpoint: number;
  w: number;
}

export let src: string;
export let alt: string;
export let transform: string | undefined = undefined;
export let ratio = '62.5%';
export let sizes: Size[] = [
  { breakpoint: 1200, w: 1200 },
  { breakpoint: 740, w: 800 },
  { breakpoint: 0, w: 500 },
];
export let defaultSize: number = 500;
export let loading: 'eager' | 'lazy' = 'lazy';

type Format = (typeof formats)[number];

let isLazy = loading === 'lazy';
let isEager = loading === 'eager';
let formats = ['avif', 'webp', 'jpg'] as const;
let loaded = isEager ? true : false;
let inview = isLazy ? false : true;
let js = typeof window !== 'undefined' && window.IntersectionObserver;

function load(img: HTMLImageElement) {
  if (isEager) return;
  img.onload = () => {
    loaded = true;
  };
}

function waypoint(node: Element) {
  if (!window) return {};
  if (isEager) return {};

  if (window.IntersectionObserver) {
    const options = {
      rootMargin: '100px',
      threshold: 0.1,
    };
    // eslint-disable-next-line no-undef
    const lazyload: IntersectionObserverCallback = function lazyload(elements) {
      const element = elements[0];
      if (element && element.intersectionRatio > 0) {
        observer.unobserve(element.target);
        inview = true;
      }
    };

    const observer = new IntersectionObserver(lazyload, options);

    observer.observe(node);

    return () => observer.unobserve(node);
  }
}

function pic(w: number, format: Format) {
  return url(`${src}.${format}`, [`w_${w}`, transform].filter(Boolean).join(','));
}

let lqip = pic(20, 'jpg');
</script>

<div style={`position: relative; width: 100%; height: 100%;`} class:loaded={loaded} use:waypoint>
  <div style="position: relative; overflow: hidden; height: 100%;">
    <noscript>
      <picture>
        {#each formats as format}
          {#each sizes as size}
            <source
              type={`image/${format}`}
              srcset={pic(size.w, format)}
              media={`(min-width: ${size.breakpoint}px)`}
            />
          {/each}
          <img alt={alt} src={pic(defaultSize, 'jpg')} />
        {/each}
      </picture>
    </noscript>

    <div style={`width: 100%; padding-bottom: ${ratio}`} />

    <div style={`display: ${js ? 'block' : 'none'}`}>
      <img class="placeholder blur" src={lqip} alt={alt} />

      <picture>
        {#each formats as format}
          {#each sizes as size}
            <source
              type={`image/${format}`}
              srcset={inview ? pic(size.w, format) : lqip}
              media={`(min-width: ${size.breakpoint}px)`}
            />
          {/each}
          <img
            alt={alt}
            class:blur={isLazy}
            use:load
            src={inview ? pic(defaultSize, 'jpg') : lqip}
          />
        {/each}
      </picture>
    </div>
  </div>
</div>

<style>
img {
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  will-change: opacity;
}

.blur {
  filter: blur(10px);
  transition: filter 0.5s ease;
  opacity: 0;
  transition: opacity 0.4s;
}

.placeholder {
  opacity: 1;
  transition: opacity 0.4s;
}

.loaded .placeholder {
  opacity: 0;
}

.loaded .blur {
  opacity: 1;
  filter: none;
}

:global(.no-js) .main {
  filter: none;
  opacity: 1;
}
</style>
