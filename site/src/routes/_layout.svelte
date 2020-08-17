<script context="module">
	// import { get } from 'svelte/store';
	import client from '../sanityClient'
	import defaultColor from '../theme/colors';
	// import {theme} from '../theme/mode'; 

	let themeSettings

	export async function preload(page, session) {
		const settings = await client.fetch(`*[][0]{'siteSettings':*[_type == "siteSettings"]{...},'menuSettings':*[_type == "menuSettings"]{...},'themeSettings':*[_type == "themeSettings"]{...}}`)
		// return { siteSettings: siteSettingsResponse || [], menuSettings: menuSettingsResponse || [] }
		const {menuSettings: menuSettingsArr, siteSettings: siteSettingsArr, themeSettings: themeSettingsArr} = settings
		const menuSettings = menuSettingsArr[0]
		const siteSettings = siteSettingsArr[0]
		themeSettings = themeSettingsArr[0]
		const brandColor = {
			light: {
				primary: themeSettings.colorPrimaryLight
			},
			dark: {
				primary: themeSettings.colorPrimaryDark
			}
		};

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
				primary: {
					50: lightPrimary[0],
					100: lightPrimary[1],
					200: lightPrimary[2],
					300: lightPrimary[3],
					400: lightPrimary[4],
					500: lightPrimary[5],
					600: lightPrimary[6],
					700: lightPrimary[7],
					800: lightPrimary[8],
					900: lightPrimary[9],
					950: lightPrimary[10],
				},
				black: defaultColor['light'].black,
				white: defaultColor['light'].white,
				gray: {
					950: defaultColor['light'].gray[950],
					900: defaultColor['light'].gray[900],
					800: defaultColor['light'].gray[800],
					700: defaultColor['light'].gray[700],
					600: defaultColor['light'].gray[600],
					500: defaultColor['light'].gray[500],
					400: defaultColor['light'].gray[400],
					300: defaultColor['light'].gray[300],
					200: defaultColor['light'].gray[200],
					100: defaultColor['light'].gray[100],
					50: defaultColor['light'].gray[50],
				}
			},
			dark: {
				primary: {
					50: darkPrimary[0],
					100: darkPrimary[1],
					200: darkPrimary[2],
					300: darkPrimary[3],
					400: darkPrimary[4],
					500: darkPrimary[5],
					600: darkPrimary[6],
					700: darkPrimary[7],
					800: darkPrimary[8],
					900: darkPrimary[9],
					950: darkPrimary[10],
				},
				black: defaultColor['dark'].black,
				white: defaultColor['dark'].white,
				gray: {
					950: defaultColor['dark'].gray[950],
					900: defaultColor['dark'].gray[900],
					800: defaultColor['dark'].gray[800],
					700: defaultColor['dark'].gray[700],
					600: defaultColor['dark'].gray[600],
					500: defaultColor['dark'].gray[500],
					400: defaultColor['dark'].gray[400],
					300: defaultColor['dark'].gray[300],
					200: defaultColor['dark'].gray[200],
					100: defaultColor['dark'].gray[100],
					50: defaultColor['dark'].gray[50],
				}
			}
		}

		// const boxShadow = theme === 'light' ? "--boxShadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);" : "--boxShadow-xs: 0 0 0 1px rgba(255, 255, 255, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(255, 255, 255, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(255, 255, 255, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);";

		// theme.subscribe(boxShadow) // Wut

		// const themePreload = get(theme);
		// console.log('themePreload:', themePreload)

		// import { themeStore } from '../theme.js' // a writable store

    let lightVars = ``;
		lightVars += `--primary-50: ${color['light'].primary[0]};`;
		lightVars += `--primary-100: ${color['light'].primary[1]};`;
		lightVars += `--primary-200: ${color['light'].primary[2]};`;
		lightVars += `--primary-300: ${color['light'].primary[3]};`;
		lightVars += `--primary-400: ${color['light'].primary[4]};`;
		lightVars += `--primary-500: ${color['light'].primary[5]};`;
		lightVars += `--primary-600: ${color['light'].primary[6]};`;
		lightVars += `--primary-700: ${color['light'].primary[7]};`;
		lightVars += `--primary-800: ${color['light'].primary[8]};`;
		lightVars += `--primary-900: ${color['light'].primary[9]};`;
		lightVars += `--primary-950: ${color['light'].primary[10]};`;
		lightVars += `--black: ${color['light'].black};`;
		lightVars += `--white: ${color['light'].white};`;
		lightVars += `--gray-950: ${color['light'].gray[950]};`;
		lightVars += `--gray-900: ${color['light'].gray[900]};`;
		lightVars += `--gray-800: ${color['light'].gray[800]};`;
		lightVars += `--gray-700: ${color['light'].gray[700]};`;
		lightVars += `--gray-600: ${color['light'].gray[600]};`;
		lightVars += `--gray-500: ${color['light'].gray[500]};`;
		lightVars += `--gray-400: ${color['light'].gray[400]};`;
		lightVars += `--gray-300: ${color['light'].gray[300]};`;
		lightVars += `--gray-200: ${color['light'].gray[200]};`;
		lightVars += `--gray-100: ${color['light'].gray[100]};`;
		lightVars += `--gray-50: ${color['light'].gray[50]};`;
		lightVars += "--boxShadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);"
		// ${boxShadow}`
		
		let darkVars = ``
		darkVars += `--primary-50: ${color['dark'].primary[0]};`;
		darkVars += `--primary-100: ${color['dark'].primary[1]};`;
		darkVars += `--primary-200: ${color['dark'].primary[2]};`;
		darkVars += `--primary-300: ${color['dark'].primary[3]};`;
		darkVars += `--primary-400: ${color['dark'].primary[4]};`;
		darkVars += `--primary-500: ${color['dark'].primary[5]};`;
		darkVars += `--primary-600: ${color['dark'].primary[6]};`;
		darkVars += `--primary-700: ${color['dark'].primary[7]};`;
		darkVars += `--primary-800: ${color['dark'].primary[8]};`;
		darkVars += `--primary-900: ${color['dark'].primary[9]};`;
		darkVars += `--primary-950: ${color['dark'].primary[10]};`;
		darkVars += `--black: ${color['dark'].black};`;
		darkVars += `--white: ${color['dark'].white};`;
		darkVars += `--gray-950: ${color['dark'].gray[950]};`;
		darkVars += `--gray-900: ${color['dark'].gray[900]};`;
		darkVars += `--gray-800: ${color['dark'].gray[800]};`;
		darkVars += `--gray-700: ${color['dark'].gray[700]};`;
		darkVars += `--gray-600: ${color['dark'].gray[600]};`;
		darkVars += `--gray-500: ${color['dark'].gray[500]};`;
		darkVars += `--gray-400: ${color['dark'].gray[400]};`;
		darkVars += `--gray-300: ${color['dark'].gray[300]};`;
		darkVars += `--gray-200: ${color['dark'].gray[200]};`;
		darkVars += `--gray-100: ${color['dark'].gray[100]};`;
		darkVars += `--gray-50: ${color['dark'].gray[50]};`;
		darkVars += "--boxShadow-xs: 0 0 0 1px rgba(255, 255, 255, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(255, 255, 255, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(255, 255, 255, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);";
		// ${boxShadow}`

		

	

		return {menuSettings, siteSettings, themeSettings, color }
	}
	
	

	
