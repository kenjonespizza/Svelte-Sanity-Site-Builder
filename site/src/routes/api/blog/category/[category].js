import client from '../../../../sanityClient'
import { postPerPage } from '../../blog/utils'

export async function get (req, res) {
  try {
    // Get the page params
    let [category, currentPage] = req.params.category.split(',')

    // Set currentPage to 1 by default if it wasn't set in the URL
    currentPage = currentPage ? Number(currentPage) : 1

    let perPage = postPerPage // ToDo, consider setting this in sanity, but then we'll need to do an additional API call first to get that value
    let start = perPage * currentPage - perPage
    let end = perPage * currentPage

    const filter = `*[_type == "category" && pageInfo.slug.current == $category][0]`;
    const projection = `{
      ...,
      "posts": *[_type == 'post' && references(^._id)] | order(publishedAt desc) [$start...$end] {
        ...
      },
      "count": count(*[_type == 'post' && references(^._id)])
    }`;
    
    const query = filter + projection;
    const params = {category, start, end}
    const categoryData = await client.fetch(query, params)
    const {posts, count} = categoryData

    res.end(JSON.stringify({ categoryData, posts, count, currentPage, perPage }));
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