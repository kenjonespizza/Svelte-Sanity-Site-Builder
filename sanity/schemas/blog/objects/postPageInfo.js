import sanityClient from 'part:@sanity/base/client';
import slugify from 'slugify';

function slugifier(input, type) {
  const slug = slugify(input, {
    replacement: '-', // replace spaces with replacement
    remove: /[*+~.,;()'"!:?@]/g, // regex to remove characters
    lower: true, // result in lower case
  });
  const query = 'count(*[pageInfo.slug.current == $slug && _type == "post"]{_id})';
  const params = { slug };
  return sanityClient.fetch(query, params).then((count) => {
    if (count > 0) {
      return `${slug}-${count + 1}`;
    }
    return slug;
  });
}

export default {
  name: 'postPageInfo',
  title: 'Blog Post Information',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'EX: "about-us". No leading slash',
      type: 'slug',
      options: {
        source: (page) => page.pageInfo && `${page.pageInfo.name}`,
        slugify: slugifier,
      },
    },
    
  ],
};
