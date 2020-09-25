<script>
  import BlockContent from "../BlockContent.svelte"

  export let data;
  // console.log('data:', data)

  const acceptableClasses = ["sm", "md", "lg", "xl", "2xl"];
  let addedClasses;
  if (acceptableClasses.includes(data.textSize)) {
  	if (!data.textBoxWidth || data.textBoxWidth === "default") {
  		addedClasses = `prose-${data.textSize}`;
  	} else {
  		addedClasses = `prose-${data.textSize}`;
  	}
  } else {
if (!data.textBoxWidth || data.textBoxWidth === "default") {
    addedClasses = `prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-xl`;
  } else {
    addedClasses = `prose-sm sm:prose md:prose-md  lg:prose-lg xl:prose-xl`;
  	}
  }
</script>

<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class={`${data.backgroundColor === "faded" ? "bg-gray-50" : "bg-white"} relative py-16 overflow-hidden`}>
  <div class="container">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-8">
      <BlockContent content={data.column1} classes={`prose ${addedClasses} text-gray-500 mx-auto`} />
      <BlockContent content={data.column2} classes={`prose ${addedClasses} text-gray-500 mx-auto`} />
      <BlockContent content={data.column3} classes={`prose ${addedClasses} text-gray-500 mx-auto`} />
    </div>
  </div>
</div>