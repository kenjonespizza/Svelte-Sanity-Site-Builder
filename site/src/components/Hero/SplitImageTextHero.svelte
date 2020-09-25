<script context="module">
  import BlockContent from "../BlockContent.svelte";
  import Button from "../Button.svelte";
  import TagRenderer from "../TagRenderer.svelte";
  import { urlFor } from "../../utils/helpers";
</script>  
<script>
  export let data;
</script>

<div class="relative bg-gray-50">
  <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        
        {#if data.headingBlock && data.headingBlock.subHeading}
          <div class="text-sm mb-2 font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
            {data.headingBlock.subHeading}
          </div>
        {/if}
        
        {#if data.headingBlock && data.headingBlock.heading}
          <TagRenderer tag={data.headingBlock.headingType || "h2"} classes="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            {data.headingBlock.heading}
          </TagRenderer>
        {/if}

        <BlockContent content={data.content} classes="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl prose" />

        <div class="mt-10 flex-row space-y-3 sm:flex sm:space-x-3 sm:space-y-0 sm:justify-center lg:justify-start">
          {#if data.buttons && data.buttons.length > 0}
            {#each data.buttons as button}
              <Button {button} />
            {/each}
          {/if}
        </div>
      </div>

    </div>
    <div class="relative bg-indigo-600 w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      {#if data.image && data.image.asset}
        <img loading=lazy class="absolute inset-0 w-full h-full object-cover" src={urlFor(data.image).quality(80).width(1400)} alt={data.image.alt}>
      {/if}
    </div>
  </main>
</div>