import link from "./link";

export default {
  title: 'Internal Link',
  name: 'linkInternal',
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'Select page to link to',
      type: 'reference',
      weak: true,
      to: [
        {type: 'page'}
      ],
    },
  ],
  preview: {
    select: {
      page: 'link.pageInfo',
    },
    prepare({page}) {
      console.log('page:', page)
      return {
        title: page.name,
        subtitle: `/${page.slug.current}`,
      }
    }
  }
}
