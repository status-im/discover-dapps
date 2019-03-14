const humanise = value =>
  value
    .split('_')
    .map(word => `${word[0]}${word.slice(1).toLowerCase()}`)
    .join(' ')

export default humanise
