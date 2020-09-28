export default {
  name: 'footerSettings',
  type: 'document',
  title: 'Menus',
  initialValue: {
    showSocialMediaIcons: true,
    copyright: '%year% YOUR_COMPANY_NAME',
  },
  fields: [
    {
      name: 'footerNavigation',
      title: 'Footer Navigation',
      type: 'array',
      of: [
        {type: 'link'},
      ],
      options: {
        editModal: 'popover',
      },
    },
    {
      name: 'showSocialMediaIcons',
      title: 'Show Social Media Icons',
      type: 'boolean',
      default: "Default: Yes"
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      description: 'Use %year% to use the current year. ©',
    },
    {
      name: 'smallLink',
      title: 'Small Links',
      type: 'array',
      description: 'Perfect for Privacy Policy, Terms, Legal, etc',
      of: [
        {type: 'link'},
      ],
      options: {
        editModal: 'popover',
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings: Footer",
      }
    }
  }
};
