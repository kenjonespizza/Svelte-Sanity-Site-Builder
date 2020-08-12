import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    // We have access to req.params.slug because the filename has [slug] in it.
    const { slug } = req.params;
    const filter = '*[defined(pageInfo.slug.current) && pageInfo.slug.current == $slug][0]';
    const projection = `{
      ...
    }`;

    const query = filter + projection;
    const page = await client.fetch(query, { slug })
    res.end(JSON.stringify({ page }));
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