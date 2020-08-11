export default {
  name: 'centered_2x2_grid_feature',
  type: 'object',
  title: 'Centered 2x2 grid - Feature',
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
        title: `Centered 2x2 grid - Feature: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
