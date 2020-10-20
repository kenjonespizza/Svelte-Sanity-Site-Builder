const sectionName = `Content: 3 Columns`
import {blockPreview} from '../../../src/utils/helpers'

export default {
  name: 'three_column_content',
  title: sectionName,
  type: 'document',
  fields: [
    {
      name: 'headingBlock',
      title: 'Heading & Sub-Heading',
      type: 'headingBlock',
    },
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
      name: 'column3',
      title: 'Column 3',
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
  preview: {
    select: {
      column1: 'column1',
      disabled: 'disabled',
    },
    prepare({column1, disabled}) {
      return {
        title: `${disabled ? '⚠️ DISABLED' : blockPreview(column1, "No Content")}`,
        subtitle: sectionName,
      }
    }
  }
}