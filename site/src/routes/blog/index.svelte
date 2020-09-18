<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/all`);
      const { posts, currentPage, perPage, count, blogInfo, categories, topics } = await res.json();

      return { posts, currentPage, perPage, count, blogInfo, categories, topics };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>


<script>
  import BlogHero from '../../components/Blog/BlogHero.svelte'
  import Posts from '../../components/Blog/Posts.svelte'
  import BlockContent from '../../components/BlockContent.svelte'

  export let posts;
  export let currentPage;
  export let perPage;
  export let count;
  export let blogInfo;
  export let categories;
  export let topics;

</script>

<svelte:head>
	<title>{blogInfo.pageInfo.name}</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading">{blogInfo.pageInfo.name}</h1>
  <div slot="content">
    <BlockContent content={blogInfo.content} classes="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" />
  </div>
</BlogHero>
<Posts {posts} {categories} {topics} {count} {currentPage} {perPage} />