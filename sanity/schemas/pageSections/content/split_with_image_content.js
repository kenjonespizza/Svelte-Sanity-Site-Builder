const sectionName = `Content: Split With Image`
import {blockPreview} from '../../../src/utils/helpers'

export default {
  name: 'split_with_image_content',
  title: sectionName,
  type: 'document',
  fieldsets: [
    {title: 'Image', name: 'image'}
  ],
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'portableText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'basicImage',
      fieldset: 'image'
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
      name: 'imageSide',
      title: 'Image On:',
      description: 'Default: Left',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
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