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
      const { posts, currentPage, perPage, count, blogInfo, categories, topics } = await res.json();

      // if (!posts || posts.length === 0 && page > 1) {
      //   this.error(404, 'Not found');
      // }

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
import BlockContent from '../../../components/BlockContent.svelte'
import Pagination from '../../../components/Pagination.svelte'
import SocialMediaIcons from '../../../components/SocialMediaIcons.svelte'
import Link from '../../../components/Link.svelte'
import { urlFor, toPlainText, truncate, unSlugify } from '../../../utils/helpers'

export let posts
export let topic
export let count
export let currentPage
export let perPage
export let categories
export let topics
</script>

<svelte:head>
  <title>Test</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading capitalize">{unSlugify(topic)}</h1>
  <h1 slot="heading">
    <span class="font-light text-gray-500">Topic:</span> 
    <span class="capitalize">{unSlugify(topic)}</span>
  </h1>
</BlogHero>
<Posts {posts} {categories} {topics} {count} {currentPage} {perPage} currentTopic={topic} />