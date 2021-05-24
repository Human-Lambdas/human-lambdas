const cutOffString = (string, length) =>
  string.length > length ? `${string.substring(0, length)}...` : string
export default cutOffString
