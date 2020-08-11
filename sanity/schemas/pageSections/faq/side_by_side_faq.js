import { FcList } from 'react-icons/fc';

export default {
  name: 'side_by_side_faq',
  type: 'object',
  title: 'Side by side - FAQ',
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
        title: `Side by side - FAQ: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
