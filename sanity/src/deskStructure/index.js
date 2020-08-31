import S from '@sanity/desk-tool/structure-builder';

import settings from './settings';
import pages from './pages';
import blog from './blog';


// Hide document types that we already have a structure definition for
export default () => S.list().title('Content').items([settings, pages, blog]);

// deskStructure.js

// import S from '@sanity/desk-tool/structure-builder';

// import settings from './settings';
// import pages from './pages';

// export default () => S.list().title('Content').items([settings, pages]);
