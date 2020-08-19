export const blockPreview = (blocks, ifEmptyString = "No title") => {
  const block = (blocks || []).find(block => block._type === 'block')
  return block ? block.children
    .filter(child => child._type === 'span')
    .map(span => span.text)
    .join('')
  : ifEmptyString
}