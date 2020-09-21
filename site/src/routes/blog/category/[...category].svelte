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
  <h1 slot="heading"><a class="text-indigo-600" href="blog" rel=prefetch>Blog</a> / Category: {categoryInfo.pageInfo.name}</h1>
  <div slot="content">
    <BlockContent content={categoryInfo.description} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" />
  </div>
</BlogHero>
<Posts {posts} {categories} {count} {currentPage} {perPage} currentCategory={categoryInfo._id} />