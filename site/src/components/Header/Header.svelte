<script>
  import {onMount} from 'svelte'
  import { sitePreferences } from '../../stores'
  import {urlFor, getTheme} from '../../utils/helpers'
  import Nav from './Nav.svelte';
  import Link from '../Link.svelte';
  import MobileNav from './MobileNav.svelte';
  import ThemeToggler from '../ThemeToggler.svelte';
  // import {theme} from '../../store';
	

  export let menuSettings = []
	export let siteSettings = []
	export let themeSettings = []
	
  const navItems = menuSettings.headerNavigation;
  
  // console.log('$sitePreferences:', $sitePreferences)

</script>

<!-- This example requires Tailwind CSS v1.4.0+ -->
<div class="fixed top-0 z-20 right-0 bg-white w-full navBar">
  <div class="mx-auto px-4 border-b-2 border-gray-100 sm:px-6">
    <div class="flex justify-between items-center py-6 md:space-x-10">
      <div class="">
        <Link classes="flex" ref={siteSettings.frontpage._ref}>
          <!-- Logo On Light -->
          {#if themeSettings.logoOnLight || themeSettings.logoOnDark}
          <img class="hiddenOnDark w-auto" style="height: {menuSettings.logoHeight}px" src={urlFor(themeSettings.logoOnLight || themeSettings.logoOnDark).quality(100).height(menuSettings.logoHeight * 2)} alt={siteSettings.siteName}>
          {/if}
          <!-- Logo On Dark -->
          {#if themeSettings.logoOnLight || themeSettings.logoOnDark}
          <img class="hiddenOnLight w-auto" style="height: {menuSettings.logoHeight}px" src={urlFor(themeSettings.logoOnDark || themeSettings.logoOnLight).quality(100).height(menuSettings.logoHeight * 2)} alt={siteSettings.siteName}>
          {/if}
          {#if siteSettings.siteName && !(themeSettings.logoOnLight && themeSettings.logoOnDark)}
          <span class="font-bold text-2xl flex items-center" style="minHeight: {menuSettings.logoHeight}">{siteSettings.siteName}</span>
        {/if}
        </Link>
      </div>
      <div className="flex space-x-4 md:space-x-10">
        <Nav {menuSettings} />
        <ThemeToggler />
      </div>
    </div>
  </div>
</div>