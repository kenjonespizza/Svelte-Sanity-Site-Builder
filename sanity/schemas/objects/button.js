export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'link',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Default: Primary',
      options: {
        list: [
          {
            title: 'Primary',
            value: 'primary',
          },
          {
            title: 'Basic',
            value: 'basic',
          },
          {
            title: 'Faint',
            value: 'faint',
          },
        ],
        layout: 'radio',
        direction: 'horizontal',
      }
    },
  ],
  preview: {
    select: {
      text: 'link.text',
      color: 'color',
    },
    prepare({color, text}) {
      return {
        title: text || 'Button',
        subtitle: `${color ? `${color.charAt(0).toUpperCase() + color.slice(1)}` : "Primary"} Button`,
      }
    }
  }
}