<script>
  export let href;
</script>

<a {href} {...$$props}><slot /></a>

<style>
  a {
    text-decoration: none;
    box-shadow: inset 0 -1px 0 theme('colors.muted');
    border-bottom: 1px solid theme('colors.muted');
    transition: background-color 200ms;
  }

  a:hover {
    text-decoration: none;
    background-color: theme('colors.muted');
    color: theme('colors.gray.50');
  }
</style>
