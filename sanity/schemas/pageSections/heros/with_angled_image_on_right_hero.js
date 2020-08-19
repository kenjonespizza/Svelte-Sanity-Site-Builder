import {blockPreview} from '../../../src/utils/helpers'
const sectionName = `Hero: With Angled Image On Right`

export default {
  name: 'with_angled_image_on_right_hero',
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
      heading: 'heading',
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

