<script context="module">
  export async function preload({ params }) {
  	try {
  		// As with the server route, we have acces to params.slug here
  		const res = await this.fetch(`api/blog/${params.post}`);
  		const { postData } = await res.json();
  		const post = postData;
  		return { post };
  	} catch (err) {
  		this.error(500, err);
  	}
  }
</script>

<script>
import BlockContent from "../../components/BlockContent.svelte";
import Link from "../../components/Link.svelte";
import { urlFor, slugify } from "../../utils/helpers";

export let post;
const { authors } = post;
const layout = "A";
let y;
let outerHeight;
let outerWidth;
let scrollGeneratedClasses;

function scrolling(e) {
	const percentScrolled = y / outerHeight * 100;

	if (percentScrolled > 70) {
		scrollGeneratedClasses = "pointer-events-none";
	} else {
		scrollGeneratedClasses = "pointer-events-auto";
	}
}
</script>

<svelte:head>
  <title>{post.pageInfo.name}</title>
</svelte:head>

<svelte:window bind:scrollY={y} bind:outerHeight={outerHeight} bind:outerWidth={outerWidth}  on:scroll={scrolling}/>

<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class="relative py-16 bg-white overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
    <div class="relative h-full text-lg max-w-prose mx-auto">

      <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
      <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
      </svg>
    </div>
  </div>
  <div class="relative px-4 sm:px-6 lg:px-8">
    {#if layout === "A"}
    <div class="text-lg max-w-7xl mx-auto mb-6">
      <div class=" container lg:px-20">

        <h1 class="w-full mt-2 mb-8 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:w-2/3">{post.pageInfo.name}</h1>

        <BlockContent classes="text-xl text-gray-500 leading-8 w-full mb-8 lg:w-1/2 " content={post.shortText} />

        <div class="mb-8">
          <div class="flex-shrink-0 group block focus:outline-none">
            <div class="flex items-center flex-wrap">
              <div class="flex relative z-0 overflow-hidden">
                {#each authors as author, i }
                  {#if author.image}
                    <Link classes={`${i > 0 ? "-ml-3" : ""} inline-block`} ref={author._id} title={author.pageInfo.name} >
                      <img loading=lazy class={"relative h-12 w-12 rounded-full text-white border-3 border-white object-cover object-center"} src={author.image ? urlFor(author.image).quality(100).size(80, 80) : "/images/userImageNotFound.png"} alt={author.pageInfo.name}>
                    </Link>
                  {/if}
                {/each}
              </div>
              <div class="ml-3">
                <p class="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
                  By: 
                  {#each authors as author, i }
                    <Link ref={author._id} classes="text-indigo-600">{author.pageInfo.name}</Link>{ i + 2 === authors.length && authors.length > 1 ? " and " : i + 1 !== authors.length && authors.length > 1 ? ", " : ""}
                  {/each}
                  {#if post.categories && post.categories.length > 0}
                    In: 
                    {#each post.categories as category, i }
                      <Link ref={category._id} classes="text-indigo-600">{category.pageInfo.name}</Link>{ i + 2 === category.length && category.length > 1 ? " and " : i + 1 !== category.length && category.length > 1 ? ", " : ""}
                    {/each}
                  {/if}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      {#if post.image}
        <img loading=lazy class="my-16 w-full rounded-lg shadow-xl object-cover object-center" style="height: 70vh;" src={urlFor(post.image).quality(80).width(2000)} alt={post.image.alt}>
      {/if}
    </div>
    {:else}
      <div class="w-screen h-screen flex"></div>
      <div class={`${scrollGeneratedClasses} fixed top-0 left-0 w-screen h-screen flex z-50`}>
        <div class="postImage w-1/2 h-screen bg-white shadow-2xl" style="transform: translateX(-{y / (outerHeight * 0.7) * 100}%);">
          {#if post.image && post.image}
            <img loading=lazy class="h-full w-full object-cover object-center" src={urlFor(post.image).quality(80).width(2000)} alt={post.image.alt}>
          {/if}
        </div>
        <div class="postTitle w-1/2 h-full bg-indigo-600 flex flex-col justify-center p-20 shadow-2xl" style="transform: translateX({y / (outerHeight * 0.7) * 100}%);">
          <h1 class="w-full mt-2 mb-8 text-3xl leading-tight font-extrabold tracking-tight text-textOnPrimary sm:text-5xl lg:w-2/3">{post.pageInfo.name}</h1>

          <BlockContent classes="text-xl text-textOnPrimary opacity-75 leading-8 " content={post.shortText} />

          <div class="my-8">
            <p class="text-sm leading-5 font-medium text-textOnPrimary">
              By: 
              {#each authors as author, i }
                <Link ref={author._id} classes="text-textOnPrimary underline">{author.pageInfo.name}</Link>{ i + 2 === authors.length && authors.length > 1 ? " and " : i + 1 !== authors.length && authors.length > 1 ? ", " : ""}
              {/each}
            </p>
          </div>

          <div class="flex-shrink-0 group block focus:outline-none">
            <div class="flex items-center flex-wrap">
              <div class="flex relative z-0 overflow-hidden">
                {#each authors as author, i }
                  <Link classes={`${i > 0 ? "-ml-3" : ""} inline-block`} ref={author._id} title={author.pageInfo.name} >
                    <img class={"relative h-12 w-12 rounded-full text-white border-3 border-textOnPrimary object-cover object-center"} src={author.image ? urlFor(author.image).quality(80).size(80, 80) : "/images/userImageNotFound.png"} alt={author.pageInfo.name}>
                  </Link>
                {/each}
              </div>
            </div>
          </div>


        </div>
      </div>
    {/if}
    <BlockContent classes="prose prose-lg max-w-2xl text-gray-500 mx-auto" content={post.body} />
    
    <div class=" container max-w-2xl mx-auto px-0 mt-8">
    {#if post.topics}
          <div class="flex items-start justify-start flex-col space-y-4 xs:space-y-0 xs:flex-row xs:space-x-4">
          {#each post.topics as topic }
            <a href={`blog/topic/${slugify(topic)}`} rel=prefetch class="capitalize inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
              <svg class="-ml-0.5 mr-1.5 h-3 w-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
              </svg>
              <!-- <svg class="-ml-1 mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                
              </svg> -->
              {topic}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

