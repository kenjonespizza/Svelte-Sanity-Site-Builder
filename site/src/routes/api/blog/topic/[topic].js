import client from '../../../../sanityClient'
import { postPerPage } from '../utils'
import { slugify, massageTopics } from '../../../../utils/helpers'

export async function get (req, res) {
 
    let allPostsWithTopic = [] // Initiate array of _id's for posts with topic
    let [topic, currentPage] = req.params.topic.split(',')

    // Set currentPage to 1 by default if it wasn't set in the URL
    currentPage = currentPage ? Number(currentPage) : 1

    let perPage = postPerPage // ToDo, consider setting this in sanity, but then we'll need to do an additional API call first to get that value
    let start = perPage * currentPage - perPage
    let end = perPage * currentPage

    let filter = `*[_type == 'post' && defined(topics)]`;
    let projection = `{
      topics,
      _id
    }`;
    let query = filter + projection;
    let params = {topic, start, end}
    // Query all posts for _id's and topics.  A todo might be to get all the data in one query, and then just return the ones with the correct topic... hmmm
    client.fetch(query, params)
    .then(posts => {

      // This step makes a list of the post _id's with the expected topic
      posts.forEach(post => {
        post.topics.forEach(eachTopic => {
          if (topic === slugify(eachTopic)) {
            allPostsWithTopic.push(post._id)
          }
        })  
      });

      return allPostsWithTopic
    })
    // Now we query just for the posts with our targeted _id's
    .then(allPostsWithTopic => {
      filter = `*[][0]`;
      projection = `{
        ...,
        "posts": *[_type == 'post' && _id in $allPostsWithTopic] | order(publishedAt desc) [$start...$end] {...},
        "blogInfo": *[_type == "blog"][0]{...},
        "topics": *[_type == "post" && defined(topics)] {
          topics
        },
        "count": count(*[_type == 'post' && _id in $allPostsWithTopic])
      }`;
      
      query = filter + projection;
      params = {allPostsWithTopic, start, end}
      let results = client.fetch(query, params)
      return results
    })
    .then( results => {
      const {posts, count, categories, blogInfo, topics: allTopics} = results
      let topics = massageTopics(allTopics)
      res.end(JSON.stringify({ posts, currentPage, perPage, count, blogInfo, categories, topics }));
    })
    .catch( error => {
      console.log('error:', error.message)
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        message: error.message
      }));  
    })

};