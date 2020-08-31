import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    // We have access to req.params.slug because the filename has [slug] in it.
    const { slug } = req.params;
    const pageFilter = '*[][0]';
    const pageProjection = `{
      'page': *[pageInfo.slug.current == "${slug}"]{...}
    }`;
    
    const pageQuery = pageFilter + pageProjection;
    const pageData = await client.fetch(pageQuery, { slug })
    

    res.end(JSON.stringify({ pageData }));
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