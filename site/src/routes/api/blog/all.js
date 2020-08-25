import client from '../../../sanityClient'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get (req, res) {
  try {
    const pages = await client.fetch(`*[_type = "post" defined(pageInfo.slug.current)]`)
    res.end(JSON.stringify({ pages }));
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