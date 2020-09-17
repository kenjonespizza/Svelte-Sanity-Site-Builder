<script context="module">
  export async function preload({ params }) {
    if (!params.page || params.page == 1) {
      return this.redirect(302, 'blog');
    }
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/page/${params.page}`);
      const { posts, currentPage, perPage, count,blogInfo } = await res.json();

      return { posts, currentPage, perPage, count,blogInfo };
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
  export let blogInfo;
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<div class="relative py-16 bg-white overflow-hidden">
  <div class="container">

    <div class="space-y-2">
      <h1 class="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        {blogInfo.pageInfo.name}
      </h1>
      <BlockContent content={blogInfo.content} classes="max-w-4xl prose text-gray-500" />
    </div>

{#if posts.length > 0}
      <div class="py-6">
        <Pagination totalResults={count} slug={`blog/page`} {currentPage} {perPage}/>
      </div>
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
  </div>
</div>