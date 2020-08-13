export default {
  name: 'split_image_text_hero',
  type: 'object',
  title: 'Hero: Split Image & Text',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `${disabled ? '⚠️ DISABLED' : title}`,
        subtitle: `Hero: Split Image & Text: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};