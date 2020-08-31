import S from '@sanity/desk-tool/structure-builder';

import { FcSettings, FcLike, FcMenu } from "react-icons/fc";
import { RiSettingsLine, RiGlobeLine, RiPaletteLine, RiMenu2Line } from "react-icons/ri";

const settings = S.listItem()
.title('Settings')
.icon(RiSettingsLine)
.child(
  // List out all categories
  S.list()
    .title('More Settings')
    .items([
      S.listItem()
        .title('Global Settings')
        .icon(RiGlobeLine)
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Look & Feel')
        .icon(RiPaletteLine)
        .child(
          S.editor().schemaType('themeSettings').documentId('themeSettings')
        ),
      S.listItem()
        .title('Menu')
        .icon(RiMenu2Line)
        .child(
          S.editor().schemaType('menuSettings').documentId('menuSettings')
        )
    ])
);

export default settings;
