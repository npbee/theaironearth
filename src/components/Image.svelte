<script>
  import { cloudinaryUrl as url } from "../utils";
  export let src;
  export let alt;
  export let ratio = "62.5%";

  let loaded = false;
  let inview = false;
  let js = typeof window !== "undefined" && window.IntersectionObserver;

  function load(img) {
    img.onload = () => {
      loaded = true;
    };
  }

  function waypoint(node) {
    if (!window) return;

    if (window.IntersectionObserver) {
      const options = {
        rootMargin: "100px",
        threshold: 0.1,
      };
      const observer = new IntersectionObserver(lazyload, options);

      // eslint-disable-next-line
      function lazyload(elements) {
        const element = elements[0];
        if (element && element.intersectionRatio > 0) {
          observer.unobserve(element.target);
          inview = true;
        }
      }

      observer.observe(node);

      return () => observer.unobserve(node);
    }
  }

  function largeUrl(src) {
    return url("w_1200", src);
  }
  function medUrl(src) {
    return url("w_800", src);
  }
  function smallUrl(src) {
    return url("w_500", src);
  }
  function tinyUrl(src) {
    return url("w_20", src);
  }
</script>

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
  }

  .placeholder {
    opacity: 1;
    transition: opacity 0.4s;
  }

  .main {
    opacity: 0;
    transition: opacity 0.4s;
  }

  .loaded .placeholder {
    opacity: 0;
  }

  .loaded .main {
    opacity: 1;
  }

  .loaded .blur {
    filter: none;
  }

  :global(.no-js) .main {
    filter: none;
    opacity: 1;
  }
</style>

<div
  style={`position: relative; width: 100%; height: 100%;`}
  class:loaded
  use:waypoint>
  <div style="position: relative; overflow: hidden; height: 100%;">

    <noscript>
      <picture>
        <source srcset={largeUrl(`${src}.jpg`)} media="(min-width: 1200px)" />
        <source srcset={medUrl(`${src}.jpg`)} media="(min-width: 740px)" />
        <img class="main" src={smallUrl(`${src}.jpg`)} {alt} />
      </picture>
    </noscript>

    <div style={`width: 100%; padding-bottom: ${ratio}`} />

    <div style={`display: ${js ? 'block' : 'none'}`}>
      <img class="placeholder blur" src={tinyUrl(`${src}.jpg`)} {alt} />

      <picture>
        <source
          type="image/webp"
          srcset={inview ? largeUrl(`${src}.webp`) : tinyUrl(`${src}.jpg`)}
          media="(min-width: 1200px)" />
        <source
          type="image/webp"
          srcset={inview ? medUrl(`${src}.webp`) : tinyUrl(`${src}.jpg`)}
          media="(min-width: 740px)" />

        <source
          srcset={inview ? largeUrl(`${src}.jpg`) : tinyUrl(`${src}.jpg`)}
          media="(min-width: 1200px)" />
        <source
          srcset={inview ? medUrl(`${src}.jpg`) : tinyUrl(`${src}.jpg`)}
          media="(min-width: 740px)" />
        <img
          class="main blur"
          use:load
          src={inview ? smallUrl(`${src}.jpg`) : tinyUrl(`${src}.jpg`)}
          {alt} />
      </picture>
    </div>
  </div>
</div>
