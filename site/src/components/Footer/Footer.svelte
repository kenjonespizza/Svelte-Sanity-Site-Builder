<script>
  import Link from "../Link.svelte";
  import SocialMediaIcons from "../SocialMediaIcons.svelte";

  export let footerSettings = [];
  export let socialMediaSettings = [];

  const navItems = footerSettings.footerNavigation || [];
</script>

<footer class="bg-gray-100">
  <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav role="navigation" class="-mx-5 -my-2 flex flex-wrap justify-center">
      {#each navItems as item}
        <div class="px-5 py-2">
          <Link
            link={item}
            classes="text-base leading-6 text-gray-500 hover:text-gray-900"
          />
        </div>
      {/each}
    </nav>
    {#if footerSettings.showSocialMediaIcons}
      <SocialMediaIcons socialMediaHandles={socialMediaSettings.socialMediaHandles} iconClasses="h-6 w-6 mx-3  mb-4" wrapperClasses="mt-8 flex flex-wrap justify-center" />
    {/if}
    <div class="mt-4 border-t border-gray-200 w-1/2 mx-auto"></div>
    <div class="mt-4 flex flex-wrap justify-center space-x-3">
      {#if footerSettings.copyright}
        <span class="text-xs leading-6 text-gray-400">{footerSettings.copyright.replace('%year%', new Date().getFullYear())}</span>
      {/if}
      {#each footerSettings.smallLink as item}
        <Link
          link={item}
          classes="text-xs leading-6 text-gray-400 hover:text-gray-900 underline"
        />
      {/each}
    </div>
    <p class="text-xs text-gray-400 leading-6 text-center">
      Website design &amp; development by{' '}
      <a
        href="https://allday.io"
        target="_blank"
        rel="noopener noreferrer"
        class="font-bold underline"
      >
        AllDay.io
      </a>
      .
    </p>
  </div>
</footer>
