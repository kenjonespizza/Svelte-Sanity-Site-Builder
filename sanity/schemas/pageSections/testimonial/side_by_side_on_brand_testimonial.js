export default {
  name: 'side_by_side_on_brand_testimonial',
  type: 'object',
  title: 'Side by side on brand - Testimonial',
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
        title: `Side by side on brand - Testimonial: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
