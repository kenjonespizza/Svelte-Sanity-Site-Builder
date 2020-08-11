export default {
  name: 'simple_on_brand_stats',
  type: 'object',
  title: 'Simple on brand stats - Stats',
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
        title: `Simple on brand stats - Stats: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
