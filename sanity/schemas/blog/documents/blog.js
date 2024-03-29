import { IoIosDocument } from 'react-icons/io';

export default {
  name: 'blog',
  title: 'Blog info & settings',
  type: 'document',
  icon: IoIosDocument,
  fields: [
    {
      name: 'pageInfo',
      title: 'Blog Info',
      type: 'blogPageInfo',
      hidden: false,
    },
    {
      name: 'content',
      title: 'Blog page content',
      type: 'portableText',
    },
    // {
    //   name: 'postsPerPage',
    //   title: 'Posts Per Page',
    //   type: 'number',
    //   options: {
    //     list: [12, 24, 36],
    //     layout: 'radio',
    //     direction: 'horizontal',
    //   }
    // },
    // {
    //   name: 'columns',
    //   title: 'Columns to display',
    //   type: 'string',
    //   options: {
    //     list: ['1', '2', '3', '4'],
    //     layout: 'radio',
    //     direction: 'horizontal',
    //   },
    //   description: 'Default is 3.',
    // },
  ],
  preview: {
    select: {
      name: 'pageInfo.name',
      slug: 'pageInfo.slug.current',
    },
    prepare(selection) {
      const { name, slug } = selection;
      return {
        title: name,
        subtitle: `/${slug}`,
      };
    },
  },
};
