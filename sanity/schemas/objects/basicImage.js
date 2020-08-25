export default {
  name: 'basicImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
        // metadata: ['exif', 'location', 'lqip', 'palette']
      },
      fields: [
        // {
        //   name: 'caption',
        //   type: 'string',
        //   title: 'Caption',
        //   options: {
        //     isHighlighted: true // <-- make this field easily accessible
        //   }
        // },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
      ]
    },
  ]
}