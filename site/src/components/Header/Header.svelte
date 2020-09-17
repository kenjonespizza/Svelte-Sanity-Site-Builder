<script>
  import {onMount} from 'svelte'
  import { isMobileNavOpen } from '../../stores'
  import {urlFor} from '../../utils/helpers'
  import Nav from './Nav.svelte';
  import Link from '../Link.svelte';
  import MobileNav from './MobileNav.svelte';
  import ThemeToggler from '../ThemeToggler.svelte';
  // import {theme} from '../../store';
	

  export let menuSettings = []
	export let siteSettings = []
  export let themeSettings = []
  
  function toggleMobileNav() {
    isMobileNavOpen.update(() => !$isMobileNavOpen)
  }

  // This is to assist getting the height of the nav correct before the script funs that sets the filler height
  let initailHeaderHeight = '86px'
  // If there is a button in the header, change the initiasl height
  if(menuSettings && menuSettings.headerNavigation && menuSettings.headerNavigation.length) {
    menuSettings.headerNavigation.forEach(item => {
      if (item._type === "button") {
        initailHeaderHeight = '106px'
      }
    });
  }

</script>

<!-- This example requires Tailwind CSS v1.4.0+ -->
<div class="py-6 phoNav" style="height: {initailHeaderHeight};">
	<div style="height: {menuSettings.logoHeight}px"></div>
</div>
<header class="fixed top-0 z-20 right-0 bg-white w-full navBar">
  <div class="mx-auto px-4 border-b-2 border-gray-100 sm:px-8">
    <div class="flex justify-between items-center py-6 md:space-x-10">
      <div class="">
        <Link classes="flex" ref={siteSettings.frontpage._ref}>
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
      <div class="flex space-x-4 md:space-x-8">

        <Nav {menuSettings} />
        <ThemeToggler />

        <div class="-my-2 md:hidden">
          <button
            on:click={toggleMobileNav}
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-indigo-600 transition duration-150 ease-in-out"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <MobileNav {menuSettings} {siteSettings} {themeSettings} />

</header>