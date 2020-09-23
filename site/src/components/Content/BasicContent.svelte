<script>
  import BlockContent from '../BlockContent.svelte'

  export let data

  let acceptableClasses = ['sm', 'md', 'lg', 'xl', '2xl']
  let sizeClass
  if (acceptableClasses.includes(data.textSize)) {
    console.log("IN");
    sizeClass = `prose-${data.textSize}`
  } else {
    sizeClass = 'prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-xl'
  }
</script>

<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class={`${data.backgroundColor === 'faded' ? 'bg-gray-50' : 'bg-white'} relative py-16 overflow-hidden`}>
  <!-- <div class="relative px-4 sm:px-6 lg:px-8"> -->
    <div class="container">
    <BlockContent content={data.content} classes={`prose ${sizeClass} text-gray-500 mx-auto`} />
  </div>
  <!-- </div> -->
</div>