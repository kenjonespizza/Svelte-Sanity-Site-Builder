export default {
  name: 'themeSettings',
  type: 'document',
  title: 'Look & Feel',
  fieldsets: [
    {
      name: 'colorsLight',
      title: 'Colors on light theme',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: 'colorsDark',
      title: 'Colors on dark theme',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  initialValue: {
    // Todo: Add default colors if possible
    isThemeToggleable: true,
    defaultTheme: 'light'

  },
  fields: [
    {
      name: 'colorPrimaryLight',
      title: 'Primary Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      fieldset: 'colorsLight',
    },
    {
      name: 'textOnLight',
      title: 'Color of text when on top of the primary color',
      type: 'string',
      options: {
        list: [
          {title: 'Use which ever has the highest contrast', value: 'default'},
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'},
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      fieldset: 'colorsLight',
    },
    // {
    //   name: 'colorSecondaryLight',
    //   title: 'Secondary Color',
    //   type: 'color',
    //   options: {
    //     disableAlpha: true,
    //   },
    //   fieldset: 'colorsLight',
    // },
    {
      name: 'colorPrimaryDark',
      title: 'Primary Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      fieldset: 'colorsDark',
    },
    {
      name: 'textOnDark',
      title: 'Color of text when on top of the primary color',
      type: 'string',
      options: {
        list: [
          {title: 'Use which ever has the highest contrast', value: 'default'},
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'},
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      fieldset: 'colorsDark',
    },
    // {
    //   name: 'colorSecondaryDark',
    //   title: 'Secondary Color',
    //   type: 'color',
    //   options: {
    //     disableAlpha: true,
    //   },
    //   fieldset: 'colorsDark',
    // },
    {
      name: 'logoOnLight',
      title: 'Logo on light',
      type: 'figure',
    },
    {
      name: 'logoOnDark',
      title: 'Logo on dark',
      type: 'figure',
    },
    {
      name: 'isThemeToggleable',
      title: 'Allow light/dark mode to be toggled',
      type: 'boolean',
      description: 'Default: True'
    },
    {
      name: 'defaultTheme',
      title: 'Default Theme',
      type: 'string',
      options: {
        list: [
          {title: "Light", value: "light"},
          {title: "Dark", value: "dark"},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      description: "Default Light"
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings: Look & Feel",
      }
    }
  }
};
