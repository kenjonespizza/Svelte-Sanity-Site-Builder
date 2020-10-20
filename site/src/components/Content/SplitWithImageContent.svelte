<script>
  import BlockContent from "../BlockContent.svelte";
  import BasicContent from "./BasicContent.svelte";
  import { urlFor } from "../../utils/helpers";
  import SanityImage from "../SanityImage.svelte";
  import TagRenderer from "../TagRenderer.svelte";

  export let data;

  const acceptableClasses = ["sm", "md", "lg", "xl", "2xl"];
  let sizeClass;
  if (acceptableClasses.includes(data.textSize)) {
    sizeClass = `prose-${data.textSize} sm:text-gray-500 md:text-gray-500 lg:text-gray-500  lg:max-w-none xl:text-gray-500`;
  } else {
  	sizeClass = "prose-sm sm:prose sm:text-gray-500 md:prose-md md:text-gray-500 lg:prose-lg lg:text-gray-500 lg:max-w-none xl:prose-xl xl:text-gray-500";
  }
</script>

{#if data.image && data.image.asset}
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class="bg-white overflow-hidden">
  <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    {#if data.headingBlock && (data.headingBlock.heading || data.headingBlock.subHeading)}
    <div class="mx-auto text-base max-w-prose lg:max-w-none">
      {#if data.headingBlock && data.headingBlock.subHeading}
        <span class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          {data.headingBlock.subHeading}
        </span>
      {/if}
      
      {#if data.headingBlock && data.headingBlock.heading}
        <TagRenderer tag={data.headingBlock.headingType || "h2"} classes="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {data.headingBlock.heading}
        </TagRenderer>
      {/if}
    </div>
    {/if}
    
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
      <div class="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
        <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
          <div class="relative pb-7/12 lg:pb-0">
            <SanityImage image={data.image} width="800" imageClass="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto" />
          </div>
        </div>
      </div>
      <div>
        <BlockContent content={data.content} classes={`prose text-gray-500 ${sizeClass}`} />
      </div>
    </div>
  </div>
</div>

{:else}
  <BasicContent {data} />
{/if}