const sectionName = `Hero: With Video Pop-Over`

export default {
  name: 'with_video_popover',
  type: 'object',
  title: sectionName,
  fieldsets: [
    {
      name: 'heading', 
      title: 'Heading',
    }
  ],
  fields: [
    {
      name: 'headingBlock',
      title: 'Heading & Sub-Heading',
      type: 'headingBlock',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'minimalPortableText',
    },
    
    {
      name: 'buttons',
      title: 'Button(s)',
      type: 'array',
      of: [
        {type: 'button'}
      ]
    },
    {
      name: 'videoURL',
      title: 'Video',
      type: 'youtube',
    },
  ],
  preview: {
    select: {
      heading: 'headingBlock.heading',
      disabled: 'disabled',
      image: 'image.image',
    },
    prepare({ heading, disabled, image }) {
      return {
        title: `${disabled ? '⚠️ DISABLED' : (heading || "No Heading")}`,
        subtitle: sectionName,
        media: image,
      };
    },
  },
};

