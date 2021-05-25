import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import qs from 'qs'
import Task from './components/Task'
import {IUser, ITask} from 'universal/types/generic'
import useNetworker from 'client/hooks/useNetworker'
import {AxiosRequestConfig} from 'axios'
import {segmentTrack} from 'client/utils/segmentIo'
import useRouter from 'client/hooks/useRouter'
import {
  addSuccessNotification,
  addFailureNotification
} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import {BLOCK_TYPE} from 'universal/utils/constants'
import formatValues from 'universal/utils/formatValues'
import isUserStaff from 'client/utils/isUserStaff'
import {transformDates} from 'client/utils/dateHelpers'

interface TaskRootProps {
  user: IUser
  auditFilters: any
}

const TaskRoot = (props: TaskRootProps) => {
  const networker = useNetworker()
  const {history}: any = useRouter()
  const dispatch = useDispatch()
  const {user, auditFilters} = props
  const {id: userId, email, orgId} = user || {}
  const {taskId, queueId} = useParams<number, number>()
  const [task, setTask] = useState<ITask | {}>({})
  const [taskLoading, setTaskLoading] = useState<boolean>(false)
  const [activity, setActivity] = useState([])
  const [activityLoading, setActivityLoading] = useState<boolean>(false)
  const [taskNav, setTaskNav] = useState({})
  const [isStaff, setIsStaff] = useState(false)

  const {
    location: {pathname, state}
  } = history || {}

  const isAuditsRequestedFromUrl = pathname.includes('audit')

  async function getTask() {
    const payload = {method: 'GET'} as AxiosRequestConfig
    const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}`
    const auditsUrl = `/orgs/${orgId}/queues/tasks/${taskId}/audit`
    setTaskLoading(true)
    if (isAuditsRequestedFromUrl) {
      const {data: task}: any = await networker!.httpHandler(auditsUrl, {
        params: auditFilters,
        paramsSerializer: (params) => qs.stringify(params),
        method: 'GET'
      })
      const {result, next, previous} = task || {}
      setTask(result)
      setTaskNav({previous, next})
    } else {
      const {data: task}: any = await networker!.httpHandler(url, payload)
      setTask(task)
    }

    const {data: orgs} = await networker.httpHandler(`/orgs`, {method: 'GET'})
    setIsStaff(isUserStaff(orgs, orgId))

    setTaskLoading(false)
  }

  async function getRefreshedTask() {
    const payload = {method: 'GET'} as AxiosRequestConfig
    const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/refresh`
    const {data: task}: any = await networker!.httpHandler(url, payload)
    if (!task) {
      console.error('ERROR FETCHING REFRESHED TASK')
    } else {
      setTask(task)
    }
  }

  const getActivity = async () => {
    const {id: taskId, queue_id: queueId} = task || {}
    if (taskId && queueId) {
      setActivityLoading(true)
      const payload = {method: 'GET'} as AxiosRequestConfig
      const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/activity`
      const {data}: any = await networker?.httpHandler(url, payload)
      if (!data) {
        console.error('ERROR FETCHING ACTIVITY DATA')
      } else {
        setActivity(data)
      }
    }
    setActivityLoading(false)
  }

  useEffect(() => {
    if (state?.nextTask?.id) {
      setTask(state.nextTask)
    } else if (taskId && orgId) {
      getTask()
    }
  }, [taskId, orgId, user, queueId])

  useEffect(() => {
    const {id, queue_id: queueId} = task || {}
    if (id && queueId) {
      getActivity()
    }
  }, [taskId, task?.id])

  const onSubmit = React.useCallback(async (e: any, values: ITask, orgId: number) => {
    const {id: taskId} = values

    let nextUrl
    if (taskId && orgId) {
      const config = {
        method: 'PATCH',
        data: transformDates(null, formatValues(values))
      } as AxiosRequestConfig
      const updateUrl = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}`
      const nextTaskUrl = `/orgs/${orgId}/queues/${queueId}/tasks/next`

      let requiredType
      let requiredName
      const required = (block) => {
        if (!BLOCK_TYPE.FORM_SEQUENCE) {
          const {type, name} = block
          const {is_required: isRequired, value: blockValue} = block[type]
          requiredName = name
          requiredType = type
          return (isRequired && blockValue === '') || (isRequired && !blockValue)
        } else {
          return false
        }
      }

      const requiredError = formatValues(values.data).map(transformDates).some(required)
      const requiredValue =
        requiredType === BLOCK_TYPE.TEXT ||
        requiredType === BLOCK_TYPE.NUMBER ||
        requiredType === BLOCK_TYPE.EMAIL ||
        requiredType === BLOCK_TYPE.LINK
          ? 'value'
          : 'selection'

      if (requiredError) {
        dispatch(addFailureNotification(`A ${requiredValue} is required for ${requiredName}`))
        return
      }

      // Update task
      const {data: updatedTask}: any = await networker?.httpHandler(updateUrl, config)
      if (!updatedTask) {
        console.error(`ERROR UPDATING TASK`)
      } else {
        segmentTrack('Task Completed', {taskId: taskId, orgId, userId, email, queueId})
        const {data: nextTask}: any = await networker?.httpHandler(nextTaskUrl, {method: 'GET'})

        if (!nextTask) {
          return history.replace(`/queues/${queueId}`)
        } else {
          if (nextTask.id) {
            nextUrl = `/queues/${queueId}/tasks/${nextTask.id}`
            segmentTrack('Task Fetched', {taskId: nextTask.id, orgId, userId, email, queueId})
            history.push({
              pathname: nextUrl,
              state: {nextTask}
            })
          } else {
            dispatch(
              addSuccessNotification('Congratulations! You have completed all tasks in this queue.')
            )
            segmentTrack('All Tasks Completed', {orgId, userId, email, queueId})
            return history.replace(`/queues/${queueId}`)
          }
        }
      }
    } else {
      console.error('FAILED TO SUBMIT TASK')
    }
  }, [])

  const onSave = React.useCallback(
    async (values: ITask) => {
      if (task.id) {
        const config = {
          method: 'PATCH',
          data: transformDates(null, formatValues(values))
        } as AxiosRequestConfig
        const url = `/orgs/${orgId}/queues/${queueId}/tasks/${task.id}/save`
        const {data}: any = await networker?.httpHandler(url, config)
        if (!data) {
          console.error(`ERROR SAVING TASK`)
        } else {
          getRefreshedTask()
          getActivity()
        }
      } else {
        console.error('INVALID TASK')
      }
    },
    [task, orgId]
  )

  const onPost = React.useCallback(
    async (comment: string) => {
      const {id: taskId, queue_id: queueId} = task || {}
      if (taskId && queueId) {
        const payload = {
          method: 'POST',
          data: {action: 'comment', comment: comment}
        } as AxiosRequestConfig
        const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/activity`
        await networker?.httpHandler(url, payload)
        getActivity()
      }
    },
    [task, orgId, queueId]
  )

  const onDelete = React.useCallback(
    async (deleteId: number) => {
      const {id: taskId, queue_id: queueId} = task || {}
      if (taskId && queueId) {
        const payload = {
          method: 'DELETE'
        } as AxiosRequestConfig
        const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/activity/${deleteId}`
        await networker?.httpHandler(url, payload)
        getActivity()
      }
    },
    [task, orgId, queueId]
  )

  const onAuditDecision = React.useCallback(
    async (correct: boolean | null) => {
      const {id: taskId} = task || {}
      if (taskId && orgId) {
        const payload = {
          method: 'PUT',
          data: {correct: correct}
        } as AxiosRequestConfig
        const url = `/orgs/${orgId}/queues/tasks/${taskId}/audit`
        await networker?.httpHandler(url, payload)
        getTask()
        getActivity()
      }
    },
    [task, orgId, queueId]
  )

  const onAssign = React.useCallback(
    async (userId) => {
      const config = {method: 'POST', data: {assigned_to: userId}} as AxiosRequestConfig
      const url = `/orgs/${orgId}/queues/${queueId}/tasks/${task.id}/assign`
      const {data}: any = await networker!.httpHandler(url, config)
      if (!data) {
        if (userId) {
          console.error(`FAILED TO ASSIGN TASK`)
        } else {
          console.error(`FAILED TO UNASSIGN TASK`)
        }
        console.error('ERROR ASSIGNING TASK')
      } else {
        getRefreshedTask()
        getActivity()
      }
    },
    [task]
  )

  if (!task?.id) return null

  return (
    <Task
      userId={userId}
      isAudits={task?.status === 'completed'}
      task={task}
      onSubmit={onSubmit}
      orgId={orgId}
      onSave={onSave}
      onPost={onPost}
      onDelete={onDelete}
      onAssign={onAssign}
      taskNav={taskNav}
      activity={activity}
      isStaff={isStaff}
      onAuditDecision={onAuditDecision}
      isLoading={taskLoading || activityLoading}
    />
  )
}

const mapStateToProps = (state: any) => ({
  auditFilters: state.filters.auditFilters
})

export default connect(mapStateToProps, null)(TaskRoot)
