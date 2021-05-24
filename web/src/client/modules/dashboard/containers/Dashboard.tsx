import React, {lazy} from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PALETTE} from 'universal/styles/palette'
import Sidebar from 'client/components/Sidebar'
import handleChunkError from 'universal/utils/handleChunkError'

interface Props {
  user: object
  orgName: string
  organizations: any
  isStaff: boolean
}

const DashLayout = styled.div({
  display: 'flex',
  overflow: 'auto',
  height: '100%'
})

const DashMain = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  background: PALETTE.BACKGROUND_MAIN
})

const QueuesRoot = lazy(() =>
  import(/* webpackChunkName: 'QueuesRoot' */ 'client/modules/queues/QueuesRoot').catch((error) =>
    handleChunkError(error)
  )
)

const UsersRoot = lazy(() =>
  import(
    /* webpackChunkName: 'UsersRoot' */ 'client/modules/users/containers/UsersRoot'
  ).catch((error) => handleChunkError(error))
)

const AuditsRoot = lazy(() =>
  import(
    /* webpackChunkName: 'AuditsRoot' */ 'universal/modules/audits/AuditsRoot'
  ).catch((error) => handleChunkError(error))
)

const OutstandingRoot = lazy(() =>
  import(
    /* webpackChunkName: 'AuditsRoot' */ 'universal/modules/outstanding/OutstandingRoot'
  ).catch((error) => handleChunkError(error))
)

const MetricsRoot = lazy(() =>
  import(
    /* webpackChunkName: 'MetricsRoot' */ 'client/modules/metrics/MetricsRoot'
  ).catch((error) => handleChunkError(error))
)

const NotFound = lazy(() =>
  import(/* webpackChunkName: 'NotFound' */ 'client/components/NotFound').catch((error) =>
    handleChunkError(error)
  )
)

const Dashboard = (props: Props) => {
  const {
    user,
    orgName,
    organizations,
    handleNewOrganization,
    switchUserOrg,
    history: {location},
    isStaff
  } = props || {}
  const hideSidebar = location.pathname.includes('task')
  return (
    <DashLayout>
      {!hideSidebar && (
        <Sidebar
          switchUserOrg={switchUserOrg}
          user={user}
          orgName={orgName}
          organizations={organizations}
          handleNewOrganization={handleNewOrganization}
        />
      )}
      <DashMain>
        <Switch>
          <Route
            path='/outstanding-queues'
            render={(p) => {
              if (isStaff) return <OutstandingRoot {...p} user={user} />
              return <Redirect to='/queues' />
            }}
          />
          <Route
            path='/queues'
            render={(p) => <QueuesRoot organizations={organizations} {...p} user={user} />}
          />
          <Route path='/users' render={(p) => <UsersRoot {...p} user={user} />} />
          <Route path='/audits' render={(p) => <AuditsRoot {...p} user={user} />} />
          <Route path='/metrics' render={(p) => <MetricsRoot {...p} user={user} />} />
          <Route component={NotFound} />
        </Switch>
      </DashMain>
    </DashLayout>
  )
}

const mapStateToProps = (state: any) => ({
  isStaff: state.currentUser.isStaff
})

export default connect(mapStateToProps, null)(Dashboard)
