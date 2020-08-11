export default {
  name: 'three_column_with_badges_blog',
  type: 'object',
  title: '3 column with badges - Blog',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `3 column with badges - Blog: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
