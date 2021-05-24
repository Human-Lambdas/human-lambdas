import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import MetricsContainer from './containers/Metrics/Metrics'
import useNetworker from 'hooks/useNetworker'
import EmptyPage from 'components/EmptyPage'
import EmptyMetricsSVG from 'components/Icons/EmptyMetricsSVG'
import {IUser} from 'client/types/generic'
import LoadingComponent from 'client/components/LoadingComponent'

interface Props {
  user: IUser
  orgUsers: IUser[]
}

const MetricsRoot = (props: Props) => {
  const {user, orgUsers} = props || {}
  const [queues, setQueues] = useState([])
  const [queueLoading, setQueueLoading] = useState(false)
  const [queueIds, setQueueIds] = useState([])
  const orgId = user.current_organization_id
  const networker = useNetworker()

  const makeLineItem = React.useCallback(
    (id, name) => {
      return {
        id,
        name,
        isActive: true,
        stroke: '#' + Math.random().toString(16).substr(-6),
        dataKey: name,
        fill: '#fff'
      }
    },
    [queues, orgUsers]
  )

  const [userIds, setUserIds] = useState(orgUsers.map((user) => user.id))
  const [users, setUsers] = useState(orgUsers.map(({name, id}) => makeLineItem(id, name)))

  useEffect(() => {
    async function getData() {
      setQueueLoading(true)
      const {data} = await networker.httpHandler(`/orgs/${orgId}/queues`, {method: 'GET'})
      const sanitizedQueues = data.map(
        ({description, inputs, outputs, n_tasks, ...keepAttr}) => ({...keepAttr})
      )
      setQueueIds(sanitizedQueues.map((queue) => queue.id))
      setQueues(sanitizedQueues.map(({name, id}) => makeLineItem(id, name)))
      setQueueLoading(false)
    }

    getData()
  }, [user])

  /**
   * TODO combine setActive and setActiveUsers
   */
  const setActive = (id) => {
    const oldQueues = queues
    const newQueue = oldQueues.find((queue) => queue.id === id)
    const updatedQueue = (newQueue['isActive'] = !newQueue.isActive)
    setQueues(Object.assign(oldQueues, updatedQueue))

    const index = queueIds.findIndex((queue) => queue === id)
    if (index !== -1) {
      const newIds = queueIds.filter((queue) => queue !== id)
      setQueueIds(newIds)
    } else {
      setQueueIds([...queueIds, id])
    }
  }

  const setActiveUsers = (id) => {
    const oldUsers = users
    const newUser = oldUsers.find((user) => user.id === id)
    const updatedUsers = (newUser['isActive'] = !newUser.isActive)
    setUsers(Object.assign(oldUsers, updatedUsers))

    const index = userIds.findIndex((user) => user === id)
    if (index !== -1) {
      const newIds = userIds.filter((user) => user !== id)
      setUserIds(newIds)
    } else {
      setUserIds([...userIds, id])
    }
  }

  if (queueLoading) return <LoadingComponent />

  return queues.length === 0 ? (
    <EmptyPage
      svg={<EmptyMetricsSVG />}
      header={'Looks like there are no metrics available yet.'}
      subHeader={
        'Before you can access all metrics, some tasks will need to be created and completed.'
      }
    />
  ) : (
    <MetricsContainer
      users={users}
      queues={queues}
      setActive={setActive}
      setActiveUsers={setActiveUsers}
      queueIds={queueIds}
      userIds={userIds}
      user={user}
    />
  )
}

const mapStateToProps = (state: any) => ({
  orgUsers: state.users
})

export default connect(mapStateToProps, null)(MetricsRoot)
