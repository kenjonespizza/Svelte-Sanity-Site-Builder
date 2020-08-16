<script context="module">
  
  // // run a groq query
  // import {resolveLink} from '../utils/helpers'
  // console.log('linkHERE:', link)
  // // export async function preload(page, session) {
	// // 	resolveLink
  // // }
  
  // export async function resolveLink({link}) {
  // // console.log('link.link[0].link:', link[0].link._ref)

  //   const linkData = await sanityClient.fetch(`*[_type == "page" && _id == '${link[0].link._ref}']`)
  //   return linkData || []
  // }

  // console.log('resolveLink:', resolveLink())

</script>

<script>
  import { getPageInfoFromRef } from '../utils/helpers'
  import { getContext } from 'svelte';

  export let classes;
  export let link;

  let linkData;

  if (link.link[0]._type === "linkInternal") {
    const allPageData = getContext('allPageData'); // Grab all pages link info
    linkData = getPageInfoFromRef(link.link[0].link._ref, allPageData) // Retrun specific pages info
  }
  
  if (link.link[0]._type === "linkExternal") {
    linkData = link
  }
	
  
</script>


{#if link.link[0]._type === "linkInternal" && !linkData.openInNewTab}
  <a class={classes} href={`/${linkData.pageInfo.slug.current}`} rel={linkData.openInNewTab ? 'noopener noreferrer' : 'prefetch'} target={linkData.openInNewTab ? '_blank' : ''}>
    <slot>{link.text}</slot>
  </a>
{:else if link.link[0]._type === "linkExternal"}
  <a class={classes} href={linkData.link[0].url} rel={linkData.openInNewTab ? 'noopener noreferrer' : 'external'} target={linkData.openInNewTab ? '_blank' : ''}>
    <slot></slot>
  </a>
{/if}