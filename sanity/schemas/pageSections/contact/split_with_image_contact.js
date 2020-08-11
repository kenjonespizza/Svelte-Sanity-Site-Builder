export default {
  name: 'split_with_image_contact',
  type: 'object',
  title: 'Split with image - Contact',
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
        title: `Split with image - Contact: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
