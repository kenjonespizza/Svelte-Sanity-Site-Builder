<script context="module">
  export async function preload({ params }) {
    let [category, currentPageParam] = params.category
    if (currentPageParam == 1) {
      return this.redirect(302, `blog/category/${category}`);
    }
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/category/${params.category}`);
      const { posts, currentPage, perPage, count, categoryData } = await res.json();

      return { posts, currentPage, perPage, count, categoryData };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>


<script>
  import Post from '../../../components/Blog/Post.svelte'
  import Pagination from '../../../components/Pagination.svelte'
  import BlockContent from '../../../components/BlockContent.svelte'

  export let posts;
  export let currentPage;
  export let perPage;
  export let count;
  export let categoryData;
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<div class="relative py-16 bg-white overflow-hidden">
  <div class="container">

    <div class="space-y-2">
      <h1 class="text-3xl leading-tight font-normal tracking-tight text-gray-900 sm:text-5xl">
        Category: <span class="font-extrabold capitalize">{categoryData.pageInfo.name}</span>
      </h1>
      <BlockContent content={categoryData.description} classes="max-w-4xl prose text-gray-500" />
    </div>

  {#if posts.length > 0}  
    <div class="pt-8">
      <h2 class="text-lg leading-9 tracking-tight font-medium text-gray-900 sm:text-xl sm:leading-10">
        Posts in: <span class="text-gray-500 italic">{categoryData.pageInfo.name}</span>
      </h2>
    </div>
    <div class="py-6">
      <Pagination totalResults={count} slug={`blog/category/${categoryData.pageInfo.slug.current}`} {currentPage} {perPage}/>
    </div>
    <div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">

      {#each posts as post}
        <Post {post} />
      {/each}
    </div>
    <Pagination totalResults={count} slug={`blog/category/${categoryData.pageInfo.slug.current}`} {currentPage} {perPage}/>
  {:else}
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <p class="text-sm leading-5 text-gray-500 text-center">
           No blog posts have been writen in the <span class="font-bold">{categoryData.pageInfo.slug.current}</span> Category 😭.  <a rel=prefetch href="/">Go to the Homepage</a>
        </p>
      </div>
    </div>
    {/if}
  </div>
</div>