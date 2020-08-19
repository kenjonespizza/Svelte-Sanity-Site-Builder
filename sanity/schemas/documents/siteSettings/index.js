export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fieldsets: [],
  initialValue: {
    // Todo: Add default colors if possible
  },
  fields: [
    {
      name: 'siteName',
      type: 'string',
      title: 'Site Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'page' },
      validation: Rule => Rule.required(),
    },
  ],
};