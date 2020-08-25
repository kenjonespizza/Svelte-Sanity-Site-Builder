const sectionName = `Hero: With Angled Image On Right`

export default {
  name: 'with_angled_image_on_right_hero',
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
        title: `${disabled ? '⚠️ DISABLED' : (heading || 'No Heading')}`,
        subtitle: sectionName,
        media: image,
      };
    },
  },
};

