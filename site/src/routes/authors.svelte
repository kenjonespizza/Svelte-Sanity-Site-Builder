<script context="module">
  export async function preload({ params }) {
    try {
      const results = await this.fetch(`api/author/all`)
      const {authors, blogInfo} = await results.json();
      return { authors, blogInfo }
    } catch (error) {
      this.error(500, error)
    }
  }
</script>

<script>
  import BlogHero from '../components/Blog/BlogHero.svelte'
  import Link from '../components/Link.svelte'
  import SocialMediaIcons from '../components/SocialMediaIcons.svelte'
  import { urlFor } from '../utils/helpers'

  export let authors
  // export let blogInfo
</script>

<svelte:head>
  <title>Authors</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading"><a class="text-indigo-600" href="blog" rel=prefetch>Blog</a> / Authors</h1>
</BlogHero>

<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {#each authors as author}
        <li>
          <Link ref={author._id} classes="space-y-4">
            <div class="relative pb-full bg-white shadow-lg rounded-lg overflow-hidden">
              <img loading=lazy class="absolute object-cover h-full w-full" src={author.image ? urlFor(author.image).width(600).quality(80) : "/images/userImageNotFound.png"} alt={author.pageInfo.name}>
            </div>

            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h4>{author.pageInfo.name}</h4>
                {#if author.position}
                  <p class="text-indigo-600">{author.position}</p>
                {/if}
              </div>
              <SocialMediaIcons socialMediaHandles={author.socialMediaHandles} />
            </div>
          </Link>
        </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
