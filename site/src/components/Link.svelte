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
  export let ref;

  let linkData;

  // Build linkData to grab & normalize the data
  if ((link && link.link[0]._type === "linkInternal") || ref) {
    const allPageData = getContext('allPageData'); // Grab all pages link info
    if (ref) {
      linkData = getPageInfoFromRef(ref, allPageData) // Retrun specific pages info
    } else {
      linkData = getPageInfoFromRef(link.link[0].link._ref, allPageData) // Retrun specific pages info
    }
  }
  
  if (link && link.link[0]._type === "linkExternal") {
    linkData = link
  }
	
  
</script>

{#if ref}
  <a class={classes} href={`/${linkData.pageInfo.slug.current}`} rel={linkData.openInNewTab ? 'noopener noreferrer' : 'prefetch'} target={linkData.openInNewTab ? '_blank' : ''}>
    <slot>{link.text}</slot>
  </a>
{:else if link.link[0]._type === "linkInternal"}
  <a class={classes} href={`/${linkData.pageInfo.slug.current}`} rel={linkData.openInNewTab ? 'external' : 'prefetch'} target={linkData.openInNewTab ? '_blank' : ''}>
    <slot>{link.text}</slot>
  </a>
{:else if link.link[0]._type === "linkExternal"}
  <a class={classes} href={linkData.link[0].url} rel={linkData.openInNewTab ? 'noopener noreferrer' : 'external'} target={linkData.openInNewTab ? '_blank' : ''}>
    <slot>{link.text}</slot>
  </a>
{/if}