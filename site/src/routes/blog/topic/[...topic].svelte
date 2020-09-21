<script context="module">
  export async function preload({ params }) {

    let [topic, currentPageParam] = params.topic
    if (currentPageParam == 1) {
      return this.redirect(302, `blog/topic/${topic}`);
    }

    try {
      
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/topic/${params.topic}`);
      const { posts, currentPage, perPage, count, blogInfo, categories, topics } = await res.json();

      if (!posts || posts.length === 0) {
        this.error(404, 'Not found');
      }

      return { posts, currentPage, perPage, count, blogInfo, categories, topics, topic };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
import BlogHero from '../../../components/Blog/BlogHero.svelte'
import Posts from '../../../components/Blog/Posts.svelte'
import { unSlugify, capitalize } from '../../../utils/helpers'

export let posts
export let topic
export let count
export let currentPage
export let perPage
export let categories
export let topics
export let blogInfo
</script>

<svelte:head>
  <title>{capitalize(unSlugify(topic))} | {blogInfo.pageInfo.name}</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading capitalize">{unSlugify(topic)}</h1>
  <h1 slot="heading">
    <a class="text-indigo-600" href="blog" rel=prefetch>Blog</a> / 
    Topic:
    <span class="capitalize">{unSlugify(topic)}</span>
  </h1>
</BlogHero>
<Posts {posts} {categories} {topics} {count} {currentPage} {perPage} currentTopic={topic} />