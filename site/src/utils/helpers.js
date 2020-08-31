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
  if (type === 'post') {
    return 'blog/'
  } else if (type === 'page') { // if type exists, just return the type as the subDirectory
    return ""
  } else if (type) { // if type exists, just return the type as the subDirectory
    return `${type}/`
  }

  return null
}