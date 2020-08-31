export default {
  name: 'authorReference',
  type: 'object',
  title: 'Author reference',
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'author.pageInfo.name',
      subtitle: 'author.pageInfo.slug.current',
      media: 'author.image.asset',
    },
    prepare({ subtitle }) {
      return {
        subtitle: `/${subtitle}`,
      };
    },
  },
};
