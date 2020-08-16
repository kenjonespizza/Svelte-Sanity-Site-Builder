export default {
  name: 'split_image_text_hero',
  type: 'object',
  title: 'Hero: Split Image & Text',
  fieldsets: [
    {
      name: 'heading', 
      title: 'Heading',
      options: {
        // columns: 2
      }
    }
  ],
  fields: [
    // {
    //   name: 'heading',
    //   title: 'Heading',
    //   type: 'headingPortableText',
    // },
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
      name: 'content',
      title: 'Content',
      type: 'minimalPortableText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'basicImage',
    },
    {
      name: 'buttons',
      title: 'Button(s)',
      type: 'array',
      of: [
        {type: 'button'}
      ]
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

