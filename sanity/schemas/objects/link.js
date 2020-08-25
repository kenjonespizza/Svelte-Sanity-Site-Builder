export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Select a link type',
      type: 'array',
      of: [
        {type: 'linkInternal'},
        {type: 'linkExternal'}
      ],
      validation: Rule => Rule.length(1)
    },
    // {
    //   name: 'link',
    //   title: 'Select a link type',
    //   type: 'array',
    //   of: [
    //     {type: 'linkInternal'},
    //     {type: 'linkExternal'}
    //   ],
    //   options: {
    //     limit: 1,
    //   }
    // },
    {
      name: 'openInNewTab',
      title: 'Open link in new tab',
      type: 'boolean',
    },
  ]
}
