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
        {type: 'page'},
        {type: 'post'},
        {type: 'author'},
        {type: 'category'},
      ],
    },
  ],
  preview: {
    select: {
      page: 'link.pageInfo',
    },
    prepare({page}) {
      return {
        title: page.name,
        subtitle: `/${page.slug.current}`,
      }
    }
  }
}
