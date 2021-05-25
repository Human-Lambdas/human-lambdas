import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation, useParams} from 'react-router-dom'
import QueueBuilder from './components/QueueBuilder'
import {IUser, IBlock, IErrors, IError, IQueue} from 'universal/types/generic'
import {AxiosRequestConfig} from 'axios'
import useNetworker from '../../../client/hooks/useNetworker'
import isEmptyArray from 'universal/utils/isEmptyArray'
import {
  addFailureNotification,
  addSuccessNotification
} from '../../../client/modules/notificationSystem/ducks/notificationSystemDuck'
import {segmentTrack} from '../../../client/utils/segmentIo'
import useRouter from '../../../client/hooks/useRouter'
import {BLOCK_TYPE} from 'universal/utils/constants'
import {workfllowActions} from 'client/redux/queuesReducers'
import {transformDates} from 'client/utils/dateHelpers'

interface IQueueProps {
  user: IUser
}

interface IValues {
  id?: number
  name: string
  data: IBlock[]
}

const Queue = (props: IQueueProps) => {
  const {
    user: {orgId}
  } = props || {}
  const [queue, setQueue] = useState<IQueue | {}>({})
  const networker = useNetworker()
  const dispatch = useDispatch()
  const {history} = useRouter() as any
  const {pathname, state} = useLocation()
  const {queueId} = useParams()

  React.useEffect(() => {
    async function fetchQueue() {
      if (pathname.indexOf('edit') !== -1 && orgId) {
        const {data, errors}: any = await networker?.httpHandler(
          `/orgs/${orgId}/queues/${queueId}`,
          {
            method: 'GET'
          }
        )
        if (isEmptyArray(errors)) {
          setQueue(data)
        }
      }
    }
    fetchQueue()
  }, [orgId, pathname])

  React.useEffect(() => {
    async function fetchQueue() {
      if (state?.templateId && orgId) {
        const {data, errors}: any = await networker?.httpHandler(
          `/orgs/40/queues/${state.templateId}`,
          {
            method: 'GET'
          }
        )
        if (isEmptyArray(errors)) {
          setQueue(data)
        }
      }
      if (state?.hasClone) {
        setQueue(state.clonedQueue)
      }
    }
    fetchQueue()
  }, [orgId, pathname])

  const onSubmitHandler = React.useCallback(
    async (values: IValues, orgId) => {
      const {name, data} = values || {}
      const newData = data.map(transformDates).map((block) => {
        const blockType = block[block.type]
        const {value, ...rest} = blockType // strip out value
        const {history, ...blockVals} = rest // strip out history
        const noHistory = block.type === BLOCK_TYPE.FORM_SEQUENCE ? [] : undefined
        return {...block, [block.type]: {...blockVals, history: noHistory}}
      })
      const newValues = {
        name,
        data: newData
      }
      const payload = {
        method: queueId ? 'PATCH' : 'POST',
        data: newValues
      } as AxiosRequestConfig
      if (name) {
        if (queueId) {
          const {errors, data}: any = await networker?.httpHandler(
            `/orgs/${orgId}/queues/${queueId}`,
            payload
          )
          if (!isEmptyArray(errors)) {
            errors.map((error: IError) => dispatch(addFailureNotification(error.message)))
            segmentTrack(`Queue Update Failed`, {orgId, name, queueId})
          } else {
            dispatch(workfllowActions.updateQueue(data))
            segmentTrack('Queue Update Successful', {orgId, name, queueId})
            dispatch(addSuccessNotification('Queue successfuly updated'))
            history.push(`/queues/${queueId}`)
          }
        } else {
          const {errors, data}: any = await networker?.httpHandler(
            `/orgs/${orgId}/queues/create`,
            payload
          )
          if (!isEmptyArray(errors)) {
            segmentTrack('Error creating new queue')
            errors.map((error: IError) => {
              dispatch(addFailureNotification(error.message))
              throw new Error(error.message)
            })
          } else {
            const {id, name} = data
            dispatch(workfllowActions.addQueue(data))
            dispatch(addSuccessNotification('Queue successfuly created'))
            segmentTrack('3 - Queue Created - [QUEUE FUNNEL]', {
              queueId: id,
              orgId,
              name
            })
            history.push(`/queues/${id}`)
          }
        }
      }
    },
    [orgId]
  )

  return <QueueBuilder onSubmitHandler={onSubmitHandler} orgId={orgId} queue={queue} />
}

export default Queue
