const formatCommas = (number) =>
  ('' + number)
    .split('')
    .reverse()
    .join('')
    .replace(/(...)/g, '$1,')
    .split('')
    .reverse()
    .join('')
    .replace(/^,/, '')

export default formatCommas
