import S from '@sanity/desk-tool/structure-builder';

import settings from './settings';
import pages from './pages';


// Hide document types that we already have a structure definition for
export default () => S.list().title('Content').items([settings, pages]);

// deskStructure.js

// import S from '@sanity/desk-tool/structure-builder';

// import settings from './settings';
// import pages from './pages';

// export default () => S.list().title('Content').items([settings, pages]);
