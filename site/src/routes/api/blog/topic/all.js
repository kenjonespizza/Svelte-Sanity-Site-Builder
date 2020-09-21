import client from '../../../../sanityClient'
import { massageTopics } from '../../../../utils/helpers'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get (req, res) {
  try {
    const constraints = `*[_type == "post" && defined(topics)]`
    const projections = `{
      topics,
      "count": count(topics)
    }`
    const query = constraints + projections
    const topicsResults = await client.fetch(query)
    let topics = massageTopics(topicsResults)
    res.end(JSON.stringify({ topics }));
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