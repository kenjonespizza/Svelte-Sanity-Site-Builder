const sectionName = `Testimonial(s): Side By Side`

export default {
  name: 'side_by_side_testimonial',
  type: 'object',
  title: sectionName,
  fieldsets: [],
  fields: [
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {type: 'testimonial'}
      ],
      validation: Rule => Rule.required().min(2).error('At least 2 items are required.'),
    },
    {
      name: 'backgroundColor',
      title: 'Background Color?',
      type: 'string',
      description: 'Default: Normal',
      options: {
        list: [
          {value: 'normal', title: "Normal"},
          {value: 'inverted', title: "Inverted"},
          {value: 'primary', title: "Primary Color"},
        ],
        layout: 'radio',
        direction: 'horizontal',
      }
    },
  ],
  preview: {
    select: {
      testimonial: 'testimonials',
      disabled: 'disabled',
    },
    prepare({ disabled, testimonial }) {
      let title

      if (disabled) {
        title = '⚠️ DISABLED';
      } else if (!testimonial || testimonial.length === 0) {
        title = `No Testimonial`
      } else if (testimonial.length === 1) {
        title = `1 Testimonial`
      } else {
        title = `${testimonial.length} Testimonials`
      }
      return {
        // The shorter... but more complicated way to do this...
        // title: `${disabled ? '⚠️ DISABLED' : testimonial.length > 0 ? `${testimonial.length > 0 && testimonial.length} Testimonial${testimonial.length > 1 ? 's' : ''}` : ' No Testimonials'}`,
        title,
        subtitle: sectionName,
      };
    },
  },
};

