<script context="module">
  export async function preload({ params }) {
    if (!params.page || params.page == 1) {
      return this.redirect(302, 'blog');
    }
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/page/${params.page}`);
      const { posts, currentPage, perPage, count, blogInfo, categories, topics } = await res.json();

      return { posts, currentPage, perPage, count, blogInfo, categories, topics };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>


<script>
  import BlogHero from '../../../components/Blog/BlogHero.svelte'
  import Posts from '../../../components/Blog/Posts.svelte'
  import BlogFilters from '../../../components/Blog/BlogFilters.svelte'
  import Pagination from '../../../components/Pagination.svelte'
  import BlockContent from '../../../components/BlockContent.svelte'

  export let posts;
  export let currentPage;
  export let perPage;
  export let count;
  export let blogInfo;
  export let categories;
  export let topics;
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading">{blogInfo.pageInfo.name}</h1>
  <div slot="content">
    <BlockContent content={blogInfo.content} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" />
  </div>
</BlogHero>
<Posts {posts} {categories} {topics} {count} {currentPage} {perPage} />
<!-- <div class="container">
  {#if posts.length > 0}
    <BlogFilters {categories} {topics} />
    <div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
      {#each posts as post}
        <Post {post} />
      {/each}
    </div>
    <Pagination totalResults={count} slug={`blog/page`} {currentPage} {perPage}/>
  {:else}
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <p class="text-sm leading-5 text-gray-500 text-center">
          No blog posts have been writen 😭.  <a rel=prefetch href="/">Go to the Homepage</a>
      </p>
    </div>
  </div>
  {/if}
</div> -->