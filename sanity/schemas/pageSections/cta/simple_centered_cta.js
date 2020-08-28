import { FcSpeaker } from 'react-icons/fc';

const sectionName = `Call To Action: Simple Centered`

export default {
  name: 'simple_centered_cta',
  type: 'object',
  title: 'Simple centered - CTA',
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
