import { FaFolderOpen as FolderIcon } from 'react-icons/fa';

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: FolderIcon,
  fields: [
    {
      name: 'pageInfo',
      title: 'Title & Slug',
      type: 'pageInfo',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'portableText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageNoAlt',
    },
  ],
  preview: {
    select: {
      pageInfo: 'pageInfo',
    },
    prepare({ pageInfo }) {
      return {
        title: pageInfo.name,
        subtitle: `/${pageInfo.slug.current}`,
      };
    },
  },
};
