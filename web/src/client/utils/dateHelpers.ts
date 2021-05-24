import {parse, isDate, format} from 'date-fns'
import {BLOCK_TYPE} from 'universal/utils/constants'

export const parseDateString = function (value, originalValue) {
  if (originalValue) {
    const parsedDate = isDate(new Date(originalValue))
      ? new Date(originalValue)
      : parse(originalValue, 'yyyy-MM-dd', new Date())

    return parsedDate
  }
  return originalValue
}

export const getDisplayFormat = (isoString) => {
  if (!isoString) return isoString
  return format(new Date(format(new Date(isoString), 'yyyy-MM-dd')), 'dd/MM/yyyy')
}

export const toIsoString = (value) => {
  if (value && isDate(value)) {
    return format(new Date(value), 'yyyy-MM-dd')
  }
  return value
}

export const transformDates = (block, values = {data: []}) => {
  if (!block && values?.data) {
    return {
      ...values,
      data: values.data.map(transformDates)
    }
  }
  if (block.type !== BLOCK_TYPE.DATE) return block
  return {
    ...block,
    [BLOCK_TYPE.DATE]: {
      ...block[BLOCK_TYPE.DATE],
      ...(block[BLOCK_TYPE.DATE]?.value && {
        value: toIsoString(block[BLOCK_TYPE.DATE]?.value)
      }),
      ...(block[BLOCK_TYPE.DATE]?.placeholder && {
        placeholder: toIsoString(block[BLOCK_TYPE.DATE]?.placeholder)
      })
    }
  }
}
