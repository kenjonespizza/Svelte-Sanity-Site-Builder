<script context="module">
  export async function preload({ params }) {
  	let [authorParam, currentPageParam] = params.author;
  	if (currentPageParam == 1) {
  		return this.redirect(302, `author/${authorParam}`);
  	}

  	try {
  		// As with the server route, we have acces to params.slug here
  		const res = await this.fetch(`api/author/${params.author}`);
  		const {
			authorData, posts, count, currentPage, perPage,
		} = await res.json();
  		const author = authorData;

  		if (!authorData.posts || authorData.posts.length === 0 && page > 1) {
  			// return this.redirect(301, `author/${params.author}`); // Cant get this to not get caught in an infinite loop
  			this.error(404, "Not found");
  		}

  		return {
			author, posts, count, currentPage, perPage,
		};
  	} catch (err) {
  		this.error(500, err);
  	}
  }
</script>

<script>
import Posts from "../../components/Blog/Posts.svelte";
import BlockContent from "../../components/BlockContent.svelte";
import Pagination from "../../components/Pagination.svelte";
import SocialMediaIcons from "../../components/SocialMediaIcons.svelte";
import Link from "../../components/Link.svelte";
import { urlFor, toPlainText, truncate } from "../../utils/helpers";

export let author;
export let currentPage;
export let perPage;
export let posts;
export let count;

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
            <img loading=lazy class="object-cover h-full w-full shadow-lg rounded-lg" src={urlFor(author.image).quality(80).size(822, 822)} alt="">
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
  </div>
  <Posts {posts}{count} {currentPage} {perPage}>
    <h2 slot="topText" class="pb-6 text-lg leading-9 tracking-tight font-medium text-gray-900 sm:text-xl sm:leading-10">
      Posts by: <span class="text-gray-500 italic">{author.pageInfo.name} ({count})</span>
    </h2>
  </Posts>
</div>

