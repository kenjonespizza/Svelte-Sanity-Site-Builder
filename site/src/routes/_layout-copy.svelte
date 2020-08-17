<script context="module">
	import client from '../sanityClient'
	import defaultColor from '../theme/colors';
	// import {theme} from '../theme/mode'; 


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

		// const boxShadow = theme === 'light' ? "--boxShadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);" : "--boxShadow-xs: 0 0 0 1px rgba(255, 255, 255, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(255, 255, 255, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(255, 255, 255, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);";

		// theme.subscribe(boxShadow) // Wut

		// import { themeStore } from '../theme.js' // a writable store

    let primaryLight = {
			'light-primary-50': color['light'].primary[0],
			'light-primary-100': color['light'].primary[1],
			'light-primary-200': color['light'].primary[2],
			'light-primary-300': color['light'].primary[3],
			'light-primary-400': color['light'].primary[4],
			'light-primary-500': color['light'].primary[5],
			'light-primary-600': color['light'].primary[6],
			'light-primary-700': color['light'].primary[7],
			'light-primary-800': color['light'].primary[8],
			'light-primary-900': color['light'].primary[9],
			'light-primary-950': color['light'].primary[10],
			'light-black': color['light'].black,
			'light-white': color['light'].white,
			'light-gray-950': color['light'].gray[950],
			'light-gray-900': color['light'].gray[900],
			'light-gray-800': color['light'].gray[800],
			'light-gray-700': color['light'].gray[700],
			'light-gray-600': color['light'].gray[600],
			'light-gray-500': color['light'].gray[500],
			'light-gray-400': color['light'].gray[400],
			'light-gray-300': color['light'].gray[300],
			'light-gray-200': color['light'].gray[200],
			'light-gray-100': color['light'].gray[100],
			'light-gray-50': color['light'].gray[50],
		}
		// ${boxShadow}`
		
		let primaryDark = {
			'dark-primary-50': color['dark'].primary[0],
			'dark-primary-100': color['dark'].primary[1],
			'dark-primary-200': color['dark'].primary[2],
			'dark-primary-300': color['dark'].primary[3],
			'dark-primary-400': color['dark'].primary[4],
			'dark-primary-500': color['dark'].primary[5],
			'dark-primary-600': color['dark'].primary[6],
			'dark-primary-700': color['dark'].primary[7],
			'dark-primary-800': color['dark'].primary[8],
			'dark-primary-900': color['dark'].primary[9],
			'dark-primary-950': color['dark'].primary[10],
			'dark-black': color['dark'].black,
			'dark-white': color['dark'].white,
			'dark-gray-950': color['dark'].gray[950],
			'dark-gray-900': color['dark'].gray[900],
			'dark-gray-800': color['dark'].gray[800],
			'dark-gray-700': color['dark'].gray[700],
			'dark-gray-600': color['dark'].gray[600],
			'dark-gray-500': color['dark'].gray[500],
			'dark-gray-400': color['dark'].gray[400],
			'dark-gray-300': color['dark'].gray[300],
			'dark-gray-200': color['dark'].gray[200],
			'dark-gray-100': color['dark'].gray[100],
			'dark-gray-50': color['dark'].gray[50],
		}
		// ${boxShadow}`

		return {menuSettings, siteSettings, themeSettings, primaryLight, primaryDark }
	}

	
</script>

<script>
  import { onMount } from 'svelte'
	import {shade, tint} from 'polished'
	import chroma from 'chroma-js'
	import cssVars from 'svelte-css-vars';
	import Nav from '../components/Nav/Nav.svelte';

	export let segment
	export let siteSettings
	export let themeSettings

	export let menuSettings
	export let primaryLight
	console.log('primaryLight:', primaryLight)
	export let primaryDark
	console.log('primaryDark:', primaryDark)

	$: styleVars = {
		...primaryLight,
		...primaryDark
	};
	

	// console.log('styleVars:', styleVars)

</script>

<style>
	:global(.theme-mode){
		--primary-950: var(--light-primary-950);
		--primary-900: var(--light-primary-900);
		--primary-800: var(--light-primary-800);
		--primary-700: var(--light-primary-700);
		--primary-600: var(--light-primary-600);
		--primary-500: var(--light-primary-500);
		--primary-400: var(--light-primary-400);
		--primary-300: var(--light-primary-300);
		--primary-200: var(--light-primary-200);
		--primary-100: var(--light-primary-100);
		--primary-50: var(--light-primary-50);

		--black: var(--light-black);
		--white: var(--light-white);
		--gray-950: var(--light-gray-950);
		--gray-900: var(--light-gray-900);
		--gray-800: var(--light-gray-800);
		--gray-700: var(--light-gray-700);
		--gray-600: var(--light-gray-600);
		--gray-500: var(--light-gray-500);
		--gray-400: var(--light-gray-400);
		--gray-300: var(--light-gray-300);
		--gray-200: var(--light-gray-200);
		--gray-100: var(--light-gray-100);
		--gray-50: var(--light-gray-50);
	}
	:global(.dark:root){
		--header-color: purple
	}
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
<div class="theme-mode" use:cssVars={styleVars}>
	<Nav {segment} {menuSettings}/>

	<main>
		<slot></slot>
	</main>
</div>