<!-- <script context="module">
  export async function preload({ params }) {
    try {
      const res = await this.fetch('api/blog/all');
      const { posts } = await res.json()
      return { posts };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>


<script>
  import Post from '../../components/Blog/Post.svelte'
  export let posts;
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="relative py-16 bg-white overflow-hidden">
  <div class="relative max-w-lg mx-auto lg:max-w-7xl">

{#if posts.length > 0}
      <div class="py-6">
        <Pagination totalResults={author.postCount} slug={`blog/${author.pageInfo.slug.current}`} {currentPage} {perPage}/>
      </div>
      <div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">

        {#each author.posts as post}
          <Post {post} />
        {/each}
      </div>
      <Pagination totalResults={author.postCount} slug={`blog/${author.pageInfo.slug.current}`} {currentPage} {perPage}/>
    {:else}

    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <p class="text-sm leading-5 text-gray-500 text-center">
          <span class="text-indigo-600 italic">{author.pageInfo.name}</span> Does not have any posts
        </p>
      </div>
    </div>
    {/if}

  </div>
</div> -->