<script lang="ts">
import FadingRule from './FadingRule.svelte';
import Logo from './Logo.svelte';
import SocialLinks from './SocialLinks.svelte';
</script>

<footer class="flex w-full flex-col justify-between gap-4 pt-4 text-muted md:pt-16">
  <FadingRule extraClass="md:hidden" />
  <div class="flex w-full items-center justify-between gap-12">
    <a class="block w-[60px] flex-shrink-0 items-center" href="/">
      <Logo />
    </a>
    <div
      class="flex items-center text-sm text-gray-800/70 sm:justify-end [&>a]:rounded-full [&>a]:p-4"
    >
      <SocialLinks />
    </div>
  </div>
</footer>
