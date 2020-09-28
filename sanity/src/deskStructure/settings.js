import S from '@sanity/desk-tool/structure-builder';

import { RiSettingsLine, RiGlobeLine, RiPaletteLine, RiMenu2Line, RiThumbUpLine, RiLayoutTopLine, RiLayoutBottomLine } from "react-icons/ri";

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
        .title('Header')
        .icon(RiLayoutTopLine)
        .child(
          S.editor().schemaType('headerSettings').documentId('headerSettings')
        ),
      S.listItem()
        .title('Footer')
        .icon(RiLayoutBottomLine)
        .child(
          S.editor().schemaType('footerSettings').documentId('footerSettings')
        ),
      S.listItem()
        .title('Social Media')
        .icon(RiThumbUpLine)
        .child(
          S.editor().schemaType('socialMediaSettings').documentId('socialMediaSettings')
        )
    ])
);

export default settings;
