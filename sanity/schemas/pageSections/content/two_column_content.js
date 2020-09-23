const sectionName = `Content: 2 Columns`
import {blockPreview} from '../../../src/utils/helpers'

export default {
  name: 'two_column_content',
  title: sectionName,
  type: 'document',
  fields: [
    {
      name: 'column1',
      title: 'Column 1',
      type: 'portableText',
    },
    {
      name: 'column2',
      title: 'Column 2',
      type: 'portableText',
    },
    {
      name: 'textSize',
      title: 'Text Size',
      type: 'string',
      description: 'Default: Responsive',
      options: {
        list: [
          {
            title: "Responsive",
            value: 'responsive'
          },
          {
            title: "Small",
            value: 'sm'
          },
          {
            title: "Medium",
            value: 'md'
          },
          {
            title: "Large",
            value: 'lg'
          },
          {
            title: "XL",
            value: 'xl'
          },
          {
            title: "2 XL",
            value: '2xl'
          },
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {
          title: "Default",
          value: 'default'
          },
          {
            title: "Faded",
            value: 'faded'
          },
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
  ],
  // preview: {
  //   select: {
  //     column1: 'column1',
  //     column2: 'column2',
  //   },
  //   prepare: {
  //     return: {
  //       title: '',
  //       subtitle: sectionName,
  //     }
  //   }
  // }
}