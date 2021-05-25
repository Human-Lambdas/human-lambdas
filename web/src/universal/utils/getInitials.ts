const getInitials = (str) => {
  if (!str || str === '') return
  const initials = str.match(/\b\w/g) || []
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
}

export default getInitials
