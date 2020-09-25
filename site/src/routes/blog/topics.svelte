<script context="module">
  export async function preload({ params }) {
  	try {
  		const results = await this.fetch("api/blog/topic/all");
  		const topics = await results.json();
  		return topics;
  	} catch (error) {
  		this.error(500, error);
  	}
  }
</script>

<script>
  import BlogHero from "../../components/Blog/BlogHero.svelte";
  import { unSlugify } from "../../utils/helpers";

  export let topics;
</script>

<svelte:head>
  <title>Topics</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading"><a class="text-indigo-600" href="blog" rel=prefetch>Blog</a> / Topics</h1>
</BlogHero>

<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
    <div class="flex flex-wrap justify-center">
      {#each topics as topic}
      <a href={`blog/topic/${topic}`} rel=prefetch class="text-2xl font-bold mr-8 mb-4 inline-flex items-center hover:text-indigo-600 hover:underline">
          <svg class="-ml-1 mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
          </svg>
          {unSlugify(topic)}
      </a>
      {/each}
    </div>
  </div>
</div>
