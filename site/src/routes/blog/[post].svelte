<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/${params.post}`);
      const { postData } = await res.json();
      let post = postData
      return { post };
      // console.log('allPostData:', allPostData)
      // console.log('post:', post)
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
import BlockContent from '../../components/BlockContent.svelte'
  import Link from '../../components/Link.svelte'
  import { urlFor } from '../../utils/helpers'

  export let post
  let {authors} = post
  console.log('authors:', authors)
  // console.log('post:', post)
</script>

<svelte:head>
  <title>{post.pageInfo.name}</title>
</svelte:head>

<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class="relative py-16 bg-white overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
    <div class="relative h-full text-lg max-w-prose mx-auto">
      <!-- <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <rect width="404" height="384"/><defs><rect stroke='#ffffff' stroke-width='.5' width='1' height='1' id='s'/><pattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><use fill='#fafafa' href='#s' y='2'/><use fill='#fafafa' href='#s' x='1' y='2'/><use fill='#f5f5f5' href='#s' x='2' y='2'/><use fill='#f5f5f5' href='#s'/><use fill='#f0f0f0' href='#s' x='2'/><use fill='#f0f0f0' href='#s' x='1' y='1'/></pattern><pattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><g fill='#ebebeb'><use href='#s'/><use href='#s' y='5' /><use href='#s' x='1' y='10'/><use href='#s' x='2' y='1'/><use href='#s' x='2' y='4'/><use href='#s' x='3' y='8'/><use href='#s' x='4' y='3'/><use href='#s' x='4' y='7'/><use href='#s' x='5' y='2'/><use href='#s' x='5' y='6'/><use href='#s' x='6' y='9'/></g></pattern><pattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><g fill='#ebebeb'><use href='#s' y='5'/><use href='#s' y='8'/><use href='#s' x='1' y='1'/><use href='#s' x='1' y='9'/><use href='#s' x='1' y='12'/><use href='#s' x='2'/><use href='#s' x='2' y='4'/><use href='#s' x='3' y='2'/><use href='#s' x='3' y='6'/><use href='#s' x='3' y='11'/><use href='#s' x='4' y='3'/><use href='#s' x='4' y='7'/><use href='#s' x='4' y='10'/></g></pattern><pattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><g fill='#e5e5e5'><use href='#s' y='11'/><use href='#s' x='2' y='9'/><use href='#s' x='5' y='12'/><use href='#s' x='9' y='4'/><use href='#s' x='12' y='1'/><use href='#s' x='16' y='6'/></g></pattern><pattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><g fill='#ffffff'><use href='#s' y='9'/><use href='#s' x='16' y='5'/><use href='#s' x='14' y='2'/><use href='#s' x='11' y='11'/><use href='#s' x='6' y='14'/></g><g fill='#e0e0e0'><use href='#s' x='3' y='13'/><use href='#s' x='9' y='7'/><use href='#s' x='13' y='10'/><use href='#s' x='15' y='4'/><use href='#s' x='18' y='1'/></g></pattern><pattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><g fill='#F60'><use href='#s' x='2' y='5'/><use href='#s' x='16' y='38'/><use href='#s' x='46' y='42'/><use href='#s' x='29' y='20'/></g></pattern><pattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><g fill='#F60'><use href='#s' x='33' y='13'/><use href='#s' x='27' y='54'/><use href='#s' x='55' y='55'/></g></pattern><pattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(18.2) translate(-945.05 -708.79)'><g fill='#F60'><use href='#s' x='11' y='8'/><use href='#s' x='51' y='13'/><use href='#s' x='17' y='73'/><use href='#s' x='99' y='57'/></g></pattern></defs><rect fill='url(#a)' width='100%' height='100%'/><rect fill='url(#b)' width='100%' height='100%'/><rect fill='url(#h)' width='100%' height='100%'/><rect fill='url(#c)' width='100%' height='100%'/><rect fill='url(#d)' width='100%' height='100%'/><rect fill='url(#e)' width='100%' height='100%'/><rect fill='url(#f)' width='100%' height='100%'/><rect fill='url(#g)' width='100%' height='100%'/>
      </svg> -->
      <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
      <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
      </svg>
    </div>
  </div>
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-7xl mx-auto mb-6">
      <div class=" lg:px-20">

        <h1 class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">{post.pageInfo.name}</h1>

        <BlockContent classes="text-xl text-gray-500 leading-8 w-full lg:w-1/2 mb-8" content={post.shortText} />

        <div class="mb-8">
          <div class="flex-shrink-0 group block focus:outline-none">
            <div class="flex items-center flex-wrap">
              <div class="flex relative z-0 overflow-hidden">
                {#each authors as author, i }
                  {#if author.image}
                    <Link classes={`${i > 0 ? "-ml-3" : ""} inline-block`} ref={author._id} title={author.pageInfo.name} >
                      <img class={`relative h-12 w-12 rounded-full text-white border-3 border-white object-cover object-center`} src={author.image ? urlFor(author.image).quality(100).width(40) : "/images/userImageNotFound.png"} alt={author.pageInfo.name}>
                    </Link>
                  {/if}
                {/each}
              </div>
              <div class="ml-3">
                <p class="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
                  By: 
                  {#each authors as author, i }
                    <Link ref={author._id} classes="text-indigo-600">{author.pageInfo.name}</Link>{ i + 2 === authors.length && authors.length > 1 ? ` and ` : i + 1 !== authors.length && authors.length > 1 ? `, ` : ''}
                  {/each}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- React, Redux, Node.js, Express, and SQL -->

      </div>
      {#if post.image && post.image.image}
        <img class="my-8 w-full rounded-lg object-cover object-center" style="height: 70vh;" src={urlFor(post.image.image).quality(80).width(2000)} alt={post.image.image.alt}>
      {/if}
    </div>
    <div class="prose prose-lg text-gray-500 mx-auto">
      <p>Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. <a href="/">Mattis mauris semper</a> sed amet vitae sed turpis id.</p>
      <ul>
        <li>Quis elit egestas venenatis mattis dignissim.</li>
        <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
        <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
      </ul>
      <p>Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.</p>
      <h2>From beginner to expert in 30 days</h2>
      <p>Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
      <blockquote>
        <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
      </blockquote>
      <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
      <figure>
        <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873">
        <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
      </figure>
      <h3>Everything you need to get up and running</h3>
      <p>Purus morbi dignissim senectus mattis <a href="/">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>
      <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
    </div>
  </div>
</div>

