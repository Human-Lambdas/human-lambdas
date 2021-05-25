const isEmptyArray = (value: any) => {
  if (value === null || value === undefined) return true
  if (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function') {
    return !value.length
  }
  return false
}

export default isEmptyArray
