<script context="module">
	import client from '../sanityClient'

	export async function preload(page, session) {
		const settings = await client.fetch(`*[][0]{'siteSettings':*[_type == "siteSettings"]{...},'menuSettings':*[_type == "menuSettings"]{...},'themeSettings':*[_type == "themeSettings"]{...}}`)
		// return { siteSettings: siteSettingsResponse || [], menuSettings: menuSettingsResponse || [] }
		const {menuSettings: menuSettingsArr, siteSettings: siteSettingsArr, themeSettings: themeSettingsArr} = settings
		const menuSettings = menuSettingsArr[0]
		const siteSettings = siteSettingsArr[0]
		const themeSettings = themeSettingsArr[0]
		const brandColor = {
			light: {
				primary: themeSettings.colorPrimaryLight
			},
			dark: {
				primary: themeSettings.colorPrimaryDark
			}
		};

		return {menuSettings, siteSettings, themeSettings, brandColor }
	}

	
</script>

<script>
  import { onMount } from 'svelte'
	import {shade, tint} from 'polished'
	import chroma from 'chroma-js'
	import Nav from '../components/Nav/Nav.svelte';
	import defaultColor from '../theme/colors';
	import {theme} from '../theme/mode';
	console.log('$theme:', $theme)

	function changeTheme() {
		theme.update( t => t === 'light' ? 'dark' : 'light')
		localStorage.setItem('theme', $theme)
		console.log('t:', $theme)
	}

	export let segment
	export let siteSettings
	export let themeSettings

	export let menuSettings
	export let brandColor
	
	// let theme = "light"

	const lightPrimaryLight = chroma.scale(['white', {...brandColor.light.primary.rgb}]).padding([0.2, 0]).colors(7)
	lightPrimaryLight.pop()
	const lightPrimaryDark = chroma.scale([{...brandColor.light.primary.rgb}, 'black']).padding([0, 0.2]).colors(5)
	const lightPrimary = [...lightPrimaryLight, ...lightPrimaryDark]
	
	const darkPrimaryLight = chroma.scale(['white', {...brandColor.dark.primary.rgb}]).padding([0.2, 0]).colors(7)
	darkPrimaryLight.pop()
	const darkPrimaryDark = chroma.scale([{...brandColor.dark.primary.rgb}, 'black']).padding([0, 0.2]).colors(5)
	const darkPrimary = [...darkPrimaryLight, ...darkPrimaryDark]

	const color = {
		light: {
			...defaultColor.light,
			primary: {
				...lightPrimary
			}
		},
		dark: {
			...defaultColor.dark,
			primary: {
				...darkPrimary
			}
		}
	}

	const boxShadow = $theme === 'light' ? "--boxShadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);" : "--boxShadow-xs: 0 0 0 1px rgba(255, 255, 255, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(255, 255, 255, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(255, 255, 255, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);";

  // import { themeStore } from '../theme.js' // a writable store

  onMount(renderCSS)
  theme.subscribe(renderCSS) // subscribe to theme updates elsewhere in the UI
  function renderCSS() {
    if (typeof document === 'undefined') return // SSR
    const stylesheet = document.getElementById("unique-stylesheet-id");
    console.log('stylesheet:', stylesheet)
    if (!stylesheet) return // not rendered yet
    let string = ``
		string += `--primary-50: ${color[$theme].primary[0]};`
		string += `--primary-100: ${color[$theme].primary[1]};`
		string += `--primary-200: ${color[$theme].primary[2]};`
		string += `--primary-300: ${color[$theme].primary[3]};`
		string += `--primary-400: ${color[$theme].primary[4]};`
		string += `--primary-500: ${color[$theme].primary[5]};`
		string += `--primary-600: ${color[$theme].primary[6]};`
		string += `--primary-700: ${color[$theme].primary[7]};`
		string += `--primary-800: ${color[$theme].primary[8]};`
		string += `--primary-900: ${color[$theme].primary[9]};`
		string += `--primary-950: ${color[$theme].primary[10]};`
		string += `--black: ${color[$theme].black};`
		string += `--white: ${color[$theme].white};`
		string += `--gray-950: ${color[$theme].gray[950]};`
		string += `--gray-900: ${color[$theme].gray[900]};`
		string += `--gray-800: ${color[$theme].gray[800]};`
		string += `--gray-700: ${color[$theme].gray[700]};`
		string += `--gray-600: ${color[$theme].gray[600]};`
		string += `--gray-500: ${color[$theme].gray[500]};`
		string += `--gray-400: ${color[$theme].gray[400]};`
		string += `--gray-300: ${color[$theme].gray[300]};`
		string += `--gray-200: ${color[$theme].gray[200]};`
		string += `--gray-100: ${color[$theme].gray[100]};`
		string += `--gray-50: ${color[$theme].gray[50]};`
		string += boxShadow

    stylesheet.innerHTML = `html { ${string} }`
  }


