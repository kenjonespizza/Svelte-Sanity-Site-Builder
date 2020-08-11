import { FcSpeaker } from 'react-icons/fc';

export default {
  name: 'simple_justified_cta',
  type: 'object',
  title: 'Simple justified - CTA',
  icon: FcSpeaker,
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'ctaList',
      title: 'Add a cta',
      type: 'array',
      of: [
        {
          name: 'cta',
          type: 'cta',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `Simple justified - CTA: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
