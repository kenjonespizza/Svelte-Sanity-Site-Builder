import client from '../../../sanityClient'
import { postPerPage } from './utils'
import { mergeArrays, slugify, massageTopics } from '../../../utils/helpers'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get (req, res) {
  try {

    let perPage = postPerPage // ToDo, consider setting this in sanity, but then we'll need to do an additional API call first to get that value
    let currentPage = 1

    const filter = `*[][0]`;
    const projection = `{
      "posts": *[_type == "post" && defined(pageInfo.slug.current)] | order(publishedAt desc) [0...$perPage]{...},
      "blogInfo": *[_type == "blog"][0]{...},
      "categories": *[_type == "category"]{
        _id,
        pageInfo,
        "count": count(*[_type == 'post' && references(^._id)])
      },
      "topics": *[_type == "post" && defined(topics)] {
        topics
      },
      "count": count(*[_type == 'post'])
    }`;
    
    const query = filter + projection;
    const params = {perPage}
    const results = await client.fetch(query, params)
    const {posts, count, blogInfo, categories, topics: allTopics} = results
    let topics = massageTopics(allTopics)

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