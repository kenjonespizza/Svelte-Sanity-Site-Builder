<script>
import { each } from "svelte/internal";
import getComponent from './BlockResolver'

export let socialMediaHandles = {}
console.log('socialMediaHandles1:', socialMediaHandles)
export let wrapperClasses = "flex space-x-4"
export let iconClasses = undefined

let socialMediaHandlesArray = Object.entries(socialMediaHandles).slice(1)
console.log('socialMediaHandlesArray2:', socialMediaHandlesArray)
</script>

<ul class={wrapperClasses}>
  {#each socialMediaHandlesArray as [name, url]}
    <li>
      <a href={url} target="_blank" rel="external noopener noreferrer" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
        <span class="sr-only">{name}</span>
        <svelte:component this={getComponent(name)} classes={iconClasses}/>
      </a>
    </li>
  {/each}
</ul>