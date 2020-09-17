import slugee from 'slugify'

import sanityClient from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source)
}

// Use the link _ref to return just the specific pageInfo
export function getPageInfoFromRef (ref, allPageData) { 
  if (allPageData && allPageData.length > 0) {
    const page = allPageData.filter(page => {
      if (page._id === ref) {
        return true
      }
    })

    if (page) {
      return page[0]
    }
  }
  return false
}

// Return a subDirectory base on what the type of page is
export const resolveSubdirectory = (linkData) => {
  let type = linkData && linkData._type ? linkData._type : null 

  switch (type) {
    case 'post':
      return 'blog/'
    case 'page':
      return ''
    case 'blog':
      return ''
    default:
      return `${type}/`
  }
}

export function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}

export function truncate(str, length, ending) {
  if (length == null) {
    length = 255;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export function slugify(string) {
  return slugee(string, {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true,      // convert to lower case, defaults to `false`
    strict: true,     // strip special characters except replacement, defaults to `false`
  })
}

export function unSlugify(string) {
  if (typeof string !== 'string') {
    return ''
  } else {
    return string.replace('-', ' ')
  }
}