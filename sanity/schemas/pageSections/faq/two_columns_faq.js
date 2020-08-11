import { FcList } from 'react-icons/fc';

export default {
  name: 'two_columns_faq',
  type: 'object',
  title: 'Two Columns - FAQ',
  icon: FcList,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'titleAndDescriptionLeft',
      title: 'Title and description left',
      type: 'array',
      of: [{ type: 'titleAndDescription' }],
    },
    {
      name: 'titleAndDescriptionRight',
      title: 'Title and description right',
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
        title: `Two Columns - FAQ: ${disabled ? 'DISABLED' : title}`,
      };
    },
  },
};
