// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import Documents
import headerSettings from './documents/siteSettings/headerSettings';
import footerSettings from './documents/siteSettings/footerSettings';
import page from './documents/page';
import siteSettings from './documents/siteSettings/index';
import socialMediaSettings from './documents/siteSettings/socialMediaSettings';
import themeSettings from './documents/siteSettings/themeSettings';

// Import Blog Documents
import author from './blog/documents/author';
import category from './blog/documents/category';
import post from './blog/documents/post';
import blog from './blog/documents/blog';

// Import Objects
import basicImage from './objects/basicImage';
import basicImageWithCaption from './objects/basicImageWithCaption';
import basicVideo from './objects/basicVideo';
import button from './objects/button';
import buttons from './objects/buttons';
import cta from './objects/cta';
import dropdownMenu from './objects/dropdownMenu'
import figure from './objects/figure';
import headingBlock from './objects/headingBlock';
import imageNoAlt from './objects/imageNoAlt';
import link from './objects/link'
import linkPortableText from './objects/linkPortableText'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import minimalPortableText from './objects/portableText/minimalPortableText';
import titleAndDescription from './objects/titleAndDescription'
import testimonial from './pageSections/testimonial/testimonial'
import pageInfo from './objects/pageInfo';
import portableText from './objects/portableText/portableText';
import youtube from './objects/youtube';
import socialMediaHandles from './objects/socialMediaHandles';

// Import Blog Objects
import authorPageInfo from './blog/objects/authorPageInfo';
import authorReference from './blog/objects/authorReference';
import blogPageInfo from './blog/objects/blogPageInfo';
import postPageInfo from './blog/objects/postPageInfo';

// Import Page Sections
// import { heroSimpleCentered } from './pageSections/heros';
// Then we give our schema to the builder and provide the result to Sanity

// All the TUI components
import * as pageSections from './pageSections';
import sectionsDefaultFields from './pageSections/_sectionsDefaultFields';

const allPageSections = Object.values(pageSections).map((section) => {
  return { ...section, fields: section.fields.concat(sectionsDefaultFields) };
});

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // Documents
      headerSettings,
      footerSettings,
      page,
      siteSettings,
      socialMediaSettings,
      themeSettings,

      // Blog Documents
      author,
      category,
      post,
      blog,

      // Objects
      basicImage,
      basicImageWithCaption,
      basicVideo,
      button,
      buttons,
      imageNoAlt,
      cta,
      dropdownMenu,
      figure,
      headingBlock,
      link,
      linkPortableText,
      linkInternal,
      linkExternal,
      minimalPortableText,
      pageInfo,
      portableText,
      titleAndDescription,
      testimonial,
      youtube,
      socialMediaHandles,

      // Blog Objects
      authorPageInfo,
      authorReference,
      blogPageInfo,
      postPageInfo,
    ])
    .concat(allPageSections),
});
// wyL9%6Y8U&Z