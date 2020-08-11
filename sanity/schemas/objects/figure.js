export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: false,
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: `Important for accessibility, which is important.`,
      options: {
        isHighlighted: true,
      },
    },
    // {
    //   name: 'link',
    //   title: 'Link',
    //   type: 'linkForRichText',
    //   description: 'Optional',
    //   // options: {
    //   //   isHighlighted: true,
    //   // },
    // },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
    },
    prepare(selection) {
      const { imageUrl, alt } = selection;
      return {
        title: alt || 'Image',
        imageUrl,
      };
    },
  },
};
