import S from '@sanity/desk-tool/structure-builder';
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoPerson as AuthorIcon,
} from 'react-icons/go';
import {
  FaTag as TagIcon,
  FaArchive as AllIcon,
  FaFolderOpen as FolderIcon,
} from 'react-icons/fa';
import { RiDraftLine ,RiFileCopy2Line, RiFolder5Line, RiSettingsLine, RiGroupLine} from 'react-icons/ri';

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
  TagIcon,
  FolderIcon,
};

const blog = S.listItem()
  .title('Blog')
  .icon(RiDraftLine)
  .child(
    S.list()
      .title('Blog')
      .items([
        S.documentTypeListItem('post').title('All posts').icon(RiFileCopy2Line),
        S.listItem()
          .title('Published posts')
          .schemaType('post')
          .icon(RiDraftLine)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter(
                '_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))'
              )
              .child(
                (documentId) =>
                  S.document().documentId(documentId).schemaType('post')
                // .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.listItem()
          .title('Posts by category')
          .icon(RiFolder5Line)
          .child(
            // List out all categories
            S.documentTypeList('category')
              .title('Posts by category')
              .child((catId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('post')
                  .title('Posts')
                  .filter('_type == "post" && $catId in categories[]._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.listItem()
          .title('Settings & Info')
          .icon(RiSettingsLine)
          .child(
            S.editor()
              .title('Blog: Settings & info')
              .schemaType('blog')
              .documentId('blog')
          ),
        S.documentTypeListItem('author').title('Authors').icon(RiGroupLine),
        S.documentTypeListItem('category').title('Categories').icon(RiFolder5Line),
      ])
  );

export default blog;
