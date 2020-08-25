export default {
  name: 'basicVideo',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'video',
      type: 'file',
      options: {
        accept: 'video/*', // <-- Defaults to false
        storeOriginalFilename: true
      },
      fields: [
        //
      ]
    },
  ]
}