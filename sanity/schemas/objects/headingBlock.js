export default {
  name: 'headingBlock',
  title: 'Heading & Sub-Heading',
  type: 'object',
  fields: [
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      description: 'Optional small text above heading'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'headingType',
      title: 'Heading Type/Tag',
      type: 'string',
      options: {
        list: [
          {value: 'h1', title: 'H1'},
          {value: 'h2', title: 'H2'},
          {value: 'h3', title: 'H3'},
          {value: 'h4', title: 'H4'},
          {value: 'span', title: 'Text Span'}
        ],
      },
      description: "This won't affect the look of the text, just the perceived importance.  Tip: Each page should only have one H1 tag.",
    },
  ]
}