import { FcList } from 'react-icons/fc';

export default {
  name: 'centered_accordion_faq',
  type: 'object',
  title: 'Centered Accordion - FAQ',
  icon: FcList,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'titleAndDescription',
      title: 'Title and description',
      type: 'array',
      of: [{ type: 'titleAndDescription' }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `Centered Accordion - FAQ: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
