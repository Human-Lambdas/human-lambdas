/**
 * TODO
 * Relocate queues container to universal
 */
import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import handleChunkError from 'universal/utils/handleChunkError'

interface Props {
  user: any
}

const QueuesContainer = lazy(() =>
  import(
    /* webpackChunkName: 'QueuesContainer' */ 'universal/modules/queue/containers/QueuesContainer'
  ).catch((error) => handleChunkError(error))
)
const ConnectionsContainer = lazy(() =>
  import(
    /* webpackChunkName: 'ConnectionsContainer' */ 'universal/modules/queue/containers/ConnectionsContainer'
  ).catch((error) => handleChunkError(error))
)
const QueueContainer = lazy(() =>
  import(
    /* webpackChunkName: 'QueueContainer' */ 'universal/modules/queue/containers/QueueContainer'
  ).catch((error) => handleChunkError(error))
)

const QueuesRoot = (props: Props) => {
  const {user, organizations} = props || {}
  if (!user.email) return null

  return (
    <Suspense fallback={' '}>
      <Switch>
        <Route
          exact
          path='/queues/:queueId/connections'
          render={(p) => <ConnectionsContainer {...p} user={user} />}
        />
        <Route
          exact
          path='/queues/:queueId'
          render={(p) => <QueueContainer organizations={organizations} {...p} user={user} />}
        />
        <Route
          exact
          path='/queues/:queueId'
          render={(p) => <QueueContainer organizations={organizations} {...p} user={user} />}
        />
        <Route path='/queues' render={(p) => <QueuesContainer {...p} user={user} />} />
      </Switch>
    </Suspense>
  )
}

export default QueuesRoot
