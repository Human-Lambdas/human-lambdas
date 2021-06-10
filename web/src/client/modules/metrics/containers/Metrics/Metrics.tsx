import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import handleChunkError from 'universal/utils/handleChunkError'
import useDocumentTitle from 'client/hooks/useDocumentTitle'

const Overview = lazy(() =>
  import(/* webpackChunkName: 'OverviewContainer' */ '../Overview/OverviewContainer')
  .catch((error) => handleChunkError(error))
)

const Queues = lazy(() =>
  import(/* webpackChunkName: 'QueuesContainer' */ '../Queues/QueuesContainer')
  .catch((error) => handleChunkError(error))
)

const Workers = lazy(() =>
  import(/* webpackChunkName: 'WorkersContainer' */ '../Workers/WorkersContainer')
  .catch((error) => handleChunkError(error))
)

const QueuesRoot = (props) => {
  const {queues, setActive, setActiveUsers, queueIds, users, userIds, user} = props
  useDocumentTitle(`Metrics | Human Lambdas`)

  return (
    <Suspense fallback={' '}>
      <Switch>
        <Route
          exact
          path='/metrics/queues'
          render={(p) => (
            <Queues
              {...p}
              queues={queues}
              queueIds={queueIds}
              setActive={setActive}
              user={user}
            />
          )}
        />
        <Route
          exact
          path='/metrics/workers'
          render={(p) => (
            <Workers
              setActiveUsers={setActiveUsers}
              userIds={userIds}
              users={users}
              {...p}
              user={user}
            />
          )}
        />
        <Route exact path='/metrics' render={(p) => <Overview {...p} user={user} />} />
      </Switch>
    </Suspense>
  )
}

export default QueuesRoot
