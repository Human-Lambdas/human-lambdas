const getFirstLetter = (str) => {
  let firstLetter = str

  if (str && str.length > 1) {
    firstLetter = str.charAt(0).toUpperCase()
  }

  return firstLetter
}

export default getFirstLetter
