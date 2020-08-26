const sectionName = `Hero: Split With Image`

export default {
  name: 'split_with_image_cta',
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
    {
      name: 'backgroundColor',
      title: 'Background Color?',
      type: 'string',
      description: 'Default: Normal',
      options: {
        list: [
          {value: 'normal', title: "Normal"},
          {value: 'inverted', title: "Inverted"},
          {value: 'primary', title: "Primary Color"},
        ],
        layout: 'radio',
        direction: 'horizontal',
      }
    }
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

