import client from '../../../../sanityClient'
import { mergeArrays, slugify } from '../../../../utils/helpers'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get (req, res) {
  try {

    // Get the page params
    let {page: currentPage} = req.params

    // Set currentPage to 1 by default if it wasn't set in the URL
    currentPage = currentPage ? Number(currentPage) : 1

    let perPage = 2 // ToDo, consider setting this in sanity, but then we'll need to do an additional API call first to get that value
    let start = perPage * currentPage - perPage
    let end = perPage * currentPage

    const filter = `*[][0]`;
    const projection = `{
      "posts": *[_type == "post" && defined(pageInfo.slug.current)] | order(publishedAt desc) [$start...$end],
      "count": count(*[_type == 'post']),
      "blogInfo": *[_type == "blog"][0]{...},
      "categories": *[_type == "category"]{
        _id,
        pageInfo,
        "count": count(*[_type == 'post' && references(^._id)])
      },
      "topics": *[_type == "post" && defined(topics)] {
        topics
      },
    }`;
    
    const query = filter + projection;
    const params = {start, end}
    const results = await client.fetch(query, params)
    const {posts, count, blogInfo, categories, topics: allTopics} = results
    let topics = []
    allTopics.forEach(eachTopics => {
      topics = mergeArrays(slugify, topics, eachTopics.topics)
    })

    res.end(JSON.stringify({ posts, currentPage, perPage, count, blogInfo, categories, topics }));
  } catch (err) {
    console.log('err:', err.message)
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: err.message
    }));  
  }
};