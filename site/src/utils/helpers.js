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

export async function resolveLink(link) {

  const res = await sanityClient.fetch(`*[_type == "page" && _id == '${link.link[0].link._ref}']{...}`)
    return res;

}

export function getPageInfoFromRef (ref, allPageData) { // Use the link _ref to return just the specific pageInfo
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