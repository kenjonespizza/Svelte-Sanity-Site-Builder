import SplitImageTextHero from './Hero/SplitImageTextHero.svelte'
import BlockNotFound from './BlockNotFound.svelte'

const Components = {
  split_image_text_hero: SplitImageTextHero,
}

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return BlockNotFound
}