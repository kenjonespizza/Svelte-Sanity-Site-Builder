<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/author/${params.author}`);
      const { authorData, page } = await res.json();
      let author = authorData
      return { author, page };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
import BlockContent from '../../components/BlockContent.svelte'
  import Link from '../../components/Link.svelte'
  import { urlFor, toPlainText, truncate } from '../../utils/helpers'

  export let author
  export let page
 
</script>

<svelte:head>
  <title>{author.pageInfo.name}</title>
</svelte:head>

<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto lg:max-w-7xl">
    <div class="lg:col-span-2">
      <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:col-gap-8 lg:space-y-0">
        <li class="sm:py-8">
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-16 sm:space-y-0">
            <img class="object-cover h-full w-full shadow-lg rounded-lg" src={urlFor(author.image).quality(80).size(822, 822)} alt="">
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h1 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">{author.pageInfo.name} - {page}</h1>
                  {#if author.position}
                    <p class="text-indigo-600">{author.position}</p>
                  {/if}
                </div>
                <ul class="flex space-x-4">
                  <li>
                    <a href="/" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                      <span class="sr-only">Dribbble</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0 1 12 3.475zm-3.633.803a53.903 53.903 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.309 35.309 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 0 1-3.655 5.715z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"/></svg>
                    </a>
                  </li>
                </ul>
                <div class="text-lg leading-7">
                  <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                  <BlockContent content={author.description} classes="prose text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- More people...-->
      </ul>
    </div>
    <div>
      <h2 class="text-xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-2xl sm:leading-10">
        Posts by: <span class="text-indigo-600">{author.pageInfo.name}</span>
      </h2>
    </div>
    <div class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">

      {#each author.posts as post}
      <div>
        <Link ref={post._id} classes="block">
          {#if post.image}
          <img class="mb-4 object-cover h-96 w-full shadow-lg rounded-lg" src={urlFor(post.image).quality(80).width(822)} alt="">
          {/if}
          <p class="text-sm leading-5 text-gray-500">
            <time datetime={new Date(post.publishedAt)}>{new Date(post.publishedAt).toDateString()}</time>
          </p>
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {post.pageInfo.name}
          </h3> 
            {#if post.excerpt }
              <BlockContent content={post.excerpt} classes="mt-3 text-base leading-6 text-gray-500" />
            {:else}
              <p class="mt-3 text-base leading-6 text-gray-500">
                {truncate(toPlainText(post.body))}
              </p>
            {/if}
        </Link>
        <div class="mt-3">
          <Link ref={post._id} classes="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
            Read post
          </Link>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>

