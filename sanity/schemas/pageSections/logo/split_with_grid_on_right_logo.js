export default {
  name: 'split_with_grid_on_right_logo',
  type: 'object',
  title: 'Split with grid on right - Logo',
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
        title: `Split with grid on right - Logo: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
