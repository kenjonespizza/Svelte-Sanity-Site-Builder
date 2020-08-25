const sectionName = `Hero: With Contact Form`

export default {
  name: 'with_contact_form',
  type: 'object',
  title: sectionName,
  fieldsets: [
    {
      name: 'contactForm', 
      title: 'Contact Form',
    },
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
      name: 'showSocialMedia',
      title: 'Show Social Media',
      type: 'boolean',
      fieldset: 'contactForm',
      description: 'Default: True'
    },
    {
      title: "Form Fields",
      name: "formFields",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Email Address", value: "email" },
          { title: "Phone", value: "phone" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      description: `"Full name" & "Message" will always show.`,
      fieldset: 'contactForm',
      validation: Rule => Rule.required().min(1).error('You must choose at least one field.')
    },
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      fieldset: 'contactForm',
    },
    {
      name: 'termsPage',
      title: 'Link to Terms & Conditions page',
      type: 'linkInternal',
      fieldset: 'contactForm',
    },
  ],
  preview: {
    select: {
      heading: 'headingBlock.heading',
      disabled: 'disabled',
    },
    prepare({ heading, disabled }) {
      return {
        title: `${disabled ? '⚠️ DISABLED' : (heading || "No Heading")}`,
        subtitle: sectionName,
      };
    },
  },
};


