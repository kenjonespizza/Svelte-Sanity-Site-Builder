import { FcViewDetails } from 'react-icons/fc';

export default {
  name: 'titleAndDescription',
  type: 'object',
  icon: FcViewDetails,
  title: 'Title and Description',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'descriptionPortableText',
    },
  ],
};
