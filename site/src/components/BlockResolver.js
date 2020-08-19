import SplitImageTextHero from './Hero/SplitImageTextHero.svelte'
import SimpleCenteredHero from './Hero/SimpleCenteredHero.svelte'
import WithAngledImageOnRightHero from './Hero/WithAngledImageOnRightHero.svelte'
import BlockNotFound from './BlockNotFound.svelte'

const Components = {
  split_image_text_hero: SplitImageTextHero,
  simple_centered_hero: SimpleCenteredHero,
  with_angled_image_on_right_hero: WithAngledImageOnRightHero,
}

// TODO: Automate ^... Maybe using globbing?

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return BlockNotFound
}