//



	

</script>

<svelte:head>
  <style id="unique-stylesheet-id"> </style>
  <script>
    // read the stored theme if it exists, 
    // and add it to stylesheet, before the user sees it
    (function() {
      let temp = localStorage.getItem('theme')
      if (temp) {
        console.log('temp:', temp)
        temp = JSON.parse(temp) // store object
        if (typeof document === 'undefined') return // SSR
        const stylesheet = document.getElementById("unique-stylesheet-id");
        let string = ``
        string += `--primary-50: ${color[temp].primary[0]};`
				string += `--primary-100: ${color[temp].primary[1]};`
				string += `--primary-200: ${color[temp].primary[2]};`
				string += `--primary-300: ${color[temp].primary[3]};`
				string += `--primary-400: ${color[temp].primary[4]};`
				string += `--primary-500: ${color[temp].primary[5]};`
				string += `--primary-600: ${color[temp].primary[6]};`
				string += `--primary-700: ${color[temp].primary[7]};`
				string += `--primary-800: ${color[temp].primary[8]};`
				string += `--primary-900: ${color[temp].primary[9]};`
				string += `--primary-950: ${color[temp].primary[10]};`
				string += `--black: ${color[temp].black};`
				string += `--white: ${color[temp].white};`
				string += `--gray-950: ${color[temp].gray[950]};`
				string += `--gray-900: ${color[temp].gray[900]};`
				string += `--gray-800: ${color[temp].gray[800]};`
				string += `--gray-700: ${color[temp].gray[700]};`
				string += `--gray-600: ${color[temp].gray[600]};`
				string += `--gray-500: ${color[temp].gray[500]};`
				string += `--gray-400: ${color[temp].gray[400]};`
				string += `--gray-300: ${color[temp].gray[300]};`
				string += `--gray-200: ${color[temp].gray[200]};`
				string += `--gray-100: ${color[temp].gray[100]};`
				string += `--gray-50: ${color[temp].gray[50]};`
				string += boxShadow

        stylesheet.innerHTML = `html { ${string} }`
      }
    })()
  </script>
</svelte:head>

<style>
	
</style>

<!-- <div class="color-mode-{theme}" style="
	--primary-950: {color[theme].primary[10]};
	--primary-900: {color[theme].primary[9]};
	--primary-800: {color[theme].primary[8]};
	--primary-700: {color[theme].primary[7]};
	--primary-600: {color[theme].primary[6]};
	--primary-500: {color[theme].primary[5]};
	--primary-400: {color[theme].primary[4]};
	--primary-300: {color[theme].primary[3]};
	--primary-200: {color[theme].primary[2]};
	--primary-100: {color[theme].primary[1]};
	--primary-50: {color[theme].primary[0]};

	--black: {color[theme].black};
	--white: {color[theme].white};
	--gray-950: {color[theme].gray[950]};
	--gray-900: {color[theme].gray[900]};
	--gray-800: {color[theme].gray[800]};
	--gray-700: {color[theme].gray[700]};
	--gray-600: {color[theme].gray[600]};
	--gray-500: {color[theme].gray[500]};
	--gray-400: {color[theme].gray[400]};
	--gray-300: {color[theme].gray[300]};
	--gray-200: {color[theme].gray[200]};
	--gray-100: {color[theme].gray[100]};
	--gray-50: {color[theme].gray[50]};

	{boxShadow}
"> -->
	<Nav {segment} {menuSettings}/>

	<main>
		<button on:click={changeTheme}>Toggle</button>
		<slot></slot>
	</main>
<!-- </div> -->