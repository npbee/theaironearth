<script>
  import Loader from "../../components/icons/Loader.svelte";
  import { send, store as defaultStore } from "../store";
  import { canPlay } from "../utils";
  import { tracks } from "../../data";
  export let store = defaultStore;
  export let trackId;
  export let size = "";

  let track = tracks[trackId];

  $: activeTrackId = $store.context.trackId;
  $: isBusy =
    ($store.value === "loading" || $store.value === "starting") &&
    activeTrackId === trackId;
  $: isPlaying =
    $store.value === "playing" && activeTrackId === trackId ? true : false;
  $: isPaused =
    $store.value === "paused" && activeTrackId === trackId ? true : false;
  $: handler = () => {
    if (isPlaying) {
      send("pause");
    } else if (isPaused) {
      send("play");
    } else if (isBusy) {
      send("stop");
    } else {
      send({ type: "play-track", trackId });
    }
  };
</script>

<style>
  button {
    cursor: pointer;
    background: none;
  }
</style>

{#if canPlay(tracks[trackId])}
  <button
    class={`icon-btn c-grey-700 flex text-${size}`}
    data-testid={isPlaying ? 'pause' : 'play'}
    on:click={handler}>
    {#if isBusy}
      <span class="visually-hidden">Loading</span>
      <Loader />
    {:else if isPlaying}
      <span class="visually-hidden">Pause currently playing track</span>
      <svg>
        <use xlink:href="#pause" />
      </svg>
    {:else}
      <span class="visually-hidden">Play track {track.title}</span>
      <svg>
        <use xlink:href="#play" />
      </svg>
    {/if}
  </button>
{/if}
