const sectionName = `Testimonial(s): Side By Side`

export default {
  name: 'side_by_side_testimonial',
  type: 'object',
  title: sectionName,
  fieldsets: [],
  fields: [
    {
      name: 'testimonialArray',
      title: 'Testimonials',
      type: 'array',
      of: [
        {type: 'testimonial'}
      ]
    },
  ],
  preview: {
    select: {
      testimonial: 'testimonialArray',
      disabled: 'disabled',
    },
    prepare({ disabled, testimonial }) {
      let title

      if (disabled) {
        title = '⚠️ DISABLED';
      } else if (testimonial.length === 0) {
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

