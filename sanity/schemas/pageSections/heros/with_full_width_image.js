const sectionName = `Hero: With Full Width Image`

export default {
  name: 'with_full_width_image',
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
      name: 'contentAboveImage',
      title: 'Content Above image',
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
    {
      name: 'contentBelowImage',
      title: 'Content Below image',
      type: 'minimalPortableText',
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

