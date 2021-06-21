import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Queues from '../components/Queues'
import useDocumentTitle from 'client/hooks/useDocumentTitle'
import useNetworker from 'client/hooks/useNetworker'
import LoadingPage from 'client/components/LoadingPage'
import {IUserReq} from 'universal/types/generic'
import {workfllowActions} from 'client/redux/queuesReducers'
import {usersActions} from 'client/redux/usersReducer'
import queueTemplates from 'client/utils/queueTemplates'

interface Props {
  user: IUserReq
  setUsers: any
  setQueues: any
  clearSelectedQueue: any
}

const QueuesContainer = (props: Props) => {
  const {user} = props || {}
  const {current_organization_id: orgId} = user
  const [queues, setQueues] = useState([])
  const [loading, setLoading] = useState(false)
  const [usersLoading, setUsersLoading] = useState(false)
  const [error, setError] = useState('')
  const networker = useNetworker()

  async function fetchQueues() {
    setLoading(true)
    const payload = {
      method: 'GET'
    }
    const res = await networker?.httpHandler(`/orgs/${orgId}/queues`, payload)
    const {errors, data} = res || {}
    if (errors) {
      setError(errors)
      console.error('Error fetching queues!', JSON.stringify(errors))
    } else {
      if (data) {
        const sortedQueue = data.sort((a, b) => (a.n_tasks < b.n_tasks ? 1 : -1))
        setQueues(sortedQueue)
        props.setQueues(sortedQueue)
        props.clearSelectedQueue()
      }
    }
    setLoading(false)
  }

  async function fetchUsers() {
    setUsersLoading(true)
    const payload = {
      method: 'GET'
    }
    const res = await networker?.httpHandler(`/orgs/${orgId}/users`, payload)
    const {errors, data} = res || {}
    if (errors) {
      setError(errors)
      console.error('Error fetching Users for org!', JSON.stringify(errors))
    } else {
      if (data) {
        props.setUsers(data)
      }
    }
    setUsersLoading(false)
  }

  useEffect(() => {
    fetchQueues()
  }, [orgId])

  useEffect(() => {
    fetchUsers()
  }, [orgId])

  let renderComp

  if (loading) {
    renderComp = <LoadingPage />
  } else {
    renderComp = (
      <Queues
        queues={queues}
        templates={queueTemplates}
        loading={loading || usersLoading}
        error={error}
        user={props.user}
      />
    )
  }

  useDocumentTitle(`Queues | Human Lambdas`)

  return renderComp
}

const mapDispatchToProps = (dispatch) => ({
  setQueues: (arg) => dispatch(workfllowActions.setQueues(arg)),
  clearSelectedQueue: (arg) => dispatch(workfllowActions.clearSelectedQueue()),
  setUsers: (arg) => dispatch(usersActions.setUsers(arg))
})

export default connect(null, mapDispatchToProps)(QueuesContainer)
