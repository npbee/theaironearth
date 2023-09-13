<script lang="ts">
  export let icon: string;

  export let size = 'sm';

  $: cls = ((size) => {
    switch (size) {
      case 'xs':
        return 'text-xs';
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-md';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      case '2xl':
        return 'text-2xl';
      case '3xl':
        return 'text-3xl';
      case '4xl':
        return 'text-4xl';
      case '5xl':
        return 'text-5xl';
      default:
        throw new Error(`Unknown size ${size}`);
    }
  })(size);
</script>

<svg style="width: 1em; height: 1em;" role="presentation" {...$$restProps}>
  <use xlink:href={`#${icon}`} />
</svg>
