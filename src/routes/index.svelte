<script context="module">
  export async function preload({ params }) {
    try {
      const res = await this.fetch('api/pages/all');
      const { pages } = await res.json()
      return { pages };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>


<script>
  export let pages;
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Site Pages</h1>

<ul>
	{#each pages as page}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='/{page.pageInfo.slug.current}'>{page.pageInfo.name}</a></li>
	{/each}
</ul>
