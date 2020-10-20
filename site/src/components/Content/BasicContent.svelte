<script>
  import BlockContent from "../BlockContent.svelte"
  import TagRenderer from "../TagRenderer.svelte"

  export let data;

  const acceptableClasses = ["sm", "md", "lg", "xl", "2xl"];
  let addedClasses;
  if (acceptableClasses.includes(data.textSize)) {
  	if (!data.textBoxWidth || data.textBoxWidth === "default") {
  		addedClasses = `prose-${data.textSize}`;
  	} else {
  		addedClasses = `prose-${data.textSize} max-w-none`;
  	}
  } else {
if (!data.textBoxWidth || data.textBoxWidth === "default") {
    addedClasses = `prose-sm sm:prose md:prose-m sm:text-gray-500 md:text-gray-500 lg:text-gray-500  lg:prose-lg xl:text-gray-500 xl:prose-xl`;
  } else {
    addedClasses = `prose-sm sm:prose sm:text-gray-500 md:prose-md md:text-gray-500 lg:prose-lg lg:text-gray-500 lg:max-w-none xl:prose-xl xl:text-gray-500`;
  	}
  }
</script>

<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class={`${data.backgroundColor === "faded" ? "bg-gray-50" : "bg-white"} relative py-16 overflow-hidden`}>
  <div class="container">
    {#if data.headingBlock && (data.headingBlock.heading || data.headingBlock.subHeading)}
    <div class="text-lg mx-auto mb-6 text-center">
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
    <BlockContent content={data.content} classes={`prose text-gray-500 ${addedClasses} mx-auto`} />
  </div>
</div>