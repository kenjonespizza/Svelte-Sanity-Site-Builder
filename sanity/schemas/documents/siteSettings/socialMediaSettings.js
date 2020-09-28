import React from 'react';
import { FcLike, FcSettings  } from "react-icons/fc";

export default {
  name: 'socialMediaSettings',
  type: 'document',
  title: 'Social Media Handles & Settings',
  fields: [
    {
      name: 'socialMediaHandles',
      title: 'Social Media Handles',
      type: 'socialMediaHandles',
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Social Media Handles & Settings",
      }
    }
  }
};
