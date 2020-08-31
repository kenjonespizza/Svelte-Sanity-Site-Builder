<script>
  import { afterUpdate } from 'svelte';
  import Link from '../Link.svelte'

  let isOpen = false
  let addAfterStateChange = ''

  function toggle() {isOpen = !isOpen}

  // afterUpdate(() => {
  //   console.log('the component just updated');
  //   if (isOpen) {
  //     addAfterStateChange = 'block'
  //   } else {
  //     addAfterStateChange = 'hidden'
  //   }
	// });

  export let data;
</script>

<!-- <button on:click={toggle}>Clicky</button> -->

<div class="relative">
  <button
    on:click={toggle}
    type="button"
    class={`${isOpen ? "text-gray-900" : "text-gray-500"} -mr-3 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
  >
    <span>{data.text}</span>
    <svg
      class={`${isOpen ? "text-gray-600 -rotate-180" : "text-gray-400"} h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transform transition ease-in-out duration-150`}
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

  <div
    class={`${
      isOpen ? `opacity-100 translate-y-0 pointer-events-auto ${addAfterStateChange}` : `opacity-0 translate-y-1 pointer-events-none ${addAfterStateChange}`
    } absolute -ml-4 mt-3 transform px-2 w-screen transition ease-in-out duration-200 sm:px-0 lg:ml-0 md:w-auto md:whitespace-no-wrap lg:left-1/2 lg:-translate-x-1/2`}
  >
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs overflow-hidden">
        <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          {#each data.pages as item}
            <div on:click={toggle}>
              <Link
                link={item}
                classes={`space-y-1 text-base leading-6 font-medium text-gray-500 transition -m-3 p-3 flex items-start space-x-4 rounded-lg ease-in-out duration-200 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900`}
              >
                {item.text}
              </Link>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>