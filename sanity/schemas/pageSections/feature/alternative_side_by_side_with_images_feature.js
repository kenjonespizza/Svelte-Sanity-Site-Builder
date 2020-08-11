export default {
  name: 'alternative_side_by_side_with_images_feature',
  type: 'object',
  title: 'Alternative side by side with images - Feature',
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
        title: `Alternative side by side with images - Feature: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
