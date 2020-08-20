const sectionName = `Hero: With Full Width Image`

export default {
  name: 'with_full_width_image',
  type: 'object',
  title: sectionName,
  fieldsets: [
    {
      name: 'heading', 
      title: 'Heading',
    }
  ],
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      fieldset: 'heading',
    },
    {
      name: 'headingType',
      title: 'Heading Type',
      type: 'string',
      options: {
        list: [
          {value: 'h1', title: 'H1'},
          {value: 'h2', title: 'H2'},
          {value: 'h3', title: 'H3'},
          {value: 'h4', title: 'H4'}
        ],
      },
      description: "This won't affect the look of the text, just the perceived importance.  Tip: Each page should only have one H1 tag.",
      fieldset: 'heading',
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
      heading: 'heading',
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

