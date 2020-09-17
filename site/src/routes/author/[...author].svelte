<script context="module">
  export async function preload({ params }) {

    let [authorParam, currentPageParam] = params.author
    if (currentPageParam == 1) {
      return this.redirect(302, `author/${authorParam}`);
    }

    try {
      
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/author/${params.author}`);
      const { authorData, currentPage, perPage } = await res.json();
      let author = authorData

      if (!authorData.posts || authorData.posts.length === 0 && page > 1) {
        // return this.redirect(301, `author/${params.author}`); // Cant get this to not get caught in an infinite loop
        this.error(404, 'Not found');
      }

      return { author, currentPage, perPage };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
import Post from '../../components/Blog/Post.svelte'
import BlockContent from '../../components/BlockContent.svelte'
import Pagination from '../../components/Pagination.svelte'
import SocialMediaIcons from '../../components/SocialMediaIcons.svelte'
import Link from '../../components/Link.svelte'
import { urlFor, toPlainText, truncate } from '../../utils/helpers'

export let author
export let currentPage
export let perPage
 
</script>

<svelte:head>
  <title>{author.pageInfo.name}</title>
</svelte:head>

<div class="relative py-16 bg-white overflow-hidden">
  <div class="container">
    <div class="lg:col-span-2">
      <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:col-gap-8 lg:space-y-0">
        <li class="sm:py-8">
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-16 sm:space-y-0">
            <img class="object-cover h-full w-full shadow-lg rounded-lg" src={urlFor(author.image).quality(80).size(822, 822)} alt="">
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h1 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">{author.pageInfo.name}</h1>
                  {#if author.position}
                    <p class="text-gray-500">{author.position}</p>
                  {/if}
                </div>
                <SocialMediaIcons socialMediaHandles={author.socialMediaHandles} />
                <div class="text-lg leading-7">
                  <BlockContent content={author.bio} classes="prose text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    {#if author.posts.length > 0}
      <div>
        <h2 class="text-lg leading-9 tracking-tight font-medium text-gray-900 sm:text-xl sm:leading-10">
          Posts by: <span class="text-gray-500 italic">{author.pageInfo.name}</span>
        </h2>
      </div>
      <div class="py-6">
        <Pagination totalResults={author.count} slug={`author/${author.pageInfo.slug.current}`} {currentPage} {perPage}/>
      </div>
      <div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">

        {#each author.posts as post}
          <Post {post} />
        {/each}
      </div>
      <Pagination totalResults={author.count} slug={`author/${author.pageInfo.slug.current}`} {currentPage} {perPage}/>
    {:else}

    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <p class="text-sm leading-5 text-gray-500 text-center">
          <span class="text-indigo-600 italic">{author.pageInfo.name}</span> Does not have any posts
        </p>
      </div>
    </div>
    {/if}
  </div>
</div>

