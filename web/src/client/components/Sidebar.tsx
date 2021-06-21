import React from 'react'
import styled from '@emotion/styled'
import {ClassNames} from '@emotion/core'
import {NavLink} from 'react-router-dom'
import {PALETTE} from 'universal/styles/palette'
import textOverflow from 'universal/styles/helpers/textOverflow'
import {IUser} from 'universal/types/generic'
import {withRouter} from 'react-router-dom'
import QueueIcon from 'client/components/Icons/QueueSVG'
import UsersIcon from 'client/components/Icons/UsersSVG'
import MetricsIcon from 'client/components/Icons/MetricsSVG'
import SettingsSVG from 'client/components/Icons/SettingsSVG'
import AuditsSVG from 'client/components/Icons/AuditsSVG'
import useMenu from 'client/hooks/useMenu'
import AppMenu from 'client/components/AppMenu'
import {MenuPosition} from 'client/hooks/useCoords'
import ArrowDownSVG from 'client/components/Icons/ArrowDownSVG'
import Dot from 'client/components/Dot'
import useModal from 'client/hooks/useModal'
import NewOrgModal from 'client/components/NewOrgModal'
import isUserStaff from 'client/utils/isUserStaff'

interface Props {
  location?: any
  user: IUser
  orgName: string
}

const StyledRoot = styled.div({
  position: 'relative',
  backgroundColor: PALETTE.BACKGROUND_MAIN,
  overflow: 'hidden',
  borderRight: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  height: '100%',
  userSelect: 'none'
})

const NavContents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: 0,
  width: 250,
  overflowY: 'auto'
})

const MenuBlock = styled.div({
  height: 45,
  display: 'flex',
  flexDirection: 'row',
  fontSize: 15,
  padding: '0 15px',
  fontWeight: 500,
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'inherit',
  marginBottom: 50,
  transition: 'background-color 0.25s linear',
  ':hover': {
    backgroundColor: PALETTE.PRIMARY_MAIN_LIGHTEST,
    color: `${PALETTE.PRIMARY_MAIN} !important`
  }
})

const Footer = styled.div({
  marginBottom: 25
})

