export default {
  name: 'with_angled_image_on_right_hero',
  type: 'object',
  title: 'With angled image on right - Hero',
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
        title: `With angled image on right - Hero: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
