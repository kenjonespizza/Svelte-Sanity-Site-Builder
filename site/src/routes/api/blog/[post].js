import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    const { post } = req.params;
    const postFilter = `*[_type == "post" && pageInfo.slug.current == "${post}"][0]`;
    const postProjection = `{
      ...,
      authors[]->{pageInfo, image, _id},
      categories[]->{pageInfo, image, _id},
    }`;
    
    const postQuery = postFilter + postProjection;
    const postData = await client.fetch(postQuery, { post })

    res.end(JSON.stringify({ postData }));
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