export const Brand = styled.div(({active}) => ({
  height: 25,
  width: 25,
  minWidth: 25,
  minHeight: 25,
  color: active ? PALETTE.PRIMARY_MAIN_DARK : PALETTE.TEXT_GRAY,
  borderRadius: 4,
  backgroundColor: '#fff',
  border: `1px solid ${active ? PALETTE.PRIMARY_MAIN : PALETTE.BORDER_MAIN_GRAY}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  marginRight: 10
}))

const Company = styled.div({
  lineHeight: '32px',
  marginRight: 5,
  ...textOverflow
})

const NavItems = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const Label = styled.div({
  // color: PALETTE.TEXT_MAIN,
  marginLeft: 15,
  fontWeight: 400,
  fontSize: 15
})

const NavItem = styled(NavLink)({
  textDecoration: 'none',
  borderRadius: 4,
  height: 30,
  lineHeight: '30px',
  paddingLeft: 10,
  margin: '2px 10px',
  opacity: 0.75,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  transition: 'all 0.25s ease-in-out',
  ':hover': {
    backgroundColor: PALETTE.BACKGROUND_HOVER_LIGHT,
    opacity: 1
  }
})

const NavSubItem = styled(NavLink)({
  textDecoration: 'none',
  color: PALETTE.TEXT_MAIN,
  borderRadius: 4,
  fontWeight: 400,
  height: 25,
  lineHeight: '25px',
  paddingLeft: 10,
  margin: '2px 10px 2px 40px',
  opacity: 0.75,
  fontSize: 14,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  transition: 'all 0.25s ease-in-out',
  ':hover': {
    backgroundColor: PALETTE.BACKGROUND_HOVER_LIGHT,
    color: PALETTE.TEXT_MAIN,
    opacity: 1
  }
})

const activeLinkStyles = {
  backgroundColor: `${PALETTE.BACKGROUND_HOVER} !important`,
  color: `${PALETTE.PRIMARY_MAIN} !important`,
  opacity: '1 !important'
}

const Sidebar = (props: Props) => {
  const {
    user,
    location,
    organizations,
    orgName = 'Human Lambdas',
    switchUserOrg,
    handleNewOrganization
  } = props
  const {email, name, current_organization_id} = user
  const isMetricRoute = location.pathname.includes('/metrics')
  const {menuPortal, togglePortal, originRef, menuProps} = useMenu(MenuPosition.UPPER_LEFT, {
    isDropdown: true
  })

  // Check if metrics are visible
  let metricsVisible = false
  organizations.map((org)=>{
    if(org.id === current_organization_id) {
      metricsVisible = org.metrics
    }
  })

  const {modalPortal, togglePortal: toggleModalPortal, closePortal: closeModalPortal} = useModal({})
  return (
    <StyledRoot>
      <NavContents>
        <div>
          <MenuBlock onClick={togglePortal}>
            <Brand ref={originRef} active={true}>
              {orgName.charAt(0)}
            </Brand>
            <Company>{orgName}</Company>
            <ArrowDownSVG />
          </MenuBlock>
          <NavItems>
            <ClassNames>
              {({css}) => {
                return (
                  <>
                    {isUserStaff(organizations, current_organization_id) && (
                      <>
                        <NavItem to={`/outstanding-queues`} activeClassName={css(activeLinkStyles)}>
                          <UsersIcon />
                          <Label>Outstanding Queues</Label>
                        </NavItem>
                        {!user.is_admin && (
                          <NavItem to={`/audits`} activeClassName={css(activeLinkStyles)}>
                            <AuditsSVG />
                            <Label>Audits</Label>
                          </NavItem>
                        )}
                      </>
                    )}

                    {!isUserStaff(organizations, current_organization_id) && (
                      <NavItem to={`/queues`} activeClassName={css(activeLinkStyles)}>
                        <QueueIcon />
                        <Label>Queues</Label>
                      </NavItem>
                    )}
                    {user.is_admin && (
                      <NavItem to={`/users`} activeClassName={css(activeLinkStyles)}>
                        <UsersIcon />
                        <Label>Users</Label>
                      </NavItem>
                    )}
                    {user.is_admin && (
                      <>
                        <NavItem to={`/audits`} activeClassName={css(activeLinkStyles)}>
                          <AuditsSVG />
                          <Label>Audits</Label>
                        </NavItem>
                        {!__OSS__ && metricsVisible && <NavItem to={`/metrics`} activeClassName={css(activeLinkStyles)}>
                          <MetricsIcon />
                          <Label>Metrics</Label>
                        </NavItem>}
                        {isMetricRoute && (
                          <>
                            <NavSubItem
                              exact
                              to={`/metrics`}
                              activeClassName={css(activeLinkStyles)}
                            >
                              <Dot color={PALETTE.LINK} />
                              <span>Overview</span>
                            </NavSubItem>
                            <NavSubItem
                              to={`/metrics/queues`}
                              activeClassName={css(activeLinkStyles)}
                            >
                              <Dot color={PALETTE.PRIMARY_GREEN} />
                              <span>Queues</span>
                            </NavSubItem>
                            <NavSubItem
                              to={`/metrics/workers`}
                              activeClassName={css(activeLinkStyles)}
                            >
                              <Dot color='#ff4c4c' />
                              <span>Workers</span>
                            </NavSubItem>
                          </>
                        )}
                      </>
                    )}
                  </>
                )
              }}
            </ClassNames>
          </NavItems>
        </div>
        <Footer>
          <NavItem to={`/settings/profile`}>
            <SettingsSVG />
            <Label>Settings</Label>
          </NavItem>
        </Footer>
      </NavContents>
      {menuPortal(
        <AppMenu
          togglePortal={togglePortal}
          toggleModalPortal={toggleModalPortal}
          organizations={organizations}
          switchUserOrg={switchUserOrg}
          menuProps={menuProps}
          name={name}
          email={email}
          current_organization_id={current_organization_id}
        />
      )}
      {modalPortal(
        <NewOrgModal closePortal={closeModalPortal} handleNewOrganization={handleNewOrganization} />
      )}
    </StyledRoot>
  )
}

export default withRouter(Sidebar)
