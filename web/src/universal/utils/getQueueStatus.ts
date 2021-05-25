import {QUEUE_STATUS} from 'universal/utils/constants'

const getQueueStatus = (type: string) => {
  let status = ''
  switch (type) {
    case QUEUE_STATUS.COMPLETED:
      status = 'COMPLETED'
      break
    case QUEUE_STATUS.NEW:
      status = 'NEW'
      break
    case QUEUE_STATUS.IN_PROGRESS:
      status = 'IN PROGRESS'
      break
    case QUEUE_STATUS.OPEN:
      status = 'OPEN'
      break
    default:
      break
  }
  return status
}

export default getQueueStatus
