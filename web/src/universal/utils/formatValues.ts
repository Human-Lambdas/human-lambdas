import {BLOCK_TYPE} from 'universal/utils/constants'

const formatValues = (values) => {
  let fields

  if (Array.isArray(values.data)) {
    fields = values.data
  } else if (Array.isArray(values)) {
    fields = values
  } else {
    return values
  }

  fields.filter((val) => {
    if (val[BLOCK_TYPE.NAMED_ENTITY_RECOGNITION] !== undefined) {
      val[BLOCK_TYPE.NAMED_ENTITY_RECOGNITION].entities?.filter((entity) => {
        delete entity.color
        delete entity.text
      })
    }
    if (val[BLOCK_TYPE.BOUNDING_BOXES] !== undefined) {
      if (Array.isArray(val[BLOCK_TYPE.BOUNDING_BOXES].value.objects)) {
        val[BLOCK_TYPE.BOUNDING_BOXES].value.objects.filter((entity) => {
          delete entity.color
        })
      }
      if (val[BLOCK_TYPE.BOUNDING_BOXES].value.image === '') {
        val[BLOCK_TYPE.BOUNDING_BOXES].value.image = null
      }
    }
    return val
  })
  return values
}

export default formatValues
