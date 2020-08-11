export default {
  name: 'single_price_with_details_pricing',
  title: 'Single price with details - Pricing',
  type: 'object',
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
        title: `Single price with details - Pricing: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
