<script>
  import { getPageInfoFromRef, resolveSubdirectory } from '../utils/helpers'
  import { getContext } from 'svelte';

  export let classes = '';
  export let link = null;
  export let ref = null;
  export let subDirectory = null;
  export let title = '';
  export let text = '';
  export let noscroll = undefined;

  let linkData;
  $: linkData;

  // Build linkData to grab & normalize the data
  if ((link && link.link[0]._type === "linkInternal") || ref) {
    const allPageData = getContext('allPageData'); // Grab all pages link info
    if (ref) {
      linkData = getPageInfoFromRef(ref, allPageData) // Retrun the page info
      // console.log('allPageData:', allPageData)
    } else {
      linkData = getPageInfoFromRef(link.link[0].link._ref, allPageData) // Retrun the page info
    }
  }
  
  if (link && link.link[0]._type === "linkExternal") {
    linkData = link
  }

  // Use the provided subDirectory prop if it exists, otherwise, resolve using the pages '_type'
  let normalizedSubdirectory = subDirectory === null ? `${resolveSubdirectory(linkData)}` : `${subDirectory}/`
  
  // If link is internal, check if its the homepage
  if (linkData && linkData.homepage && linkData._id && (linkData.homepage[0].homepage._ref === linkData._id)) {
    linkData.pageInfo.slug.current = ""
    normalizedSubdirectory = ""
    // Todo: ... look into if this is a duplicate content thing...
  }
  
</script>

{#if ref}
  <a class={classes} href={`/${normalizedSubdirectory}${linkData.pageInfo.slug.current}`} title={title || ""} rel='prefetch' sapper:noscroll={noscroll}>
    <slot>{text !== '' ? text : link.text}</slot>
  </a>
{:else if link.link[0]._type === "linkInternal"}
  <a class={classes} href={`/${normalizedSubdirectory}${linkData.pageInfo.slug.current}`} rel={link.openInNewTab ? 'external' : 'prefetch'} target={link.openInNewTab ? '_blank' : ''} title={title || ""} sapper:noscroll={noscroll}>
    <slot>{text !== '' ? text : link.text}</slot>
  </a>
{:else if link.link[0]._type === "linkExternal"}
  <a class={classes} href={linkData.link[0].url} rel={link.openInNewTab ? 'noopener noreferrer' : 'external'} target={link.openInNewTab ? '_blank' : ''} title={title || ""}>
    <slot>{text !== '' ? text : link.text}</slot>
  </a>
{/if}