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
      title: 'Alt text',
      options: {
        isHighlighted: true,
      },
    },
    // {
    //   name: 'link',
    //   title: 'Link',
    //   type: 'linkForportableText',
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
