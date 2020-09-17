import client from '../../../sanityClient'
import { postPerPage } from './utils'

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
      "count": count(*[_type == 'post'])
    }`;
    
    const query = filter + projection;
    const params = {perPage}
    const results = await client.fetch(query, params)
    const {posts, count, blogInfo} = results

    res.end(JSON.stringify({ posts, currentPage, perPage, count, blogInfo }));
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