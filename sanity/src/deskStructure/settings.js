import S from '@sanity/desk-tool/structure-builder';

import { FcSettings, FcLike, FcMenu } from "react-icons/fc";

const settings = S.listItem()
.title('Settings')
.icon(FcSettings)
.child(
  // List out all categories
  S.list()
    .title('More Settings')
    .items([
      S.listItem()
        .title('Global Settings')
        .icon(FcSettings)
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Look & Feel')
        .icon(FcLike)
        .child(
          S.editor().schemaType('themeSettings').documentId('themeSettings')
        ),
      S.listItem()
        .title('Menu')
        .icon(FcMenu)
        .child(
          S.editor().schemaType('menuSettings').documentId('menuSettings')
        )
    ])
);

export default settings;
