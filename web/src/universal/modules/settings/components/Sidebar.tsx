import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import {ClassNames} from '@emotion/core'
import {NavLink} from 'react-router-dom'
import {PALETTE} from 'universal/styles/palette'
import {IUser} from 'universal/types/generic'
import IconButton from 'client/components/IconButton'
import useRouter from 'client/hooks/useRouter'

interface Props {
  user: IUser
  orgId: string
  isStaff: boolean
}

const SidebarContainer = styled.div({
  position: 'relative',
  backgroundColor: PALETTE.BACKGROUND_MAIN,
  width: 250,
  overflow: 'hidden',
  borderRight: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  height: '100%',
  userSelect: 'none'
})

const NavContents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: 0,
  overflowY: 'auto'
})

const NavBlock = styled.div({
  height: 50,
  display: 'flex',
  flexDirection: 'row',
  margin: '25px 25px 0'
})

const NavItems = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const NavSection = styled.div({
  color: PALETTE.TEXT_GRAY,
  fontSize: 13,
  fontWeight: 500,
  paddingLeft: 25,
  textTransform: 'uppercase',
  marginBottom: 10,
  marginTop: 45
})

const NavItem = styled(NavLink)({
  textDecoration: 'none',
  color: PALETTE.TEXT_MAIN,
  borderRadius: 4,
  fontWeight: 400,
  height: 30,
  lineHeight: '30px',
  paddingLeft: 15,
  margin: '2px 10px',
  opacity: 0.75,
  fontSize: 15,
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
  const {user, isStaff} = props
  const {is_admin: isAdmin} = user || {}
  const {history} = useRouter() as any
  return (
    <SidebarContainer>
      <NavContents>
        <NavBlock>
          <IconButton
            icon='arrow_back'
            onClick={() => {
              const queuesLink = isStaff ? '/outstanding-queues' : '/queues'
              history.push(queuesLink)
            }}
          />
        </NavBlock>
        <NavItems>
          <ClassNames>
            {({css}) => {
              return (
                <>
                  <NavSection>Me</NavSection>
                  <NavItem to={`/settings/profile`} activeClassName={css(activeLinkStyles)}>
                    Profile
                  </NavItem>
                  <NavItem to={`/settings/password`} activeClassName={css(activeLinkStyles)}>
                    Password
                  </NavItem>
                  <NavItem to={`/settings/notifications`} activeClassName={css(activeLinkStyles)}>
                    Notifications
                  </NavItem>
                  {isAdmin && (
                    <>
                      <NavSection>Organization</NavSection>
                      <NavItem to={`/settings/company`} activeClassName={css(activeLinkStyles)}>
                        Company
                      </NavItem>
                      <NavItem to={`/settings/api`} activeClassName={css(activeLinkStyles)}>
                        API
                      </NavItem>
                    </>
                  )}
                </>
              )
            }}
          </ClassNames>
        </NavItems>
      </NavContents>
    </SidebarContainer>
  )
}

const mapStateToProps = (state: any) => ({
  isStaff: state.currentUser.isStaff
})

export default connect(mapStateToProps, null)(Sidebar)
