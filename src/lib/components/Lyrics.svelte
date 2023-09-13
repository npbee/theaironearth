<script lang="ts">
  export let lyrics: Array<Array<string>>;
</script>

<div class="space-y-6 font-serif text-base leading-relaxed text-muted">
  {#each lyrics as stanza, i}
    <div class={`stanza-${i}`}>
      {#each stanza as line}
        <p>{line}</p>
      {/each}
    </div>
  {/each}
</div>

<style>
  .stanza-0 p:first-of-type:first-letter {
    font-size: 200%;
    letter-spacing: 0.05em;
    line-height: 1;
  }
</style>
