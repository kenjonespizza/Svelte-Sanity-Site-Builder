<script>
  export let url;
  export let type;
  export let additionalClasses;

  let classesPerType;

  if (type === "flat") {
    classesPerType = 'text-indigo-600 bg-white hover:text-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo'
  } else {
    classesPerType = 'text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo focus:border-indigo-300 focus:shadow-outline-indigo'
  }
</script>

<a href={url} class={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none  transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 ${classesPerType} ${additionalClasses}`} >
  <slot></slot>
</a>