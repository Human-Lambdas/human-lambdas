import React from 'react'
import styled from '@emotion/styled'
import Menu from './Menu'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'
import {PALETTE} from 'styles/palette'
import {IUser} from 'types/generic'

interface Props {
  menuProps: MenuProps
  user: any
  changeUserRole: (user: IUser, isAdmin: boolean) => void
}

const Container = styled.div({
  width: 220
})

const Title = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontSize: 15,
  fontWeight: 500,
  marginBottom: 2
})

const Desc = styled.div({
  fontSize: 13,
  color: PALETTE.TEXT_GRAY,
  fontWeight: 400
})

const MenuContainer = styled.div({
  padding: '5px 15px'
})

const UserRoleMenu = (props: Props) => {
  const {menuProps, user, changeUserRole} = props
  const CustomMenuItem = React.useCallback((props) => {
    return (
      <MenuContainer>
        <Title>
          <span>{props.title}</span>
        </Title>
        <Desc>{props.desc}</Desc>
      </MenuContainer>
    )
  }, [])

  return (
    <Container>
      <Menu ariaLabel={'Change user permissions'} {...menuProps}>
        <MenuItem
          label={
            <CustomMenuItem
              title='Admin'
              desc='Can create new queues, invite workers and change user permissions.'
            />
          }
          onClick={() => changeUserRole(user, true)}
        />
        <MenuItem
          label={
            <CustomMenuItem
              title='Worker'
              desc='Limited access. Can not create queues or invite workers.'
            />
          }
          onClick={() => changeUserRole(user, false)}
        />
      </Menu>
    </Container>
  )
}

export default UserRoleMenu
