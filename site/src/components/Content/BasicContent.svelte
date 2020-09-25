<script>
  import BlockContent from "../BlockContent.svelte"

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
    addedClasses = `prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-xl`;
  } else {
    addedClasses = `prose-sm max-w-none sm:prose sm:max-w-none md:prose-md  md:max-w-none lg:prose-lg lg:max-w-none xl:prose-xl xl:max-w-none`;
  	}
  }
</script>

<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class={`${data.backgroundColor === "faded" ? "bg-gray-50" : "bg-white"} relative py-16 overflow-hidden`}>
  <div class="container">
    <BlockContent content={data.content} classes={`prose ${addedClasses} text-gray-500 mx-auto`} />
  </div>
</div>