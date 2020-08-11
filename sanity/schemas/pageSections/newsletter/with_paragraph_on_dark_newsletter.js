export default {
  name: 'with_paragraph_on_dark_newsletter',
  type: 'object',
  title: 'With paragraph on brand card - Newsletter',
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
        title: `With paragraph on dark Newsletter: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
