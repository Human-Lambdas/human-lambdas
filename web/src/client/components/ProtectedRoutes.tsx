import React, {lazy, Fragment, useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import UseAuth from 'client/hooks/useAuth'
import useNetworker from 'client/hooks/useNetworker'
import UserProvider from 'universal/components/UserProvider'
import {IUser, IUserReq} from 'universal/types/generic'
import handleChunkError from 'universal/utils/handleChunkError'

const DashboardRoot = lazy(() =>
  import(
    /* webpackChunkName: 'DashboardRoot' */ '../modules/dashboard/DashboardRoot'
  ).catch((error) => handleChunkError(error))
)
const SettingsRoot = lazy(() =>
  import(
    /* webpackChunkName: 'SettingsRoot' */ 'universal/modules/settings/SettingsRoot'
  ).catch((error) => handleChunkError(error))
)
const Signout = lazy(() =>
  import(/* webpackChunkName: 'Signout' */ './Signout').catch((error) => handleChunkError(error))
)
const Queue = lazy(() =>
  import(/* webpackChunkName: 'Queue' */ 'universal/modules/queue/Queue').catch((error) =>
    handleChunkError(error)
  )
)
const TaskRoot = lazy(() =>
  import(/* webpackChunkName: 'TaskRoot' */ 'universal/modules/task/TaskRoot').catch((error) =>
    handleChunkError(error)
  )
)
const NotFound = lazy(() =>
  import(/* webpackChunkName: 'NotFound' */ 'client/components/NotFound').catch((error) =>
    handleChunkError(error)
  )
)

const ProtectedRoutes = (props: Props) => {
  const {history} = props
  const networker = useNetworker()
  const {accessObj = {}} = networker
  const {user_id: userId} = accessObj || {}
  const [user, setUser] = useState<IUserReq>()

  useEffect(() => {
    async function fetchUser() {
      if (userId) {
        const resp = await networker.httpHandler(`/users/${userId}`, {method: 'GET'})
        if (resp && resp.data) setUser(resp.data)
      }
    }
    fetchUser()
  }, [userId])

  if (!accessObj) {
    history.push('/')
  }

  if (!user || user === {}) {
    return null
  }

  const {current_organization_id, email, id, is_admin, name} = user || {}

  const userObj = {
    orgId: current_organization_id,
    email,
    id,
    isAdmin: is_admin,
    name
  } as IUser

  return (
    <Fragment>
      <UseAuth />
      <UserProvider user={userObj}>
        <Switch>
          <Route path='/settings' component={SettingsRoot} />
          <Route path='/signout' component={Signout} />
          <Route
            exact
            path={['/queues/new', '/queues/:queueId/edit']}
            render={(p) => <Queue {...p} user={userObj} />}
          />
          <Route
            exact
            path={['/queues/:queueId/tasks/:taskId', '/queues/tasks/:taskId/audit']}
            render={(p) => <TaskRoot {...p} user={userObj} />}
          />
          <Route component={DashboardRoot} />
          <Route component={NotFound} />
        </Switch>
      </UserProvider>
    </Fragment>
  )
}

export default ProtectedRoutes
