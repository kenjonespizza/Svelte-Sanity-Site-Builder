// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import Documents
import page from './documents/page';
import siteSettings from './documents/siteSettings/index';
import themeSettings from './documents/siteSettings/themeSettings';
import menuSettings from './documents/siteSettings/menuSettings';

// Import Blog Documents
import author from './blog/documents/author';
import category from './blog/documents/category';
import post from './blog/documents/post';
import tag from './blog/documents/tag';
import blogSettings from './blog/documents/blogSettings';

// Import Objects
import basicImage from './objects/basicImage';
import basicVideo from './objects/basicVideo';
import button from './objects/button';
import pageInfo from './objects/pageInfo';
import titleAndDescription from './objects/titleAndDescription'
import dropdownMenu from './objects/dropdownMenu'
import cta from './objects/cta';
import figure from './objects/figure';
import headingBlock from './objects/headingBlock';
import imageNoAlt from './objects/imageNoAlt';
import link from './objects/link'
import linkInternal from './objects/linkInternal'
import linkExternal from './objects/linkExternal'
import minimalPortableText from './objects/portableText/minimalPortableText';
import portableText from './objects/portableText/portableText';
import youtube from './objects/youtube';
import socialMediaHandles from './objects/socialMediaHandles';

// Import Blog Objects
import authorReference from './blog/objects/authorReference';
import blogPageInfo from './blog/objects/blogPageInfo';
import authorPageInfo from './blog/objects/authorPageInfo';

// Import Page Sections
// import { heroSimpleCentered } from './pageSections/heros';
// Then we give our schema to the builder and provide the result to Sanity

// All the TUI components
import * as pageSections from './pageSections';
import sectionsDefaultFields from './pageSections/_sectionsDefaultFields';

const allPageSections = Object.values(pageSections).map((section) => {
  return { ...section, fields: sectionsDefaultFields.concat(section.fields) };
});

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // Documents
      page,
      siteSettings,
      themeSettings,
      menuSettings,

      // Blog Documents
      author,
      category,
      post,
      tag,
      blogSettings,

      // Objects
      basicImage,
      basicVideo,
      button,
      pageInfo,
      minimalPortableText,
      portableText,
      imageNoAlt,
      titleAndDescription,
      dropdownMenu,
      figure,
      headingBlock,
      link,
      linkInternal,
      linkExternal,
      cta,
      youtube,
      socialMediaHandles,

      // Blog Objects
      authorReference,
      blogPageInfo,
      authorPageInfo,
    ])
    .concat(allPageSections),
});
// wyL9%6Y8U&Z