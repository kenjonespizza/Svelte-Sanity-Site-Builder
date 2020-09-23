import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      name: 'pageInfo',
      title: 'Page Title and Slug',
      type: 'pageInfo',
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        // Pricing tables
        // { type: 'single_price_with_details_pricing' },
        // { type: 'three_tiers_with_emphasized_tier_pricing' },
        // { type: 'two_tiers_with_extra_tier_pricing' },
        // Heros
        { type: 'simple_centered_hero' },
        { type: 'with_angled_image_on_right_hero' },
        { type: 'with_contact_form_hero' },
        { type: 'split_image_text_hero' },
        { type: 'with_full_width_image_hero' },
        { type: 'with_video_popover_hero' },
        // Cta
        { type: 'simple_centered_cta' },
        { type: 'simple_justified_cta' },
        { type: 'simple_stacked_cta' },
        { type: 'split_with_image_cta' },
        // Content
        { type: 'basic_content' },
        { type: 'split_with_image_content' },
        // Stats
        // { type: 'split_with_image_stats' },
        // { type: 'simple_on_brand_stats' },
        // { type: 'simple_in_card_stats' },
        // Newsletter
        // { type: 'simple_stacked_newsletter' },
        // { type: 'with_paragraph_on_brand_card_newsletter' },
        // { type: 'with_paragraph_on_dark_newsletter' },
        // FAQ
        // { type: 'centered_accordion_faq' },
        // { type: 'side_by_side_faq' },
        // { type: 'two_columns_faq' },
        // Feature
        // { type: 'simple_three_column_feature' },
        // { type: 'alternative_side_by_side_with_images_feature' },
        // { type: 'centered_2x2_grid_feature' },
        // Testimonial
        { type: 'side_by_side_testimonial' },
        { type: 'simple_centered_testimonial' },
        { type: 'with_large_avatar_testimonial' },
        // Contact
        // { type: 'centered_contact' },
        // { type: 'side_by_side_grid_contact' },
        // { type: 'simple_two_column_contact' },
        // { type: 'split_with_image_contact' },
        // Blog
        // { type: 'two_column_with_sign_up_blog' },
        // { type: 'three_column_with_badges_blog' },
        // { type: 'three_column_cards_blog' },
        // Logo
        // { type: 'off_white_grid_logo' },
        // { type: 'split_with_grid_on_right_logo' },
      ],
      options: {
        editModal: 'dialog',
      },
    },
  ],
  preview: {
    select: {
      title: 'pageInfo.name',
      subtitle: 'pageInfo.slug.current',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `/${subtitle}`,
      };
    },
  },
};
