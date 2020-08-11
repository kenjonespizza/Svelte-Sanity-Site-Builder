export default {
  name: 'dropdownMenu',
  title: 'Dropdown Menu',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'pages',
      title: 'Page(s)',
      type: 'array',
      of: [{ type: 'link' }],
      options: {
        editModal: 'popover',
      },
    },
  ],
  preview: {
    select: {
      name: 'title',
      pages: 'pages',
    },
    prepare({pages, name}) {
      console.log('pages:', pages)
      const numOfPages = pages?.length > 0 ? pages.length : 0
      return {
        title: `${name ? `${name} - Dropdown` : `Dropdown`}`,
        subtitle: numOfPages === 1 ? '1 Page' : `${numOfPages} Pages`,
      }
    }
  }
}