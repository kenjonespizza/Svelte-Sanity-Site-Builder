<script>
  import BlockContent from "../BlockContent.svelte";
  import BasicContent from "./BasicContent.svelte";
  import { urlFor } from "../../utils/helpers";

  export let data;

  const acceptableClasses = ["sm", "md", "lg", "xl", "2xl"];
  let sizeClass;
  if (acceptableClasses.includes(data.textSize)) {
  	sizeClass = `prose-${data.textSize} lg:max-w-none`;
  } else {
  	sizeClass = "prose-sm sm:prose md:prose-md lg:prose-lg lg:max-w-none xl:prose-xl";
  }
</script>

{#if data.image && data.image.asset}
  <div class={`${data.backgroundColor === "faded" ? "bg-gray-50" : "bg-white"} relative`}>
    <div class="lg:absolute lg:inset-0">
      <div class={`lg:absolute lg:inset-y-0 ${data.imageSide === "left" ? "lg:left-0" : "lg:right-0"} lg:w-1/2`}>
        <img loading=lazy class="h-auto w-full object-cover lg:absolute lg:h-full" src={urlFor(data.image).quality(80).width(1600)} alt={data.image.alt}>
      </div>
    </div>
    <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:grid lg:grid-cols-2 lg:px-0">
      <div class={`${data.imageSide === "left" ? "lg:col-start-2" : "lg:col-start-1"} lg:px-8 xl:px-16`}>
        <div class={`${data.imageSide === "left" ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"} text-base max-w-prose mx-auto lg:max-w-none `}>
          <BlockContent content={data.content} classes={`prose ${sizeClass} text-gray-500`} />
        </div>
      </div>
    </div>
  </div>
{:else}
  <BasicContent {data} />
{/if}