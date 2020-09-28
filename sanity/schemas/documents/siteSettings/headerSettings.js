import React from 'react';
import { FcLike, FcSettings  } from "react-icons/fc";

export default {
  name: 'headerSettings',
  type: 'document',
  title: 'Menus',
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
    },
    {
      name: 'logoHeight',
      title: 'Height of Logo',
      type: 'number',
      validation: Rule => Rule.integer(),
      description: 'In pixels. Integers only. Default is 40',
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings: Header",
      }
    }
  }
};
