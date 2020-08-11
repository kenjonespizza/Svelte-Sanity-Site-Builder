export default {
  name: 'three_column_cards_blog',
  type: 'object',
  title: '3 column cards - Blog',
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
        title: `3 column cards - Blog: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
