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
    // console.log('pageQuery:', pageQuery)
    const pageData = await client.fetch(pageQuery, { slug })
    // console.log('pageData:', pageData)
    
    // const linkFilter = '*[defined(pageInfo.slug.current)]';
    // const linkProjection = `{_id, pageInfo}`;
    // const linkQuery = linkFilter + linkProjection;
    // const allPageData = await client.fetch(linkQuery)

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