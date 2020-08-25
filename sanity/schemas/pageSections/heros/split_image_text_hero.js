const sectionName = `Hero: Split Image & Text`

export default {
  name: 'split_image_text_hero',
  type: 'object',
  title: sectionName,
  fieldsets: [],
  fields: [
    {
      name: 'headingBlock',
      title: 'Heading & Sub-Heading',
      type: 'headingBlock',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'minimalPortableText',
    },
    
    {
      name: 'buttons',
      title: 'Button(s)',
      type: 'array',
      of: [
        {type: 'button'}
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'basicImage',
    },
  ],
  preview: {
    select: {
      heading: 'headingBlock.heading',
      disabled: 'disabled',
      image: 'image.image',
    },
    prepare({ heading, disabled, image }) {
      return {
        title: `${disabled ? '⚠️ DISABLED' : (heading || "No Heading")}`,
        subtitle: sectionName,
        media: image,
      };
    },
  },
};

