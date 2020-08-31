import sanityClient from 'part:@sanity/base/client';
import slugify from 'slugify';

function slugifier(input, type) {
  const slug = slugify(input, {
    replacement: '-', // replace spaces with replacement
    remove: /[*+~.,;()'"!:?@]/g, // regex to remove characters
    lower: true, // result in lower case
  });
  const query =
    'count(*[pageInfo.slug.current == $slug]{_id}) && _typ == "author"';
  const params = { slug };
  return sanityClient.fetch(query, params).then((count) => {
    if (count > 0) {
      return `${slug}-${count + 1}`;
    }
    return slug;
  });
}

export default {
  name: 'authorPageInfo',
  title: 'Page Information',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'EX: "projects". No leading slash',
      type: 'slug',
      options: {
        source: (author) => author.pageInfo && `${author.pageInfo.name}`,
        slugify: slugifier,
      },
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'childOf',
    //   title: 'Child of:',
    //   type: 'reference',
    //   description: 'Leave empty if top level page',
    //   to: [
    //     {type: 'pages'}
    //   ],
    //   weak: true
    // },
  ],
};
