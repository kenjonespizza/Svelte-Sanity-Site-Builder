import client from '../../../../sanityClient'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get (req, res) {
  try {
    const filter = `*[_type == "category" && defined(pageInfo.slug.current)] | order(desc)`
    const projections = `{
      ...,
      "count": count(*[_type == 'post' && references(^._id)])
    }`
    const query = filter + projections
    const params = ""
    const categories = await client.fetch(query , params)
    res.end(JSON.stringify(categories));
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