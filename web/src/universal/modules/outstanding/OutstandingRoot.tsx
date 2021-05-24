import React, {useEffect, useState, useCallback} from 'react'
import {connect} from 'react-redux'
import Outstanding from './components/Outstanding'
import useNetworker from 'client/hooks/useNetworker'
import {IUser} from 'client/types/generic'
import LoadingPage from 'client/components/LoadingPage'
import useDocumentTitle from 'client/hooks/useDocumentTitle'

interface Props {
  user: IUser
  users: IUser[]
}

const OutstandingRoot = (props: Props) => {
  const {user, users} = props || {}
  const [queues, setQueues] = useState([])
  const [offset, setOffset] = useState(0)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [queueId, setQueueId] = useState<undefined | number | string>(undefined)
  const [userId, setUserId] = useState<undefined | number | string>(undefined)
  const networker = useNetworker()
  const orgId = user.current_organization_id
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
    async function fetchQueues() {
      setLoading(true)

      const {errors, data: queues} = await networker?.httpHandler(`/orgs/${orgId}/queues`, {
        method: 'GET'
      })

      if (errors) {
        console.error('Error fetching queues!', JSON.stringify(errors))
      } else {
        if (queues) {
          setCount(queues.length)
          setQueues(queues)
          setLoading(false)
        }
      }
    }

    fetchQueues()
  }, [queueId, userId, offset, user])

  useDocumentTitle('Outstanding Queues | Human Lambdas')

  if (loading) return <LoadingPage />

  return (
    <Outstanding
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
  users: state.users
})

export default connect(mapStateToProps, null)(OutstandingRoot)
