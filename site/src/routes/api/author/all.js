import client from '../../../sanityClient'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get (req, res) {
  try {
    const constraints = `*[][0]`
    const projections = `{
      "authors": *[_type == "author" && defined(pageInfo.slug.current)] | order(pageInfo.name asc){
        ...
      },
      "blogInfo": *[_type == "blog"][0]{
        ...
      }
    }`
    const query = constraints + projections
    const params = {}
    const results = await client.fetch(query, params)
    const {authors, blogInfo} = results
    res.end(JSON.stringify({ authors, blogInfo }));
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