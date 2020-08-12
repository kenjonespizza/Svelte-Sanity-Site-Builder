<script context="module">
	import client from '../sanityClient'

	export async function preload(page, session) {
		const siteSettingsResponse = await client.fetch('*[_type == "siteSettings"]')
		const menuSettingsResponse = await client.fetch('*[_type == "menuSettings"]')
		return { siteSettings: siteSettingsResponse || [], menuSettings: menuSettingsResponse || [] }
	}
</script>

<script>
	import Nav from '../components/Nav/Nav.svelte';

	export let segment;
	export let siteSettings;
	// console.log('siteSettings:', siteSettings)
	export let menuSettings;
	// console.log('menuSettings:', menuSettings)
</script>

<style>

</style>

<Nav {segment} {menuSettings}/>

<main>
	<slot></slot>
</main>