</script>

<script>
	import {shade, tint} from 'polished'
	import chroma from 'chroma-js'
	// import cssVars from 'svelte-css-vars';
	import Nav from '../components/Nav/Nav.svelte';
	import ThemeToggler from '../components/ThemeToggler.svelte';

	export let segment
	export let siteSettings
	export let themeSettings
	export let menuSettings
	export let color

	import { onMount } from 'svelte'
  import { themeStore } from '../theme/mode.js' // a writable store


	if(typeof document !== 'undefined') {
			localStorage.setItem('color', JSON.stringify(color))
	}
  // onMount(renderCSS)
  // themeStore.subscribe(renderCSS) // subscribe to theme updates elsewhere in the UI
  // function renderCSS() {
  //   if (typeof document === 'undefined') return // SSR
  //   const stylesheet = document.getElementById("unique-stylesheet-id");
  //   if (!stylesheet) return // not rendered yet
  //   let string = ``
  //   if ($themeStore.bgColor) string += `--bg-color: ${$themeStore.bgColor};`
  //   if ($themeStore.textColor) string += `--text-color: ${$themeStore.textColor};`
  //   if ($themeStore.linkColor) string += `--link-color: ${$themeStore.linkColor};`
  //   if ($themeStore.lineLength) string += `--line-length: ${$themeStore.lineLength};`
  //   stylesheet.innerHTML = `html { ${string} }`
  // }

