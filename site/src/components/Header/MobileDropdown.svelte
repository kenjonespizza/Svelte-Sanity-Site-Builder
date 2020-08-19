<script>
  import Link from '../Link.svelte'
  import { isMobileNavOpen } from '../../stores'

  let isOpen = false

  function toggle() {isOpen = !isOpen}

  function toggleMobileNav() {
    isMobileNavOpen.update(() => !$isMobileNavOpen)
  }

  function toggleDropdownAndNav () {
    toggle()
    toggleMobileMenu()
  }

  export let data;
</script>

<!-- <button on:click={toggle}>Clicky</button> -->

<div class="text-base leading-6 font-medium text-gray-900 flex flex-col justify-center rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
  <button
    on:click={toggle}
    type="button"
    class={`${
      isOpen ? 'bg-gray-100 rounded-b-none' : ''} rounded-lg text-gray-900 px-6 py-3 group inline-flex items-center text-base leading-6 font-medium hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
  >
    <span>{data.text}</span>
    <svg
      class={`${
        isOpen ? '-rotate-180' : ''
      } h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transform transition ease-in-out duration-150`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>

  <div class={`${isOpen ? 'opacity-100 block' : 'opacity-0 translate-y-1 hidden'} -my-3 py-3`}
      >
    <div class={`${isOpen ? 'rounded-t-none rounded-b-md' : ''} bg-gray-100 rounded-lg p-2 flex flex-col`}>
      {#each data.pages as item}
        <div on:click={toggleMobileNav}>
          <Link
            on:click={toggle}
            link={item}
            classes="text-base leading-6 px-6 py-4 font-medium text-gray-900 flex items-center rounded-md hover:bg-gray-200 transition ease-in-out duration-150"
          >
            {item.text}
          </Link>
        </div>
      {/each}
    </div>
  </div>
</div>