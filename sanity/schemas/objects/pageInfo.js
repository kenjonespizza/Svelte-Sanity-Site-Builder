import sanityClient from 'part:@sanity/base/client';
import slugify from 'slugify';

// This function first slugify the requested value.  Next it checks if the requested slug already exists.  If the page does exist, then a '-X' will be added to the slugified value to make it unique.  Then the slug is returned.
function slugifier(input, type) {
  const slug = slugify(input, {
    replacement: '-', // Replace spaces with replacement
    remove: /[*+~.,;()'"!:@]/g, // Regex to remove characters
    lower: true, // Result in lower case
  });

  const query = `count(*[pageInfo.slug.current == $slug && _type == 'page']{_id})`; // Query all other documents that are type 'page
  const params = { slug }; 
  return sanityClient.fetch(query, params).then(count => {
    if (count > 0) { // If the slug is used elsewhere
      return `${slug}-${count + 1}`;
    }
    return slug;
  });
}

export default {
  name: 'pageInfo',
  title: 'Page Information',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Page Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'EX: "about-us". No np slash',
      type: 'slug',
      options: {
        source: page => page.pageInfo && `${page.pageInfo.name}`,
        slugify: slugifier,
      },
    },
  ],
};
