<script context="module">
  import Button from '../Button.svelte'
  import TagRenderer from '../TagRenderer.svelte'
</script>  
<script>
  export let data

  let wrapperClass
  let bgColorClass
  let subHeadingClass
  let headingClass

  if (data.backgroundColor === 'inverted') {
    wrapperClass = 'inverted'
    bgColorClass = 'bg-gray-50'
    subHeadingClass = 'text-gray-500'
    headingClass = 'text-gray-900'
  } else if (data.backgroundColor === 'primary') {
    bgColorClass = 'bg-indigo-600'
    subHeadingClass = 'text-textOnPrimary opacity-75'
    headingClass = 'text-textOnPrimary'
  } else {
    bgColorClass = 'bg-gray-50'
    subHeadingClass = 'text-gray-500'
    headingClass = 'text-gray-900'
  }
</script>

<div class={`${wrapperClass}`}>
  <div class={bgColorClass}>
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      
      <div>
        {#if data.headingBlock && data.headingBlock.subHeading}
          <div class={`${subHeadingClass} text-sm mb-2 font-semibold uppercase tracking-wide sm:text-base lg:text-sm xl:text-base`}>
            {data.headingBlock.subHeading}
          </div>
        {/if}
        
        {#if data.headingBlock && data.headingBlock.heading}
          <TagRenderer tag={data.headingBlock.headingType || 'h2'} classes={`${headingClass} text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10`}>
            {data.headingBlock.heading}
          </TagRenderer>
        {/if}
      </div>
      
      <div class="mt-8 max-w-md flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 lg:mt-0">
        {#if data.buttons && data.buttons.length > 0}
          {#each data.buttons as button}
            <Button {button} />
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>

