<script>
  import { isMobileNavOpen } from '../../stores'
  import {urlFor} from '../../utils/helpers'
  import ThemeToggler from '../ThemeToggler.svelte';
  import Link from '../Link.svelte';
  import Button from '../Button.svelte';
  import MobileDropdown from './MobileDropdown.svelte';
	
	// export let segment = []
	export let themeSettings = []
	export let menuSettings = []
	export let siteSettings = []
	
  const navItems = menuSettings.headerNavigation || [];

  function toggleMobileNav() {
    isMobileNavOpen.update(() => !$isMobileNavOpen)
  }

</script>

<button
  on:click={toggleMobileNav}
  class={`${
    $isMobileNavOpen
      ? 'opacity-75 z-30 pointer-events-auto'
      : 'opacity-0 z-0 pointer-events-none'
  } absolute top-0 left-0 w-screen h-screen bg-black opacity-10 md:hidden cursor-default transition duration-300`}
/>
<div
  class={`${
    $isMobileNavOpen ? 'fixed' : 'hidden'
  } mobile-nav top-0 inset-x-0 p-2 z-30 transition transform origin-top-right md:hidden`}
>
  <div class="rounded-lg shadow-lg">
    <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5 space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <Link classes="flex" ref={siteSettings.homepage._ref}>
              <!-- Logo On Light -->
              {#if themeSettings.logoOnLight || themeSettings.logoOnDark}
                <img class="hiddenOnDark w-auto" style="height: {menuSettings && menuSettings.logoHeight || 40}px" src={urlFor(themeSettings.logoOnLight || themeSettings.logoOnDark).quality(100).height(menuSettings && menuSettings.logoHeight * 2 || 80)} alt={siteSettings.siteName}>
              {/if}
              <!-- Logo On Dark -->
              {#if themeSettings.logoOnLight || themeSettings.logoOnDark}
                <img class="hiddenOnLight w-auto" style="height: {menuSettings && menuSettings.logoHeight || 40}px" src={urlFor(themeSettings.logoOnDark || themeSettings.logoOnLight).quality(100).height(menuSettings && menuSettings.logoHeight * 2 || 80)} alt={siteSettings.siteName}>
              {/if}
              <!-- Show text as logo if no light or dark logo is uploaded -->
              {#if siteSettings.siteName && !(themeSettings.logoOnLight && themeSettings.logoOnDark)}
                <span class="font-bold text-2xl flex items-center" style="minHeight: {menuSettings && menuSettings.logoHeight || 40}">{siteSettings.siteName}</span>
              {/if}
            </Link>
          </div>
          <div>
            <button
              on:click={toggleMobileNav}
              type="button"
              class="-mr-2 -mt-1 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <nav role="navigation" class="flex flex-col space-y-2">
            {#each navItems as item}
              {#if item._type === 'link'}
                <div on:click={toggleMobileNav}>
                  <Link
                    link={item}
                    classes="text-base leading-6 font-medium px-6 py-3 text-gray-900 flex items-center rounded-md hover:bg-gray-100 transition ease-in-out duration-150"
                  />
                </div>
              {:else if item._type === 'button'}
                <div on:click={toggleMobileNav}>
                  <Button 
                    on:click={toggleMobileNav}
                    button={item} 
                    additionalClasses="w-full" />
                </div>
              {:else if item._type === 'dropdownMenu'}
                <MobileDropdown data={item} />
              {/if}
            {/each}
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>