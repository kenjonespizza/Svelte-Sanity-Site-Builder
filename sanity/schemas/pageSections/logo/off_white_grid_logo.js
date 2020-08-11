export default {
  name: 'off_white_grid_logo',
  type: 'object',
  title: 'Off white grid - Logo',
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
        title: `Off white grid - Logo: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
