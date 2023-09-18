<script lang="ts">
  export let icon: string;
</script>

<svg style="width: 1em; height: 1em;" role="presentation" {...$$restProps}>
  <use xlink:href={`#${icon}`} />
</svg>
