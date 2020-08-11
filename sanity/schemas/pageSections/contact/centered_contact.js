export default {
  name: 'centered_contact',
  type: 'object',
  title: 'Centered - Contact',
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
        title: `Centered - Contact: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
