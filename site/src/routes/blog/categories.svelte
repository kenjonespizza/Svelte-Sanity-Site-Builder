<script context="module">
  export async function preload({ params }) {
  	try {
  		const results = await this.fetch("api/blog/category/all");
  		const categories = await results.json();
  		return { categories };
  	} catch (error) {
  		this.error(500, error);
  	}
  }
</script>

<script>
  import BlogHero from "../../components/Blog/BlogHero.svelte";
  import Link from "../../components/Link.svelte";
  import { urlFor } from "../../utils/helpers";

  export let categories;
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading"><a class="text-indigo-600" href="blog" rel=prefetch>Blog</a> / Categories</h1>
</BlogHero>

<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      {#each categories as category}
        <Link ref={category._id} classes="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="relative pb-2/3">
            <img loading=lazy class="absolute object-cover h-full w-full" src={urlFor(category.image).width(600)} alt={category.pageInfo.name}>
          </div>
          <h4 class="font-bold text-xl p-4 text-center">{category.pageInfo.name} <span class="span text-gray-500 font-light text-base">({category.count})</span></h4>
        </Link>
      {/each}
    </div>
  </div>
</div>
