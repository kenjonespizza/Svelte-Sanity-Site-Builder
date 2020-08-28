export default {
  name: 'imageNoAlt',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
    storeOriginalFilename: true,
  },
  fields: [],
  preview: {
    select: {
      imageUrl: 'asset.url',
    },
    prepare(selection) {
      const { imageUrl } = selection;
      return {
        title: 'Image',
        imageUrl,
      };
    },
  },
};
