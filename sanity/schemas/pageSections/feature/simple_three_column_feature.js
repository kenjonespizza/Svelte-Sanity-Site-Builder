export default {
  name: 'simple_three_column_feature',
  type: 'object',
  title: 'Simple three column - Feature',
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
        title: `Simple three column - Feature: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
