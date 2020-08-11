export default {
  name: 'simple_stacked_newsletter',
  type: 'object',
  title: 'Simple stacked - Newsletter',
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
        title: `Simple stacked - Newsletter: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
