export default {
  name: 'tag',
  type: 'document',
  title: 'Tags',
  fields: [
    {
      name: 'pageInfo',
      title: 'Title & Slug',
      type: 'blogPageInfo',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      pageInfo: 'pageInfo',
    },
    prepare({ pageInfo }) {
      return {
        title: pageInfo.name,
        subtitle: `/${pageInfo.slug.current}`,
      };
    },
  },
};
