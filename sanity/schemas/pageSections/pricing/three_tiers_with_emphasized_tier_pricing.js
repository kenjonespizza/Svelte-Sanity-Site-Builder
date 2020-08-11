export default {
  name: 'three_tiers_with_emphasized_tier_pricing',
  type: 'object',
  title: 'Three tiers with emphasized tier - Pricing',
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
        title: `Three tiers with emphasized tier - Pricing: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
