export default {
  name: 'with_sign_up_and_media_content_hero',
  type: 'object',
  title: 'With sign up and media content - Hero',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `With sign up and media content - Hero: ${
          disabled ? 'DISABLED' : title
        }`,
      };
    },
  },
};
