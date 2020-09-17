<script context="module">
  export async function preload({ params }) {
  // console.log('params:', params)

    let [topic, currentPageParam] = params.topic
    if (currentPageParam == 1) {
      return this.redirect(302, `blog/topic/${topic}`);
    }

    try {
      
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/topic/${params.topic}`);
      const { posts, count, currentPage, perPage } = await res.json();

      // if (!posts || posts.length === 0 && page > 1) {
      //   this.error(404, 'Not found');
      // }

      if (!posts || posts.length === 0) {
        this.error(404, 'Not found');
      }

      return { posts, topic, count, currentPage, perPage };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
import Post from '../../../components/Blog/Post.svelte'
import BlockContent from '../../../components/BlockContent.svelte'
import Pagination from '../../../components/Pagination.svelte'
import SocialMediaIcons from '../../../components/SocialMediaIcons.svelte'
import Link from '../../../components/Link.svelte'
import { urlFor, toPlainText, truncate, unSlugify } from '../../../utils/helpers'

export let posts
export let topic
// console.log('posts:', posts)
export let count
export let currentPage
export let perPage
 
</script>

<svelte:head>
  <title>Test</title>
</svelte:head>

<div class="relative py-16 bg-white overflow-hidden">
  <div class="container">

    <h1 class="text-lg leading-9 tracking-tight font-medium text-gray-900 sm:text-xl sm:leading-10">
      Posts with the topic: <span class="text-gray-500 italic capitalize">{unSlugify(topic)}</span>
    </h1>
    
    {#if posts.length > 0}
      <div class="py-6">
        <Pagination totalResults={count} slug={`blog/topic/${topic}`} {currentPage} {perPage}/>
      </div>
      <div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">

        {#each posts as post}
          <Post {post} />
        {/each}
      </div>
      <Pagination totalResults={count} slug={`blog/topic/${topic}`} {currentPage} {perPage}/>
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