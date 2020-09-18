import { RiDraftLine } from 'react-icons/ri'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon: RiDraftLine,
  fields: [
    // {
    //   name: 'pageInfo',
    //   title: 'Title & Slug',
    //   type: 'blogPageInfo',
    // },
    {
      name: 'pageInfo',
      title: 'Title & Slug',
      type: 'postPageInfo',
    },
    {
      name: 'shortText',
      title: 'Short Description Under Title',
      type: 'minimalPortableText',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'Choosing a future date will not make the post automatically show on that date.',
    },
    {
      name: 'image',
      type: 'imageNoAlt',
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
      name: 'authors',
      title: 'Author(s)',
      type: 'array',
      description: 'Authors must be created before they can be referenced',
      of: [
        {
          type: 'reference',
          to:
            { type: 'author' },
        },
      ],
      validation: Rule => Rule.min(1).unique(),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'Categories must be created before they can be referenced',
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
      name: 'topics',
      type: 'array',
      title: 'Topics',
      description: 'Max: 5 topics',
      validation: Rule => Rule.max(5),
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
      media: 'image.image',
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
