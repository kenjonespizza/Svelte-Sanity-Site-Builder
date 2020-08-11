export default {
  name: 'simple_centered_hero',
  type: 'object',
  title: 'Simple centered - Hero',
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
        title: `Simple centered - Hero: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
