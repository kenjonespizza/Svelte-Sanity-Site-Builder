export default {
  name: 'with_large_avatar_testimonial',
  type: 'object',
  title: 'With large avatar - Testimonial',
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
        title: `With large avatar - Testimonial: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
