export default {
  type: 'object',
  name: 'two_tiers_with_extra_tier_pricing',
  title: 'Two tiers with extra tier - Pricing',
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
        title: `Two tiers with extra tier - Pricing: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