</script>


<svelte:head>
  <style id="unique-stylesheet-id"> </style>
  <script>
		// read the stored theme if it exists, 
    // and add it to stylesheet, before the user sees it
    (function() {
      let color = localStorage.getItem('color')
      if (color) {
        color = JSON.parse(color) // store object
        console.log('color:', color)
        if (typeof document === 'undefined') return // SSR
        const stylesheet = document.getElementById("unique-stylesheet-id");
        let stringLight = ``
				stringLight += `--primary-50: ${color.light.primary[50]};`;
				stringLight += `--primary-100: ${color.light.primary[100]};`;
				stringLight += `--primary-200: ${color.light.primary[200]};`;
				stringLight += `--primary-300: ${color.light.primary[300]};`;
				stringLight += `--primary-400: ${color.light.primary[400]};`;
				stringLight += `--primary-500: ${color.light.primary[500]};`;
				stringLight += `--primary-600: ${color.light.primary[600]};`;
				stringLight += `--primary-700: ${color.light.primary[700]};`;
				stringLight += `--primary-800: ${color.light.primary[800]};`;
				stringLight += `--primary-900: ${color.light.primary[900]};`;
				stringLight += `--primary-950: ${color.light.primary[950]};`;
				stringLight += `--black: ${color.light.black};`;
				stringLight += `--white: ${color.light.white};`;
				stringLight += `--gray-950: ${color.light.gray[950]};`;
				stringLight += `--gray-900: ${color.light.gray[900]};`;
				stringLight += `--gray-800: ${color.light.gray[800]};`;
				stringLight += `--gray-700: ${color.light.gray[700]};`;
				stringLight += `--gray-600: ${color.light.gray[600]};`;
				stringLight += `--gray-500: ${color.light.gray[500]};`;
				stringLight += `--gray-400: ${color.light.gray[400]};`;
				stringLight += `--gray-300: ${color.light.gray[300]};`;
				stringLight += `--gray-200: ${color.light.gray[200]};`;
				stringLight += `--gray-100: ${color.light.gray[100]};`;
				stringLight += `--gray-50: ${color.light.gray[50]};`;
        let stringDark = ``
				stringDark += `--primary-50: ${color.dark.primary[50]};`;
				stringDark += `--primary-100: ${color.dark.primary[100]};`;
				stringDark += `--primary-200: ${color.dark.primary[200]};`;
				stringDark += `--primary-300: ${color.dark.primary[300]};`;
				stringDark += `--primary-400: ${color.dark.primary[400]};`;
				stringDark += `--primary-500: ${color.dark.primary[500]};`;
				stringDark += `--primary-600: ${color.dark.primary[600]};`;
				stringDark += `--primary-700: ${color.dark.primary[700]};`;
				stringDark += `--primary-800: ${color.dark.primary[800]};`;
				stringDark += `--primary-900: ${color.dark.primary[900]};`;
				stringDark += `--primary-950: ${color.dark.primary[950]};`;
				stringDark += `--black: ${color.dark.black};`;
				stringDark += `--white: ${color.dark.white};`;
				stringDark += `--gray-950: ${color.dark.gray[950]};`;
				stringDark += `--gray-900: ${color.dark.gray[900]};`;
				stringDark += `--gray-800: ${color.dark.gray[800]};`;
				stringDark += `--gray-700: ${color.dark.gray[700]};`;
				stringDark += `--gray-600: ${color.dark.gray[600]};`;
				stringDark += `--gray-500: ${color.dark.gray[500]};`;
				stringDark += `--gray-400: ${color.dark.gray[400]};`;
				stringDark += `--gray-300: ${color.dark.gray[300]};`;
				stringDark += `--gray-200: ${color.dark.gray[200]};`;
				stringDark += `--gray-100: ${color.dark.gray[100]};`;
				stringDark += `--gray-50: ${color.dark.gray[50]};`;
				stylesheet.innerHTML = `
					html.light { ${stringLight} }
					html.dark { ${stringDark} }
				`
      }
    })()
  </script>
</svelte:head>

<Nav {segment} {menuSettings}/>
<main>
	<ThemeToggler />
	<slot></slot>
</main>
