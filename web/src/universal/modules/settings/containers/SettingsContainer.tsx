import React, {lazy} from 'react'
import {Switch, Route} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import styled from '@emotion/styled'
import {IUser} from 'universal/types/generic'
import handleChunkError from 'universal/utils/handleChunkError'
import NotFound from 'client/components/NotFound'

interface Props {
  orgId: string
  user: IUser
  handleProfileSubmit: () => void
}

const Layout = styled.div({
  display: 'flex',
  overflow: 'hidden',
  height: '100vh'
})

const Main = styled.div({
  display: 'flex',
  flex: 1,
  height: '100%',
  justifyContent: 'center',
  padding: '0 100px',
  backgroundColor: '#fff',
  overflow: 'auto'
})

const APIKeyContainer = lazy(() =>
  import(/* webpackChunkName: 'APIKeyContainer' */ './APIKeyContainer').catch((error) =>
    handleChunkError(error)
  )
)

const ProfileContainer = lazy(() =>
  import(/* webpackChunkName: 'ProfileContainer' */ './ProfileContainer').catch((error) =>
    handleChunkError(error)
  )
)

const CompanyContainer = lazy(() =>
  import(/* webpackChunkName: 'CompanyContainer' */ './CompanyContainer').catch((error) =>
    handleChunkError(error)
  )
)

const PasswordContainer = lazy(() =>
  import(/* webpackChunkName: 'PasswordContainer' */ './PasswordContainer').catch((error) =>
    handleChunkError(error)
  )
)

const NotificationsContainer = lazy(() =>
  import(
    /* webpackChunkName: 'NotificationsContainer' */ './NotificationsContainer'
  ).catch((error) => handleChunkError(error))
)

const SettingsContainer = (props: Props) => {
  const {orgId, user} = props
  return (
    <Layout>
      <Sidebar orgId={orgId} user={user} />
      <Main>
        <Switch>
          <Route
            exact
            path='/settings/profile'
            component={(p) => <ProfileContainer {...p} user={user} />}
          />
          <Route exact path='/settings/api' component={APIKeyContainer} />
          <Route
            exact
            path='/settings/company'
            render={(p) => (user.is_admin ? <CompanyContainer {...p} user={user} /> : <NotFound />)}
          />
          <Route exact path='/settings/password' component={PasswordContainer} />
          <Route
            exact
            path='/settings/notifications'
            component={(p) => <NotificationsContainer {...p} />}
          />
        </Switch>
      </Main>
    </Layout>
  )
}

export default SettingsContainer
