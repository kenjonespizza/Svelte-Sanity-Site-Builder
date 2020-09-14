<script context="module">
	import { get } from 'svelte/store';

	import client from '../sanityClient'
	import defaultColor from '../theme/colors';
	// import {theme} from '../theme/mode'; 

	// let theme = 'light';
	// try {
	// 	theme = localStorage.theme;
	// } catch (e) {
	// 	// ignore — could be SSR, or e.g. Firefox with restrictive permissions
	// }
	// console.log(window);
	// initialTheme.update(theme)

	export async function preload(page, session) {
		const globalDataFetch = await client.fetch(`*[][0]{'siteSettings':*[_type == "siteSettings"][0]{...},'menuSettings':*[_type == "menuSettings"][0]{...},'themeSettings':*[_type == "themeSettings"][0]{...},'allPageData': *[defined(pageInfo.slug.current)]{_id,pageInfo,_type}}`)
		// return { siteSettings: siteSettingsResponse || [], menuSettings: menuSettingsResponse || [] }
		const {menuSettings: menuSettingsArr, siteSettings: siteSettingsArr, themeSettings: themeSettingsArr, allPageData: allPageDataArr} = globalDataFetch
		const menuSettings = menuSettingsArr
		const siteSettings = siteSettingsArr
		const allPageData = allPageDataArr
		const themeSettings = themeSettingsArr
		const brandColor = {
			light: {
				primary: themeSettings.colorPrimaryLight
			},
			dark: {
				primary: themeSettings.colorPrimaryDark
			}
		};

		// Make array of colors.  These are skewed because 600 is the main color
		const lightPrimaryLight = chroma.scale(['white', {...brandColor.light.primary.rgb}]).padding([0.1, 0]).colors(7)
		lightPrimaryLight.pop()
		const lightPrimaryDark = chroma.scale([{...brandColor.light.primary.rgb}, 'black']).padding([0, 0.1]).colors(5)
		const lightPrimary = [...lightPrimaryLight, ...lightPrimaryDark]

		// Make array of colors.  These are skewed because 600 is the main color
		const darkPrimaryLight = chroma.scale(['black', {...brandColor.dark.primary.rgb}]).padding([0.1, 0]).colors(7)
		darkPrimaryLight.pop()
		const darkPrimaryDark = chroma.scale([{...brandColor.dark.primary.rgb}, 'white']).padding([0, 0.1]).colors(5)
		const darkPrimary = [...darkPrimaryLight, ...darkPrimaryDark]

		let lightTextOnPrimary
		let lightTextOnPrimaryOpposite
		let darkTextOnPrimary
		let darkTextOnPrimaryOpposite
		
		if (themeSettings.textOnLight == 'white' || themeSettings.textOnLight == 'black') {
		lightTextOnPrimary = defaultColor['light'][themeSettings.textOnLight];
		lightTextOnPrimaryOpposite = defaultColor['light'][themeSettings.textOnLight === 'white' ? 'black' : 'white'];
		} else {
			// See if white or black has a higher contrast on top of the primary color.  Return white or black.
			const contrastLightWhiteOnPrimary = chroma.contrast(defaultColor['light'].white, {...brandColor.light.primary.rgb});
			const contrastLightBlackOnPrimary = chroma.contrast(defaultColor['light'].black, {...brandColor.light.primary.rgb});
			lightTextOnPrimary = contrastLightWhiteOnPrimary > contrastLightBlackOnPrimary ? defaultColor['light'].white : defaultColor['light'].black
			lightTextOnPrimaryOpposite = contrastLightWhiteOnPrimary > contrastLightBlackOnPrimary ? defaultColor['light'].black : defaultColor['light'].white
		}
		
		if (themeSettings.textOnDark == 'white' || themeSettings.textOnDark == 'black') {
			darkTextOnPrimaryOpposite = defaultColor['dark'][themeSettings.textOnDark];
			darkTextOnPrimary = defaultColor['dark'][themeSettings.textOnDark === 'white' ? 'black' : 'white'];
		} else {
			// See if white or black has a higher contrast on top of the primary color.  Return white or black.
			const contrastDarkWhiteOnPrimary = chroma.contrast(defaultColor['dark'].black, {...brandColor.dark.primary.rgb});
			const contrastDarkBlackOnPrimary = chroma.contrast(defaultColor['dark'].white, {...brandColor.dark.primary.rgb});
			darkTextOnPrimary = contrastDarkWhiteOnPrimary > contrastDarkBlackOnPrimary ? defaultColor['dark'].black : defaultColor['dark'].white
			darkTextOnPrimaryOpposite = contrastDarkWhiteOnPrimary > contrastDarkBlackOnPrimary ? defaultColor['dark'].white : defaultColor['dark'].black
		}
		// console.log('contrastDarkBlackOnPrimary:', contrastDarkBlackOnPrimary)
		// console.log('contrastDarkWhiteOnPrimary:', contrastDarkWhiteOnPrimary)

		// Make an object of all needed colors.  This will get turned into JSON and stored in local storage, so dont do anything crazy.
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
					text: lightTextOnPrimary,
					textOpposite: lightTextOnPrimaryOpposite,
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
					text: darkTextOnPrimary,
					textOpposite: darkTextOnPrimaryOpposite,
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

		return {menuSettings, siteSettings, themeSettings, color, allPageData }
	}

