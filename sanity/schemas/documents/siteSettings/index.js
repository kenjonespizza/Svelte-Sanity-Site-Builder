import {internalPageTypes} from '../../utils/variables'

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
      name: 'homepage',
      type: 'reference',
      description: 'Choose page to be the homepage',
      to: internalPageTypes,
      validation: Rule => Rule.required(),
    },
  ],
};