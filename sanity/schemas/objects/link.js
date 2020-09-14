export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fieldsets: [  
    {
      title: 'Link properties', 
      name: 'linkProperties', 
      options: {
        collapsable: true,
        collapsed: true,
      }
    }
  ],
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required()
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
      fieldset: 'linkProperties',
    },
    {
      name: 'title',
      title: 'Title Text',
      type: 'string',
      description: "Optional: This text shows when the link is hovered.",
      fieldset: 'linkProperties',
    },
  ],
  preview: {
    select: {
      text: 'text',
      link: 'link'
    },

    prepare({text, link}) {
      console.log('link:', link)
      let subtitle

      if ( link && link.length && link[0]._type === 'linkInternal' ) {
        subtitle = 'Internal Link'
      } else if ( link && link.length && link[0]._type === 'linkExternal' ) {
        subtitle = 'External Link'
      }
      
      return {
        title: text,
        subtitle
      }
    }
  }
}
