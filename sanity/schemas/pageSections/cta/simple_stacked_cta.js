import { FcSpeaker } from 'react-icons/fc';

const sectionName = `Call To Action: Simple Stacked`

export default {
  name: 'simple_stacked_cta',
  type: 'object',
  title: sectionName,
  icon: FcSpeaker,
  fields: [
    {
      name: 'headingBlock',
      title: 'Heading & Sub-Heading',
      type: 'headingBlock',
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
    },
  ],
  preview: {
    select: {
      heading: 'headingBlock.heading',
      disabled: 'disabled',
    },
    prepare({ heading, disabled }) {
      return {
        title: `${disabled ? '⚠️ DISABLED' : (heading || "No Heading")}`,
        subtitle: sectionName,
      };
    },
  },
};
