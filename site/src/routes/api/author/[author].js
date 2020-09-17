import client from '../../../sanityClient'
import { postPerPage } from '../blog/utils'

export async function get (req, res) {
  try {
    // Get the page params
    let [author, currentPage] = req.params.author.split(',')

    // Set currentPage to 1 by default if it wasn't set in the URL
    currentPage = currentPage ? Number(currentPage) : 1

    let perPage = postPerPage // ToDo, consider setting this in sanity, but then we'll need to do an additional API call first to get that value
    let start = perPage * currentPage - perPage
    let end = perPage * currentPage

    const authorFilter = `*[_type == "author" && pageInfo.slug.current == $author][0]`;
    const authorProjection = `{
      ...,
      "posts": *[_type == 'post' && references(^._id)] | order(publishedAt desc) [$start...$end] {
        pageInfo,
        publishedAt,
        excerpt,
        image,
        body,
        _id
      },
      "count": count(*[_type == 'post' && references(^._id)])
    }`;
    
    const authorQuery = authorFilter + authorProjection;
    const queryParams = {author, start, end}
    const authorData = await client.fetch(authorQuery, queryParams)

    res.end(JSON.stringify({ authorData, currentPage, perPage }));
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