<script context="module">
  import BlockContent from "../BlockContent.svelte";
  import Button from "../Button.svelte";
  import TagRenderer from "../TagRenderer.svelte";
  import { urlFor } from "../../utils/helpers";
console.log("process.env.SANITY_PROJasdfECT_ID22222:", process.env.SANITY_STUDIO_API_PROJECT_ID);
</script>  
<script>
  export let data;
</script>

<div class="relative bg-gray-50 overflow-hidden">
  <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
    <div class="relative h-full max-w-screen-xl mx-auto">
      <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
      </svg>
    </div>
  </div>
  <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">

    <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div class="text-center">
        
        {#if data.headingBlock && data.headingBlock.subHeading}
          <div class="text-sm mb-2 font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
            {data.headingBlock.subHeading}
          </div>
        {/if}
        
        {#if data.headingBlock && data.headingBlock.heading}
          <TagRenderer tag={data.headingBlock.headingType || "h2"} classes="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {data.headingBlock.heading}
          </TagRenderer>
        {/if}

        <BlockContent content={data.content} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl prose" />

        <div class="mt-5 max-w-md mx-auto flex-row space-y-3 sm:flex sm:space-x-3 sm:space-y-0 sm:justify-center md:mt-8">
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
