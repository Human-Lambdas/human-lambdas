import {Layout} from 'react-grid-layout'
import {BLOCK_TYPE} from 'universal/utils/constants'

const getBlockDims = (type: string) => {
  let layout: Layout = {}

  switch (type) {
    case BLOCK_TYPE.AUDIO:
      layout = {
        minW: 5,
        minH: 2,
        w: 5,
        h: 2
      }
      break
    case BLOCK_TYPE.BINARY:
      layout = {
        minW: 4,
        minH: 3,
        w: 4,
        h: 4
      }
      break
    case BLOCK_TYPE.IMAGE:
      layout = {
        minW: 4,
        minH: 3,
        w: 4,
        h: 4
      }
      break
    case BLOCK_TYPE.NUMBER:
      layout = {
        minW: 4,
        minH: 2,
        w: 5,
        h: 2
      }
      break
    case BLOCK_TYPE.DATE:
      layout = {
        minW: 4,
        minH: 2,
        w: 5,
        h: 2
      }
      break
    case BLOCK_TYPE.SINGLE_SELECTION:
      layout = {
        minW: 4,
        minH: 3,
        w: 5,
        h: 4
      }
      break
    case BLOCK_TYPE.MULTIPLE_SELECTION:
      layout = {
        minW: 4,
        minH: 3,
        w: 5,
        h: 4
      }
      break
    case BLOCK_TYPE.FORM_SEQUENCE:
      layout = {
        minW: 4,
        minH: 4,
        w: 5,
        h: 4
      }
      break
    case BLOCK_TYPE.TEXT:
      layout = {
        minW: 4,
        w: 5,
        minH: 2,
        h: 3
      }
      break
    case BLOCK_TYPE.EMAIL:
      layout = {
        minW: 4,
        w: 5,
        minH: 2,
        h: 2
      }
      break
    case BLOCK_TYPE.LINK:
      layout = {
        minW: 4,
        w: 5,
        minH: 2,
        h: 2
      }
      break
    case BLOCK_TYPE.VIDEO:
      layout = {
        minW: 5,
        minH: 4,
        w: 6,
        h: 4
      }
      break
    case BLOCK_TYPE.NAMED_ENTITY_RECOGNITION:
      layout = {
        minW: 10,
        minH: 10,
        w: 10,
        h: 10
      }
      break
    case BLOCK_TYPE.BOUNDING_BOXES:
      layout = {
        minW: 5,
        minH: 4,
        w: 10,
        h: 9
      }
      break
    case BLOCK_TYPE.EMBED:
      layout = {
        minW: 4,
        minH: 4,
        w: 6,
        h: 4
      }
      break
    case BLOCK_TYPE.PDF:
      layout = {
        minW: 4,
        minH: 4,
        w: 6,
        h: 4
      }
      break
    case BLOCK_TYPE.RICH_TEXT:
      layout = {
        minW: 5,
        minH: 4,
        w: 6,
        h: 4
      }
      break
    case BLOCK_TYPE.TEXT_SEQUENCE:
      layout = {
        minW: 4,
        minH: 4,
        w: 5,
        h: 4
      }
      break
    default:
      break
  }
  return layout
}

export default getBlockDims
