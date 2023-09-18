<script lang="ts">
  import FadingRule from './FadingRule.svelte';
  import Logo from './Logo.svelte';
  import SocialLinks from './SocialLinks.svelte';
</script>

<footer class="flex flex-col justify-between gap-4 text-muted w-full pt-4 md:pt-16">
  <FadingRule extraClass="md:hidden" />
  <div class="flex gap-12 items-center justify-between w-full">
    <a class="w-[60px] block items-center flex-shrink-0" href="/">
      <Logo />
    </a>
    <div
      class="flex [&>a]:p-4 [&>a]:rounded-full text-gray-800/70 text-sm sm:justify-end items-center"
    >
      <SocialLinks />
    </div>
  </div>
</footer>
