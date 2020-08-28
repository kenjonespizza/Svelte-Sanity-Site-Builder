import { RiUserLine } from 'react-icons/ri'

export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: RiUserLine,
  fields: [
    {
      name: 'pageInfo',
      title: 'Name & Slug',
      type: 'authorPageInfo',
    },
    {
      name: 'image',
      type: 'imageNoAlt',
      title: 'Image',
    },
    {
      name: 'bio',
      type: 'minimalPortableText',
      title: 'Biography',
    },
    {
      name: 'socialMediaHandles',
      title: 'Social Media Handles',
      type: 'socialMediaHandles',
    },
  ],
  preview: {
    select: {
      title: 'pageInfo.name',
      media: 'image',
    },
  },
};
