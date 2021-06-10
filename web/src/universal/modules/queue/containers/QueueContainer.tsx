import React, {useEffect, useState} from 'react'
import Queue from 'universal/modules/queue/components/Queue'
import LoadingPage from 'client/components/LoadingPage'
import useDocumentTitle from 'client/hooks/useDocumentTitle'
import useNetworker from 'client/hooks/useNetworker'
import useRouter from 'client/hooks/useRouter'
import {IUser, IQueue} from 'client/types/generic'
import {addSuccessNotification} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import {connect} from 'react-redux'
import {segmentTrack} from 'client/utils/segmentIo'
import {workfllowActions} from 'client/redux/queuesReducers'
import isUserStaff from 'client/utils/isUserStaff'

interface Props {
  user: IUser
  addSuccessNotification: () => void
  setSelectedQueue: any
}

const QueueContainer = (props: Props) => {
  const [queue, setQueue] = useState({} as IQueue)
  const [loading, setLoading] = useState(false)
  const [format, setFormat] = useState([])
  const [formatLoading, setFormatLoading] = useState(false)
  const [tasks, setTasks] = useState(null)
  const [taskLoading, setTaskLoading] = useState(false)

  const networker = useNetworker()
  const {history} = useRouter() as any
  const {state} = history.location

  const [taskPage, setTaskPage] = useState(state?.taskPage || 1)

  const orgId = props.user.current_organization_id
  const queueId = props.match.params.queueId
  const organizations = props.organizations
  const isStaff = isUserStaff(organizations, orgId)

  useEffect(() => {
    async function fetchQueue() {
      setLoading(true)
      const payload = {
        method: 'GET'
      }
      const {data} =
        (await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, payload)) || {}
      if (data) {
        setQueue(data)
        props.setSelectedQueue(data)
      }
      setLoading(false)
    }

    fetchQueue()
  }, [])

  useEffect(() => {
    async function fetchQueueFormat() {
      if (
        organizations.length > 0 && // If orgs aren't loaded isStaff may be incorrect
        !isStaff &&
        Array.isArray(format) &&
        format.length === 0
      ) {
        setFormatLoading(true)
        const payload = {
          method: 'GET'
        }
        const {data} =
          (await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/form`, payload)) ||
          {}
        if (data) {
          const {data: formatData} = data || {}
          setFormat(formatData)
        }
        setFormatLoading(false)
      }
    }

    fetchQueueFormat()
  }, [])

  useEffect(() => {
    async function fetchTasks() {
      setTaskLoading(true)
      const payload = {
        method: 'GET'
      }
      const {data} =
        (await networker.httpHandler(
          `/orgs/${orgId}/queues/${queueId}/tasks/pending?limit=10&offset=${
            (taskPage - 1) * 10 || 0
          }`,
          payload
        )) || {}
      if (data) {
        setTasks(data.tasks)
      }
      setTaskLoading(false)
    }

    fetchTasks()
  }, [taskPage])

  const deleteQueue = async () => {
    try {
      await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, {
        method: 'PATCH',
        data: {disabled: true}
      })
      segmentTrack('Queue Deleted', {
        orgId,
        queueId,
        userId: props.user.id,
        name
      })
      props.addSuccessNotification('This queue has now been deleted')
      history.push(`/queues`)
    } catch (e) {
      console.error(e)
    }
  }

  const flushQueueTasks = async () => {
    try {
      await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/flush`, {
        method: 'PUT'
      })
      segmentTrack('Queue Tasks Deleted', {
        orgId,
        queueId,
        userId: props.user.id
      })
      props.addSuccessNotification(`The queue's tasks have now been deleted`)
      setTasks([])
    } catch (e) {
      console.error(e)
    }
  }

  const startNextTask = async () => {
    const payload = {
      method: 'GET'
    }
    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/next`, payload)
    const {data} = res || {}
    const route = data.id ? `/queues/${queueId}/tasks/${data.id}` : `/queues/${queueId}/connections`
    history.push(route)
  }

  let renderComp

  if (loading || !Array.isArray(tasks) || formatLoading || queue === undefined) {
    renderComp = <LoadingPage />
  } else {
    renderComp = (
      <>
        <Queue
          queue={queue}
          user={props.user}
          orgId={orgId}
          queueId={queueId}
          deleteQueue={deleteQueue}
          flushQueueTasks={flushQueueTasks}
          startNextTask={startNextTask}
          format={format}
          tasks={tasks}
          isStaff={isStaff}
          taskPage={taskPage}
          setTaskPage={setTaskPage}
          taskLoading={taskLoading}
          setQueue={setQueue}
          setSelectedQueue={props.setSelectedQueue}
        />
      </>
    )
  }

  useDocumentTitle(`${queue.name || `Queue`} | Human Lambdas`)

  return renderComp
}

const mapDispatchToProps = (dispatch) => ({
  addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg)),
  setSelectedQueue: (arg) => dispatch(workfllowActions.setSelectedQueue(arg))
})

export default connect(null, mapDispatchToProps)(QueueContainer)
