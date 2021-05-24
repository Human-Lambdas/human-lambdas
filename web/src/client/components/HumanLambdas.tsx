import React, {lazy, memo, Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Global, css} from '@emotion/core'
import ErrorBoundary from './ErrorBoundary'
import ProtectedRoutes from './ProtectedRoutes'
import globalStyles from 'styles/theme/globalStyles'
import LoadingPage from './LoadingPage'
import useHistory from 'hooks/useHistory'
import NotificationSystem from 'modules/notificationSystem/containers/NotificationSystemContainer'
import handleChunkError from 'universal/utils/handleChunkError'

const LoginPage = lazy(() =>
  import(/* webpackChunkName: 'LoginPage' */ './LoginPage').catch((error) =>
    handleChunkError(error)
  )
)
const ResetPassword = lazy(() =>
  import(/* webpackChunkName: 'ResetPassword' */ './ResetPassword').catch((error) =>
    handleChunkError(error)
  )
)
const InviteSignUpPage = lazy(() =>
  import(/* webpackChunkName: 'InviteSignUpPage' */ './InviteSignUpPage').catch((error) =>
    handleChunkError(error)
  )
)
const Analytics = lazy(() =>
  import(/* webpackChunkName: 'Analytics' */ './Analytics').catch((error) =>
    handleChunkError(error)
  )
)
const ForgottenForm = lazy(() =>
  import(/* webpackChunkName: 'ForgottenForm' */ './ForgottenForm').catch((error) =>
    handleChunkError(error)
  )
)
const JoinQueueSuccess = lazy(() =>
  import(/* webpackChunkName: 'JoinQueueSuccess' */ './JoinQueueSuccess').catch((error) =>
    handleChunkError(error)
  )
)
const PublicSignUpPage = lazy(() =>
  import(
    /* webpackChunkName: 'PublicSignUpPage' */ 'universal/components/PublicSignUpPage'
  ).catch((error) => handleChunkError(error))
)

const HumanLambdas = memo(() => {
  useHistory()
  return (
    <ErrorBoundary>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <NotificationSystem />
      <Suspense fallback={<LoadingPage />}>
        <Analytics />
        <Switch>
          <Route path='/invite/success/:inviteId' component={JoinQueueSuccess} />
          <Route path='/invite/:inviteId' component={InviteSignUpPage} />
          <Route path='/forgot/:forgottenId' component={ResetPassword} />
          <Route path='/forgot/' component={ForgottenForm} />
          <Route path='/signup' component={PublicSignUpPage} />
          <Route exact path='/' component={LoginPage} />
          <Route component={ProtectedRoutes} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
})

export default HumanLambdas
