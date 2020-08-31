<script>
	import {sitePreferences} from '../localStorageStores';
  
	let newTheme
	const toggle = () => {
		const { classList } = document.querySelector('html');
		classList.remove($sitePreferences.theme);
		newTheme = $sitePreferences.theme === 'light' ? 'dark' : 'light';
		classList.add(newTheme);

		sitePreferences.update(n => {
			n.theme = newTheme;
			return n
		})

		const stringifiedSitePreferences = JSON.stringify($sitePreferences)
		try {
			localStorage.sitePreferences = stringifiedSitePreferences;
		} catch (e) {
			// ignore
		}
	};

</script>

<button on:click={toggle} class="text-gray-500 focus:outline-none">
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		class={`text-gray-500 hover:text-indigo-600 transform origin-center ${
			$sitePreferences.theme === 'light' ? 'rotate-45' : 'rotate-90'
		}`}
	>
		<mask id="moon-mask-ypdj">
			<rect x="0" y="0" width="20" height="20" fill="#FFF" />
			<circle
				cx={`${$sitePreferences.theme === 'light' ? '11' : '20'}`}
				cy={`${$sitePreferences.theme === 'light' ? '2' : '0'}`}
				r="9"
				fill="black"
			/>
		</mask>
		<circle
			class="transition duration-300"
			cx="10"
			cy="10"
			fill="currentColor"
			mask="url(#moon-mask-ypdj)"
			r={`${$sitePreferences.theme === 'light' ? '10' : '4'}`}
		/>
		<g
			class={`transition duration-300 ${
				$sitePreferences.theme === 'light' ? 'opacity-0' : 'opacity-100'
			}`}
		>
			<circle
				cx={`${$sitePreferences.theme === 'light' ? '10' : '6'}`}
				cy={`${$sitePreferences.theme === 'light' ? '10' : '3.07'}`}
				r="2"
				fill="currentColor"
			/>
			<circle
				cx={`${$sitePreferences.theme === 'light' ? '10' : '14'}`}
				cy={`${$sitePreferences.theme === 'light' ? '10' : '3.07'}`}
				r="2"
				fill="currentColor"
			/>
			<circle
				cx={`${$sitePreferences.theme === 'light' ? '10' : '18'}`}
				cy={`${$sitePreferences.theme === 'light' ? '10' : '10'}`}
				r="2"
				fill="currentColor"
			/>
			<circle
				cx={`${$sitePreferences.theme === 'light' ? '10' : '14'}`}
				cy={`${$sitePreferences.theme === 'light' ? '10' : '16.93'}`}
				r="2"
				fill="currentColor"
			/>
			<circle
				cx={`${$sitePreferences.theme === 'light' ? '10' : '6'}`}
				cy={`${$sitePreferences.theme === 'light' ? '10' : '16.93'}`}
				r="2"
				fill="currentColor"
			/>
			<circle
				cx={`${$sitePreferences.theme === 'light' ? '10' : '2'}`}
				cy={`${$sitePreferences.theme === 'light' ? '10' : '10'}`}
				r="2"
				fill="currentColor"
			/>
		</g>
	</svg>
</button>

<style>

</style>