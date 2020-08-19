<script context="module">
  import BlockContent from '../BlockContent.svelte'
  import Button from '../Button.svelte'
  import TagRenderer from '../TagRenderer.svelte'
  import {urlFor} from '../../utils/helpers'
</script>  
<script>
  export let data
</script>

<div class="relative bg-white overflow-hidden text-center lg:text-left">
  <div class="max-w-screen-xl mx-auto">
    <div class="relative z-10 py-8 bg-white sm:py-16 md:py-20 lg:max-w-2xl lg:w-full lg:py-28 xl:py-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <main class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div class="sm:text-center lg:text-left">
          <TagRenderer tag={data.headingType || 'h2'} classes="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {data.heading}
          </TagRenderer>

          <BlockContent content={data.content} classes="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 prose" />
          
          <div class="mt-5 sm:mt-8 flex-row space-y-3 sm:flex sm:space-x-3 sm:space-y-0 sm:justify-center lg:justify-start">
            {#if data.buttons && data.buttons.length > 0}
              {#each data.buttons as button}
                <Button {button} />
              {/each}
            {/if}
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-600">
    {#if data.image && data.image.image}
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={urlFor(data.image.image).quality(80).width(1400)} alt={data.image.image.alt}>
    {/if}
  </div>
</div>
