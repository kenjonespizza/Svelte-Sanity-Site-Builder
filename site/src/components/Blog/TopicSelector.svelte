<script>
  import Link from '../Link.svelte'
  import { unSlugify } from '../../utils/helpers'

  export let topics
  export let currentTopic

  // $: selectedtopic = currentTopic

  let isOpen = false
</script>

{#if topics && topics.length > 0}
  <div class="space-y-1 w-48 pointer">
    <span class="block text-lg leading-5 font-bold text-gray-900">
      Topics: <span class="text-xs text-gray-500">(more specific)</span>
    </span>
    <div class="relative">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button on:click={() => {isOpen = !isOpen}} data-selector="category" type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
          <div class="flex items-center space-x-3">
            <span class="block truncate capitalize">
              {#if currentTopic}
                {unSlugify(currentTopic)}
              {:else}
                Select a topic
              {/if}
            </span>
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      </span>

      <div class={`${isOpen ? 'block' : 'hidden'} absolute mt-1 w-full rounded-md bg-white shadow-lg`}>
        <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
          {#each topics as topic}
            <li on:click={() => {isOpen = !isOpen}} role="option" class="text-gray-900 cursor-default select-none relative hover:bg-gray-100">
              <a href={`blog/topic/${topic}`} sapper:noscroll class=" py-2 px-4 flex items-center space-x-3">
                <span class={`${topic === currentTopic ? 'font-bold' : 'font-normal'} block truncate capitalize`}>
                  {unSlugify(topic)}
                </span>
              </a>
              {#if topic === currentTopic}
                <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                  <!-- Heroicon name: check -->
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}