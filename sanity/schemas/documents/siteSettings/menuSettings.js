import React from 'react';
import { FcLike, FcSettings  } from "react-icons/fc";

export default {
  name: 'menuSettings',
  type: 'document',
  title: 'Menus',
  fieldsets: [
    {
      name: 'header',
      title: 'Header Menu',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: 'footer',
      title: 'Footer Menu',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  initialValue: {
    // Todo: Add default colors if possible
    logoHeight: 40,
  },
  fields: [
    {
      name: 'headerNavigation',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {type: 'link'},
        {type: 'button'},
        {type: 'dropdownMenu'},
      ],
      options: {
        editModal: 'popover',
      },
      fieldset: 'header',
    },
    {
      name: 'logoHeight',
      title: 'Height of Logo',
      type: 'number',
      validation: Rule => Rule.integer(),
      description: 'In pixels. Integers only. Default is 40',
      fieldset: 'header',
    },
    
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
      fieldset: 'footer',
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings: Menus",
      }
    }
  }
};
