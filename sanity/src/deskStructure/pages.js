import S from '@sanity/desk-tool/structure-builder';

import { FcDocument, FcEditImage, FcGlobe, FcShare } from 'react-icons/fc';
import { RiPagesLine } from 'react-icons/ri';


// Web preview
import IframePreview from '../components/previews/iframe/IframePreview';
import SeoPreview from '../components/previews/seo/SeoPreviews';

// Web preview configuration
const remoteURL = 'https://www.netlify.com/';
const localURL = 'http://localhost:8000';
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL;

export default S.listItem()
  .title('Pages')
  .icon(RiPagesLine)
  .schemaType('page')
  .child(
    S.documentTypeList('page')
      .title('Pages')
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType('page')
          .views([
            S.view.form().icon(FcEditImage),
            S.view
              .component(IframePreview)
              .options({ previewURL })
              .title('Web Preview')
              .icon(FcGlobe),
            S.view
              .component(SeoPreview)
              .options({ previewURL })
              .icon(FcShare)
              .title('SEO Preview'),
          ])
      )
  );

// const page = S.listItem()
//   .title('Pages')
//   .icon(IoIosDocument)
//   .child(S.documentTypeList('page').title('Pages'));

// export default page;
