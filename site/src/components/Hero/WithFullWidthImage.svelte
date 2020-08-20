<script context="module">
  import BlockContent from '../BlockContent.svelte'
  import Button from '../Button.svelte'
  import TagRenderer from '../TagRenderer.svelte'
  import {urlFor} from '../../utils/helpers'
</script>  
<script>
  export let data
  // console.log('data:', data)
</script>

<div class="bg-gray-50">
  <div class="relative overflow-hidden">
    <div class="block absolute inset-y-0 h-full w-full">
      <div class="relative h-full">
        <svg class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)" />
        </svg>
        <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)" />
        </svg>
      </div>
    </div>

    <div class="relative pt-6 pb-12 lg:pb-20">
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
        <div class="text-center">

          <TagRenderer tag={data.headingType || 'h2'} classes="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {data.heading}
          </TagRenderer>

          <BlockContent content={data.content} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl prose" />

          <div class="mt-5 max-w-md mx-auto flex-row space-y-3 sm:flex sm:space-x-3 sm:space-y-0 sm:justify-center md:mt-8">
            {#if data.buttons && data.buttons.length > 0}
              {#each data.buttons as button}
                <Button {button} />
              {/each}
            {/if}
          </div>
          
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex flex-col">
        <div class="flex-1"></div>
        <div class="flex-1 w-full bg-gray-800"></div>
      </div>
      {#if data.image && data.image.image}
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
          <img class="relative rounded-lg shadow-lg" src={urlFor(data.image.image).quality(80).width(1400)} alt={data.image.image.alt}>
        </div>
      {/if}
    </div>
  </div>
  <div class="inverted bg-gray-200">
    <div class="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8">

      <BlockContent content={data.content} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl prose" />
      
    </div>
  </div>
</div>
