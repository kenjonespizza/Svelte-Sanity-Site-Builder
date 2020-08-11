export default {
  name: 'simple_centered_testimonial',
  type: 'object',
  title: 'Simple centered - Testimonial',
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
        title: `Simple centered - Testimonial: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
