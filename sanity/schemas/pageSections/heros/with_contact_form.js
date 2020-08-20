const sectionName = `Hero: With Contact Form`

export default {
  name: 'with_contact_form',
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      fieldset: 'heading',
    },
    {
      name: 'headingType',
      title: 'Heading Type',
      type: 'string',
      description: 'Default: H2',
      options: {
        list: [
          {value: 'h1', title: 'H1'},
          {value: 'h2', title: 'H2'},
          {value: 'h3', title: 'H3'},
          {value: 'h4', title: 'H4'}
        ],
      },
      description: "This won't affect the look of the text, just the perceived importance.  Tip: Each page should only have one H1 tag.",
      fieldset: 'heading',
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
      title: "Contact Form Fields",
      name: "formFields",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Name", value: "name" },
          { title: "Email Address", value: "email" },
          { title: "Phone", value: "phone" },
          { title: "Message", value: "message" },
        ],
        layout: "radio",
        direction: "horizontal"
      }
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      disabled: 'disabled',
    },
    prepare({ heading, disabled }) {
      console.log('heading:', heading)
      return {
        title: `${disabled ? '⚠️ DISABLED' : (heading || "No Heading")}`,
        subtitle: sectionName,
      };
    },
  },
};


