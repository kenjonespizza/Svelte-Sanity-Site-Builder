const sectionName = `Content: Basic`
import {blockPreview} from '../../../src/utils/helpers'

export default {
  name: 'basic_content',
  title: sectionName,
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'portableText',
    },
    {
      name: 'textSize',
      title: 'Text Size',
      type: 'string',
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
      name: 'textBoxWidth',
      title: 'Text Box Width',
      type: 'string',
      options: {
        list: [
          {
          title: "Default (Narrower for increased readability)",
          value: 'default'
          },
          {
            title: "Full Width",
            value: 'fullWidth'
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
      content: 'content',
      disabled: 'disabled',
    },
    prepare({ content, disabled }) {
      return {
        title: `${disabled ? '⚠️ DISABLED' : blockPreview(content, "No Content")}`,
        subtitle: sectionName,
      };
    },
  },
}