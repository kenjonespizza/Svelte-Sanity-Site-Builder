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
      type: 'blogPageInfo',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'portableText',
    },
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'figure',
    // },
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
