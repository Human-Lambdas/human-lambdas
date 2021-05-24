import React, {useEffect, useState, useCallback} from 'react'
import {connect} from 'react-redux'
import Audits from './components/Audits'
import useNetworker from 'client/hooks/useNetworker'
import {IUser} from 'client/types/generic'
import LoadingPage from 'client/components/LoadingPage'
import {filterActions} from 'client/redux/filtersReducer'

interface Props {
  user: IUser
  users: IUser[]
  auditFilters: any
  setQueueId: (arg) => void
  setUserId: (arg) => void
}

const AuditsRoot = (props: Props) => {
  const {user, users, auditFilters, setUserId, setQueueId} = props || {}
  const [audits, setAudits] = useState([])
  const [queues, setQueues] = useState([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const {queue_id: queueId, worker_id: userId} = auditFilters
  const networker = useNetworker()
  const orgId = user.current_organization_id
  const {tasks, count} = audits || {}
  const PAGE_LIMIT = 50

  const onNext = useCallback(() => {
    if (offset < Math.abs(count - PAGE_LIMIT)) {
      setOffset(offset + PAGE_LIMIT)
    }
  }, [count, offset])

  const onBack = useCallback(() => {
    if (offset >= PAGE_LIMIT) {
      setOffset(offset - PAGE_LIMIT)
    }
  }, [count, offset])

  useEffect(() => {
    async function fetchAudits() {
      setLoading(true)
      const payload = {
        method: 'GET',
        params: {
          ...auditFilters,
          limit: PAGE_LIMIT,
          offset
        }
      }
      const {data} = await networker.httpHandler(`/orgs/${orgId}/queues/tasks/completed`, payload)
      const {data: queues} = await networker.httpHandler(`/orgs/${orgId}/queues`, {
        method: 'GET',
        params: {
          task_status: 'completed'
        }
      })

      setAudits(data)
      setQueues(queues)
      setLoading(false)
    }

    fetchAudits()
  }, [queueId, userId, offset, user])

  if (loading) return <LoadingPage />

  return (
    <Audits
      tasks={tasks || []}
      count={count}
      onNext={onNext}
      onBack={onBack}
      limit={PAGE_LIMIT}
      offset={offset}
      queues={queues}
      setQueueId={setQueueId}
      queueId={queueId}
      users={users}
      setUserId={setUserId}
      userId={userId}
    />
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users,
  auditFilters: state.filters.auditFilters
})

const mapDispatchToProps = (dispatch) => ({
  setQueueId: (arg) => dispatch(filterActions.setAuditsQueue(arg)),
  setUserId: (arg) => dispatch(filterActions.setAuditsUser(arg))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuditsRoot)
