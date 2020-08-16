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

<div class="relative bg-gray-50">
  <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <TagRenderer tag={data.headingType} classes="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            {data.heading}
          </TagRenderer>
          <!-- <BlockContent content={data.heading} /> -->
        <div class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl prose">
          <BlockContent content={data.content} />
        </div>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start space-x-3">
            {#each data.buttons as button}
            <Button {button} />
            {/each}
            <!-- <a href="/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Live demo
            </a> -->
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img class="absolute inset-0 w-full h-full object-cover" src={urlFor(data.image.image).quality(80).width(1400)} alt={data.image.image.alt}>
    </div>
  </main>
</div>