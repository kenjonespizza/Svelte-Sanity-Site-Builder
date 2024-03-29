export default {
  name: 'testimonial',
  title: 'testimonial',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'minimalPortableText',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'imageNoAlt',
    },
    {
      name: 'authorRol',
      title: 'Author Role',
      type: 'string',
    },
    {
      name: 'authorCompany',
      title: 'Author Company',
      type: 'string',
    },
    // {
    //   name: 'companyLogoOnLight',
    //   title: 'Company Logo On Light Theme',
    //   type: 'image',
    // },
    // {
    //   name: 'companyLogoOnDark',
    //   title: 'Company Logo On Dark Theme',
    //   type: 'image',
    // },
  ]
}