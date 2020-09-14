import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    let [author, page] = req.params.author.split(',')
    console.log('page:', page)
    console.log('author:', author)

    const authorFilter = `*[_type == "author" && pageInfo.slug.current == $author][0]`;
    const authorProjection = `{
      ...,
      "posts": *[_type == 'post' && references(^._id)]{
        pageInfo,
        publishedAt,
        excerpt,
        image,
        body,
        _id
      }
    }`;
    
    const authorQuery = authorFilter + authorProjection;
    const params = {author: author}
    const authorData = await client.fetch(authorQuery, params)

    res.end(JSON.stringify({ authorData, page }));
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