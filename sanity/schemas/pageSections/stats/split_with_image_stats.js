export default {
  name: 'split_with_image_stats',
  type: 'object',
  title: 'Split with image - Stats',
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
        title: `Split with image - Stats: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
