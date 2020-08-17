<script context="module">
	// import { get } from 'svelte/store';
	import client from '../sanityClient'
	import defaultColor from '../theme/colors';
	// import {theme} from '../theme/mode'; 

	let themeFromLocalStorage
	try {
		themeFromLocalStorage = localStorage.theme;
	} catch (e) {
		// ignore — could be SSR, or e.g. Firefox with restrictive permissions
	}

	let theme = themeFromLocalStorage ? themeFromLocalStorage : 'light'

	console.log('layouttheme:', theme)

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

		const boxShadow = theme === 'light' ? "--boxShadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);" : "--boxShadow-xs: 0 0 0 1px rgba(255, 255, 255, 0.05);--boxShadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);--boxShadow-default: 0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);--boxShadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);--boxShadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);--boxShadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04);--boxShadow-2xl: 0 25px 50px -12px rgba(255, 255, 255, 0.25);--boxShadow-inner: inset 0 2px 4px 0 rgba(255, 255, 255, 0.06);--boxShadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);";

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

		



		return {menuSettings, siteSettings, themeSettings, darkVars, lightVars, themeFromLocalStorage }
	}

	
</script>

<script>
  import { onMount } from 'svelte'
	import {shade, tint} from 'polished'
	import chroma from 'chroma-js'
	// import cssVars from 'svelte-css-vars';
	import Nav from '../components/Nav/Nav.svelte';
	import ThemeToggler from '../components/ThemeToggler.svelte';

	export let segment
	export let siteSettings
	export let themeSettings
	export let darkVars
	export let lightVars
	export let themeFromLocalStorage
	export let menuSettings

	let theme = themeFromLocalStorage ? themeFromLocalStorage : ''

	try {
		theme = localStorage.theme;
	} catch (e) {
		// ignore — could be SSR, or e.g. Firefox with restrictive permissions
	}
	console.log('theme:', theme)

	let cssVars = theme === 'dark' ? darkVars : lightVars 
	console.log('cssVars:', cssVars)
</script>

<div style="{cssVars}">
	<Nav {segment} {menuSettings}/>
	<main>
		<ThemeToggler />
		<slot></slot>
	</main>
</div>