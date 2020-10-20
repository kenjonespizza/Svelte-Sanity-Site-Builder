export default {
  name: 'buttons',
  title: 'Button(s)',
  type: 'object',
  fields: [
    {
      name: 'buttons',
      title: 'Button(s)',
      type: 'array',
      of: [
        {type: 'button'}
      ]
    },
  ],
  preview: {
    select: {
      buttons: 'buttons',
    },
    prepare({buttons}) {
      const numOfbuttons = buttons?.length > 0 ? buttons.length : 0
      return {
        title: numOfbuttons === 1 ? 'Button' : `${numOfbuttons} Buttons`,
      }
    }
  }
}