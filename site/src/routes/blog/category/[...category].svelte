<script context="module">
  export async function preload({ params }) {
    let [category, currentPageParam] = params.category
    if (currentPageParam == 1) {
      return this.redirect(302, `blog/category/${category}`);
    }
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/category/${params.category}`);
      const { posts, categoryInfo, currentPage, perPage, count, blogInfo, categories } = await res.json();

      return { posts, categoryInfo, currentPage, perPage, count, blogInfo, categories };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>


<script>
  import BlogHero from '../../../components/Blog/BlogHero.svelte'
  import Posts from '../../../components/Blog/Posts.svelte'
  import BlockContent from '../../../components/BlockContent.svelte'

  export let posts;
  export let currentPage;
  export let perPage;
  export let count;
  export let categoryInfo;
  export let categories;
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading"><span class="font-light text-gray-500">Category:</span> {categoryInfo.pageInfo.name}</h1>
  <div slot="content">
    <BlockContent content={categoryInfo.description} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" />
  </div>
</BlogHero>
<Posts {posts} {categories} {count} {currentPage} {perPage} currentCategory={categoryInfo._id} />
  <!-- <div class="container">

  {#if posts.length > 0}  
    <div class="pt-8">
      <h2 class="text-lg leading-9 tracking-tight font-medium text-gray-900 sm:text-xl sm:leading-10">
        Posts in: <span class="text-gray-500 italic">{categoryInfo.pageInfo.name}</span>
      </h2>
    </div>
    <div class="py-6">
      <Pagination totalResults={count} slug={`blog/category/${categoryInfo.pageInfo.slug.current}`} {currentPage} {perPage}/>
    </div>
    <div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">

      {#each posts as post}
        <Post {post} />
      {/each}
    </div>
    <Pagination totalResults={count} slug={`blog/category/${categoryInfo.pageInfo.slug.current}`} {currentPage} {perPage}/>
  {:else}
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <p class="text-sm leading-5 text-gray-500 text-center">
           No blog posts have been writen in the <span class="font-bold">{categoryInfo.pageInfo.slug.current}</span> Category 😭.  <a rel=prefetch href="/">Go to the Homepage</a>
        </p>
      </div>
    </div>
    {/if}
  </div> -->