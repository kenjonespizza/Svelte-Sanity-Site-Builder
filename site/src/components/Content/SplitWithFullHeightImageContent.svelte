<script>
  import BlockContent from "../BlockContent.svelte";
  import BasicContent from "./BasicContent.svelte";
  import TagRenderer from "../TagRenderer.svelte";
  import { urlFor } from "../../utils/helpers";

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
  <div class={`${data.backgroundColor === "faded" ? "bg-gray-50" : "bg-white"} relative`}>
    <div class="lg:absolute lg:inset-0">
      <div class={`lg:absolute lg:inset-y-0 ${data.imageSide === "left" ? "lg:left-0" : "lg:right-0"} lg:w-1/2`}>
        <img loading=lazy class="h-auto w-full object-cover object-center lg:absolute lg:h-full" src={urlFor(data.image).quality(80).width(1600)} alt={data.image.alt}>
      </div>
    </div>
    <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:grid lg:grid-cols-2 lg:px-0">
      <div class={`${data.imageSide === "left" ? "lg:col-start-2" : "lg:col-start-1"} lg:px-8 xl:px-16`}>
        <div class={`${data.imageSide === "left" ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"} text-base max-w-prose mx-auto lg:max-w-none `}>
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
          <BlockContent content={data.content} classes={`prose text-gray-500 ${sizeClass}`} />
        </div>
      </div>
    </div>
  </div>
{:else}
  <BasicContent {data} />
{/if}