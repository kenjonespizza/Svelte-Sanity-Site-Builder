<script context="module">
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
  export let posts;
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Site Posts</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the post as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='/{post.postInfo.slug.current}'>{post.postInfo.name}</a></li>
	{/each}
</ul>
