export default {
  name: 'side_by_side_grid_contact',
  type: 'object',
  title: 'Side by side grid - Contact',
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
        title: `Side by side grid - Contact: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
