// Heros
import SplitImageTextHero from "./Hero/SplitImageTextHero.svelte";
import SimpleCenteredHero from "./Hero/SimpleCenteredHero.svelte";
import WithAngledImageOnRightHero from "./Hero/WithAngledImageOnRightHero.svelte";
import WithFullWidthImageHero from "./Hero/WithFullWidthImageHero.svelte";
import WithContactFormHero from "./Hero/WithContactFormHero.svelte";
import WithVideoPopoverHero from "./Hero/WithVideoPopoverHero.svelte";
// CTAs
import SimpleCenteredCta from "./Cta/SimpleCenteredCta.svelte";
import SimpleJustifiedCta from "./Cta/SimpleJustifiedCta.svelte";
import SimpleStackedCta from "./Cta/SimpleStackedCta.svelte";
import SplitWithImageCta from "./Cta/SplitWithImageCta.svelte";
// Testimonials
import SideBySideTestimonial from "./Testimonial/SideBySideTestimonial.svelte";
import SimpleCenteredTestimonial from "./Testimonial/SimpleCenteredTestimonial.svelte";
import WithLargeAvatarTestimonial from "./Testimonial/WithLargeAvatarTestimonial.svelte";
// Content
import BasicContent from "./Content/BasicContent.svelte";
import SplitWithImageContent from "./Content/SplitWithImageContent.svelte";
import SplitWithFullHeightImageContent from "./Content/SplitWithFullHeightImageContent.svelte";
import TwoColumnContent from "./Content/TwoColumnContent.svelte";
import ThreeColumnContent from "./Content/ThreeColumnContent.svelte";
// Icons
import Dribbble from "./Icon/Dribbble.svelte";
import LinkedIn from "./Icon/LinkedIn.svelte";
import Twitter from "./Icon/Twitter.svelte";
import Youtube from "./Icon/Youtube.svelte";
import Instagram from "./Icon/Instagram.svelte";
import Facebook from "./Icon/Facebook.svelte";
import Pinterest from "./Icon/Pinterest.svelte";
import GitHub from "./Icon/GitHub.svelte";
import Spotify from "./Icon/Spotify.svelte";

import BlockNotFound from "./BlockNotFound.svelte";

const Components = {
	// Heros
	split_image_text_hero: SplitImageTextHero,
	simple_centered_hero: SimpleCenteredHero,
	with_angled_image_on_right_hero: WithAngledImageOnRightHero,
	with_full_width_image_hero: WithFullWidthImageHero,
	with_contact_form_hero: WithContactFormHero,
	with_video_popover_hero: WithVideoPopoverHero,
	// CTAs
	simple_centered_cta: SimpleCenteredCta,
	simple_justified_cta: SimpleJustifiedCta,
	simple_stacked_cta: SimpleStackedCta,
	split_with_image_cta: SplitWithImageCta,
	// Testimonials
	side_by_side_testimonial: SideBySideTestimonial,
	simple_centered_testimonial: SimpleCenteredTestimonial,
	with_large_avatar_testimonial: WithLargeAvatarTestimonial,
	// Content
	basic_content: BasicContent,
	split_with_image_content: SplitWithImageContent,
	split_with_full_height_image_content: SplitWithFullHeightImageContent,
	two_column_content: TwoColumnContent,
	three_column_content: ThreeColumnContent,
	// Icons
	dribbble: Dribbble,
	linkedIn: LinkedIn,
	twitter: Twitter,
	youtube: Youtube,
	instagram: Instagram,
	facebook: Facebook,
	pinterest: Pinterest,
	github: GitHub,
	spotify: Spotify,
};

// TODO: Automate ^... Maybe using globbing?

export default (component) => {
	// component does exist
	if (typeof Components[component] !== "undefined") {
		return Components[component];
	}

	return BlockNotFound;
};
