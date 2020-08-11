export default {
  name: 'two_column_with_sign_up_blog',
  type: 'object',
  title: '2 column with sign up - Blog',
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
        title: `2 column with sign up - Blog: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
