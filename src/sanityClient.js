import sanityClient from '@sanity/client'
import { api } from '../sanity/sanity.json'
const { projectId, dataset } = api

const client = sanityClient({
  projectId,
  dataset,
  useCdn: true
})

export default client
