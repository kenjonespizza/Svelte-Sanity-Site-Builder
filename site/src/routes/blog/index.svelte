<script context="module">
  export async function preload({ params }) {
  	try {
  		// As with the server route, we have acces to params.slug here
  		const res = await this.fetch("api/blog/all");
  		const {
			posts, currentPage, perPage, count, blogInfo, categories, topics,
		} = await res.json();

  		return {
			posts, currentPage, perPage, count, blogInfo, categories, topics,
		};
  	} catch (err) {
  		this.error(500, err);
  	}
  }
</script>


<script>
  import BlogHero from "../../components/Blog/BlogHero.svelte";
  import Posts from "../../components/Blog/Posts.svelte";
  import BlockContent from "../../components/BlockContent.svelte";

  export let posts;
  export let currentPage;
  export let perPage;
  export let count;
  export let blogInfo;
  export let categories;
  export let topics;

</script>

<svelte:head>
	<title>{blogInfo.pageInfo.name}</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading">{blogInfo.pageInfo.name}</h1>
  <div slot="content">
    <BlockContent content={blogInfo.content} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" />
    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md shadow">
        <a href="blog/categories" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-indigo-600 hover:text-textOnPrimary focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Categories
        </a>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a href="blog/topics" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-indigo-600 hover:text-textOnPrimary focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Topics
        </a>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a href="authors" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-indigo-600 hover:text-textOnPrimary focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Authors
        </a>
      </div>
    </div>
  </div>
</BlogHero>
<Posts {posts} {categories} {topics} {count} {currentPage} {perPage} />