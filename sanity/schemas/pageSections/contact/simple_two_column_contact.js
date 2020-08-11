export default {
  name: 'simple_two_column_contact',
  type: 'object',
  title: 'Simple two column - Contact',
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
        title: `Simple two column - Contact: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
