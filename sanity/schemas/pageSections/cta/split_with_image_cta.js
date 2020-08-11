import { FcSpeaker } from 'react-icons/fc';

export default {
  name: 'split_with_image_cta',
  type: 'object',
  title: 'Split with image - CTA',
  icon: FcSpeaker,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'text',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'Button',
      type: 'cta',
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `Split with image - CTA: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
