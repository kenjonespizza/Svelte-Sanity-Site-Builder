export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'pageInfo',
      title: 'Title & Slug',
      type: 'blogPageInfo',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Main image',
    },
    {
      name: 'body',
      type: 'portableText',
      title: 'Body',
    },
    {
      name: 'excerpt',
      type: 'minimalPortableText',
      title: 'Excerpt',
      description: 'If left blank, an except will be generated from the Body',
    },
    {
      name: 'readTime',
      title: 'Read time in minutes',
      type: 'number',
      description: 'Please inter an integer.',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      description: 'This must be created before it can be referenced',
      to: [{ type: 'author' }],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'This must be created before it can be referenced',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Add as many tags as you like',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'pageInfo.name',
      publishedAt: 'publishedAt',
      slug: 'pageInfo.slug',
      media: 'image',
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      return {
        title,
        media,
        subtitle: publishedAt ? `/${slug.current}` : 'Missing publishing date',
      };
    },
  },
};
