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
  import { getPageInfoFromRef, resolveSubdirectory } from '../utils/helpers'
  import { getContext } from 'svelte';

  export let classes;
  export let link;
  // console.log('link:', link)
  export let ref;
  export let subDirectory = null;
  export let title;
  export let text = '';
  // console.log('text:', text)
  // export let portableText
  // console.log('portableText:', portableText)

  let linkData;

  // console.log($$props)

  // Build linkData to grab & normalize the data
  if ((link && link.link[0]._type === "linkInternal") || ref) {
    const allPageData = getContext('allPageData'); // Grab all pages link info
    // console.log('allPageData:', allPageData)
    if (ref) {
      linkData = getPageInfoFromRef(ref, allPageData) // Retrun the page info
    } else {
      linkData = getPageInfoFromRef(link.link[0].link._ref, allPageData) // Retrun the page info
    }
  }
  
  if (link && link.link[0]._type === "linkExternal") {
    linkData = link
  }

  // Use the provided subDirectory prop if it exists, otherwise, resolve using the pages '_type'
  let normalizedSubdirectory = subDirectory === null ? `${resolveSubdirectory(linkData)}` : `${subDirectory}/`
  
</script>

{#if ref}
  <a class={classes} href={`/${normalizedSubdirectory}${linkData.pageInfo.slug.current}`} title={title || ""} rel='prefetch'>
    <slot>{text !== '' ? text : link.text}</slot>
  </a>
{:else if link.link[0]._type === "linkInternal"}
  <a class={classes} href={`/${normalizedSubdirectory}${linkData.pageInfo.slug.current}`} rel={link.openInNewTab ? 'external' : 'prefetch'} target={link.openInNewTab ? '_blank' : ''} title={title || ""}>
    <slot>{text !== '' ? text : link.text}</slot>
  </a>
{:else if link.link[0]._type === "linkExternal"}
  <a class={classes} href={linkData.link[0].url} rel={link.openInNewTab ? 'noopener noreferrer' : 'external'} target={link.openInNewTab ? '_blank' : ''} title={title || ""}>
    <slot>{text !== '' ? text : link.text}</slot>
  </a>
{/if}