// Heros
import SplitImageTextHero from './Hero/SplitImageTextHero.svelte'
import SimpleCenteredHero from './Hero/SimpleCenteredHero.svelte'
import WithAngledImageOnRightHero from './Hero/WithAngledImageOnRightHero.svelte'
import WithFullWidthImageHero from './Hero/WithFullWidthImageHero.svelte'
import WithContactFormHero from './Hero/WithContactFormHero.svelte'
import withVideoPopoverHero from './Hero/withVideoPopoverHero.svelte'
// CTAs
import SimpleCenteredCta from './Cta/SimpleCenteredCta.svelte'
import SimpleJustifiedCta from './Cta/SimpleJustifiedCta.svelte'
import SimpleStackedCta from './Cta/SimpleStackedCta.svelte'
import SplitWithImageCta from './Cta/SplitWithImageCta.svelte'
// Testimonials
import SideBySideTestimonial from './Testimonial/SideBySideTestimonial.svelte'
import SimpleCenteredTestimonial from './Testimonial/SimpleCenteredTestimonial.svelte'

import BlockNotFound from './BlockNotFound.svelte'

const Components = {
  // Heros
  split_image_text_hero: SplitImageTextHero,
  simple_centered_hero: SimpleCenteredHero,
  with_angled_image_on_right_hero: WithAngledImageOnRightHero,
  with_full_width_image_hero: WithFullWidthImageHero,
  with_contact_form_hero: WithContactFormHero,
  with_video_popover_hero: withVideoPopoverHero,
  // CTAs
  simple_centered_cta: SimpleCenteredCta,
  simple_justified_cta: SimpleJustifiedCta,
  simple_stacked_cta: SimpleStackedCta,
  split_with_image_cta: SplitWithImageCta,
  // Testimonials
  side_by_side_testimonial: SideBySideTestimonial,
  simple_centered_testimonial: SimpleCenteredTestimonial,
}

// TODO: Automate ^... Maybe using globbing?

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return BlockNotFound
}