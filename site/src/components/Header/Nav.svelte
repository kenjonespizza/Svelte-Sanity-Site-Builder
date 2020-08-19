<script>
  import ThemeToggler from '../ThemeToggler.svelte';
  import Link from '../Link.svelte';
  import Button from '../Button.svelte';
  import Dropdown from './Dropdown.svelte';
	
	// export let segment = []
	export let menuSettings = []
	// export let siteSettings = []
	
  const navItems = menuSettings.headerNavigation;

</script>

<nav class="hidden md:flex space-x-8 items-baseline">
  {#each navItems as item}
    {#if item._type === 'link'}
      <Link
        link={item}
        classes="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
      />
    {:else if item._type === 'button'}
      <Button button={item} classes="" />
    {:else if item._type === 'dropdownMenu'}
      <Dropdown data={item} />
    {/if}
  {/each}
</nav>
