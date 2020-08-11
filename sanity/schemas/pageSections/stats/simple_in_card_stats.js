export default {
  name: 'simple_in_card_stats',
  type: 'object',
  title: 'Simple in card - Stats',
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
        title: `Simple in card - Stats: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
