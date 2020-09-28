import { RiImageAddLine } from 'react-icons/ri';
import ImagePreview from '../../src/components/previews/ImagePreview';

export default {
  name: 'basicImageWithCaption',
  title: 'Image',
  type: 'image',
  icon: RiImageAddLine,
  options: {
    hotspot: true, // <-- Defaults to false
    // metadata: ['exif', 'location', 'lqip', 'palette']
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      name: 'roundedCorners',
      title: 'Round Corners?',
      type: 'boolean',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      name: 'shadow',
      title: 'Add Shadow?',
      type: 'boolean',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
      caption: 'caption',
      roundedCorners: 'roundedCorners'
    },
    prepare(selection) {
      const { imageUrl, alt, caption, roundedCorners } = selection;
      return {
        title: caption || alt || 'Image',
        imageUrl: imageUrl || '',
        alt,
        caption,
        roundedCorners
      };
    },
    component: ImagePreview,
  }
}