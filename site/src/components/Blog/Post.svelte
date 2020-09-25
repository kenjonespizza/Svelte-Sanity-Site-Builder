<script>
  import Link from "../Link.svelte";
  import BlockContent from "../BlockContent.svelte";
  import { truncate, toPlainText, urlFor } from "../../utils/helpers";

  export let post;
</script>

<div>
  <a href={`blog/${post.pageInfo.slug.current}`} rel=prefetch classes="block">
    {#if post.image}
    <img loading=lazy class="mb-4 object-cover h-96 w-full shadow-lg rounded-lg" src={urlFor(post.image).quality(80).width(822)} alt="">
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
  </a>
  <div class="mt-3">
    <Link ref={post._id} rel=prefetch  classes="text-base leading-6 underline font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
      Read post
    </Link>
  </div>
</div>