</script>

<script>
	import { setContext } from 'svelte';
	import { onMount } from 'svelte'
	import { disableScrolling } from '../stores';
	import chroma from 'chroma-js'
	// import cssVars from 'svelte-css-vars';
	import Header from '../components/Header/Header.svelte';

	export let segment
	export let siteSettings
	export let themeSettings
	export let menuSettings
	export let color

	export let allPageData
	
  setContext('allPageData', allPageData);

  onMount(() => {
		// let theme = 'light'
		if(typeof document !== 'undefined') {
				localStorage.setItem('color', JSON.stringify(color))
				// let theme = localStorage.getItem('theme')
				// themeStore.update(() => theme)
		}

		renderCSS();
		function renderCSS() {
			if (typeof document === 'undefined') return // SSR
			const stylesheet = document.getElementById("unique-stylesheet-id");
			if (!stylesheet) return // not rendered yet
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
			stringLight += `--textOnPrimary: ${color.light.primary.text};`;
			stringLight += `--textOnPrimaryOpposite: ${color.light.primary.textOpposite};`;
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
			stringLight += `--boxShadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);`;
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
			stringDark += `--textOnPrimary: ${color.dark.primary.text};`;
			stringDark += `--textOnPrimaryOpposite: ${color.dark.primary.textOpposite};`;
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
			stringDark += `--boxShadow-xs: 0 0 0 1px rgba(255, 255, 255, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(255, 255, 255, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(255, 255, 255, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);`;
			stylesheet.innerHTML = `
				html.light { ${stringLight} }
				html.dark { ${stringDark} }
				html.light .inverted { ${stringDark} }
				html.dark .inverted { ${stringLight} }
			`
		}
	});

	function setPhoNav(e) {
		const navBar = document.querySelector('.navBar')
		navBar.offsetHeight
		const phoNav = document.querySelector('.phoNav')

		phoNav.style.height = `${navBar.offsetHeight}px`
	}

</script>

<svelte:window on:load={setPhoNav} />

<svelte:head>
	{#if $disableScrolling}
    <style>
      body {
        margin: 0;
        height: 100%;
        overflow: hidden;
      }
    </style>
  {/if}

  <style id="unique-stylesheet-id"> </style>
  <script>
		// read the stored theme if it exists, 
    // and add it to stylesheet, before the user sees it
    (function() {
      let color = localStorage.getItem('color')
      if (color) {
        color = JSON.parse(color) // store object
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
				stringLight += `--textOnPrimary: ${color.light.primary.text};`;
				stringLight += `--textOnPrimaryOpposite: ${color.light.primary.textOpposite};`;
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
				stringLight += `--boxShadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);`;
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
				stringDark += `--textOnPrimary: ${color.dark.primary.text};`;
				stringDark += `--textOnPrimaryOpposite: ${color.dark.primary.textOpposite};`;
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
				stringDark += `--boxShadow-xs: 0 0 0 1px rgba(255, 255, 255, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(255, 255, 255, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(255, 255, 255, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);`;
				stylesheet.innerHTML = `
					html.light { ${stringLight} }
					html.dark { ${stringDark} }
					html.light .inverted { ${stringDark} }
					html.dark .inverted { ${stringLight} }
				`
      }
    })()
  </script>
</svelte:head>

<!-- Nav Placeholder -->
<Header {segment} {menuSettings} {siteSettings} {themeSettings} />
<main role="main">
	<slot></slot>
</main>
