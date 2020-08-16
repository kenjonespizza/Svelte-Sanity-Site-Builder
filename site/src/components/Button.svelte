<script>
  import Link from "./Link.svelte"

  export let button = {};
  export let additionalClasses = "";
  export let overrideAllClasses = "";

  let classesPerType;

  if (button.color === "basic") {
    classesPerType = 'text-indigo-600 bg-white hover:text-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo'
  } else {
    classesPerType = 'text-white bg-indigo-600 hover:bg-indigo-300 focus:border-indigo-700 focus:shadow-outline-indigo focus:border-indigo-300 focus:shadow-outline-indigo'
  }
</script>

<Link link={button.link} classes={!overrideAllClasses ? `flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md shadow focus:outline-none  transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 ${classesPerType} ${additionalClasses}` : overrideAllClasses} >
  <slot>{button.link.text}</slot>
</Link>