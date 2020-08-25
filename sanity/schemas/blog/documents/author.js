export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'pageInfo',
      title: 'Name & Slug',
      type: 'authorPageInfo',
    },
    {
      name: 'image',
      type: 'figure',
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
