<script context="module">
  import BlockContent from '../BlockContent.svelte'
  import Button from '../Button.svelte'
  import TagRenderer from '../TagRenderer.svelte'
  import {urlFor} from '../../utils/helpers'
</script>  
<script>
  export let data

  let wrapperClass
  let bgColorClass
  let subHeadingClass
  let headingClass
  let textClass

  if (data.backgroundColor === 'inverted') {
    wrapperClass = 'inverted'
    bgColorClass = 'bg-gray-50'
    subHeadingClass = 'text-gray-500'
    headingClass = 'text-gray-900'
    textClass = 'text-gray-500'
  } else if (data.backgroundColor === 'primary') {
    bgColorClass = 'bg-indigo-600'
    subHeadingClass = 'text-textOnPrimary opacity-75'
    headingClass = 'text-textOnPrimary'
    textClass = 'text-textOnPrimary opacity-75'
  } else {
    bgColorClass = 'bg-gray-50'
    subHeadingClass = 'text-gray-500'
    headingClass = 'text-gray-900'
    textClass = 'text-gray-500'
  }
</script>

<div class={`${wrapperClass}`}>
  <div class={`${bgColorClass} relative`}>
    <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      {#if data.image && data.image.image}
        <img class="w-full h-full object-cover" src={urlFor(data.image.image).quality(80).width(1400)} alt={data.image.image.alt}>
      {/if}
    </div>
    <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        
        {#if data.headingBlock && data.headingBlock.subHeading}
          <div class={`${subHeadingClass} text-sm mb-2 font-semibold uppercase tracking-wide sm:text-base lg:text-sm xl:text-base`}>
            {data.headingBlock.subHeading}
          </div>
        {/if}

        {#if data.headingBlock && data.headingBlock.heading}
          <TagRenderer tag={data.headingBlock.headingType || 'h2'} classes={`${headingClass} mt-2 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10`}>
            {data.headingBlock.heading}
          </TagRenderer>
        {/if}

        <BlockContent content={data.content} classes={`${textClass} mt-3 text-lg leading-7 prose`} />

        <div class="mt-8 max-w-md flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 md:flex-col md:space-y-3 md:space-x-0 lg:flex-row lg:space-x-3 lg:space-y-0">
          {#if data.buttons && data.buttons.length > 0}
            {#each data.buttons as button}
              <Button {button} />
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
