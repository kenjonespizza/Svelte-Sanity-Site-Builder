<script>
  import BlogFilters from './BlogFilters.svelte'
  import Post from './Post.svelte'
  import Pagination from '../Pagination.svelte'

  export let posts = []
  export let categories = []
  export let topics = []
  export let count = undefined
  export let currentPage = undefined
  export let perPage = undefined
  export let currentCategory = undefined
  export let currentTopic = undefined
</script>

{#if posts.length > 0}
  <div class="container my-16">
    <BlogFilters {categories} {topics} {currentCategory} {currentTopic} /> 
    <slot name="topText"></slot>
    <div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
      {#each posts as post}
        <Post {post} />
      {/each}
    </div>
    <Pagination totalResults={count} slug={`blog/page`} {currentPage} {perPage}/>
  </div>
{:else}
  <div class="container my-16">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <p class="text-sm leading-5 text-gray-500 text-center">
            Sorry, no blog posts to show 😭.  <a rel=prefetch href="/">Go to the Homepage</a>
        </p>
      </div>
    </div>
  </div>
{/if}