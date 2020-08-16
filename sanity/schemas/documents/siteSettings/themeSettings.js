import React from 'react';

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
    // {
    //   name: 'colorSecondaryDark',
    //   title: 'Secondary Color',
    //   type: 'color',
    //   options: {
    //     disableAlpha: true,
    //   },
    //   fieldset: 'colorsDark',
    // },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings: Look & Feel",
      }
    }
  }
};
