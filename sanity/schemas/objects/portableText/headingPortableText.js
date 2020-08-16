export default {
  name: 'headingPortableText',
  type: 'array',
  title: 'Description',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'H1', value: 'h1' }, // I'd like to make this the default
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' }
      ],
      lists: [],
      marks: {
        decorators: [],
        annotations: [],
      }
    }
  ]
}
