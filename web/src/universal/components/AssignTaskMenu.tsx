import React from 'react'
import styled from '@emotion/styled'
import Menu from 'client/components/Menu'
import {MenuProps} from 'client/hooks/useMenu'
import MenuItem from 'client/components/MenuItem'
import {IUser} from 'universal/types/generic'
import Avatar from 'universal/components/Avatar'
import getInitials from 'universal/utils/getInitials'
import {colorFromString} from 'universal/utils/getColor'
import {avatarStyle} from 'universal/modules/task/components/Sidebar'

interface Props {
  assignedUser: number | null
  menuProps: MenuProps
  users: Array<IUser>
  onAssign: (userId: number | null, prevUserId: number | null) => void
}

const Item = styled.div({
  display: 'flex',
  flexDirection: 'row',
  padding: '5px',
  alignItems: 'center'
})

const Name = styled.div({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginLeft: 10
})

const Container = styled.div({
  maxWidth: 250
})

const AssignTaskMenu = (props: Props) => {
  const {users, assignedUser, menuProps, onAssign} = props
  return (
    <Container>
      <Menu ariaLabel={'Assign task'} {...menuProps}>
        {assignedUser && (
          <MenuItem
            label={
              <Item>
                <div style={avatarStyle} />
                <Name>Unassigned</Name>
              </Item>
            }
            onClick={() => onAssign(null, assignedUser)}
          />
        )}
        {users.map((user) => (
          <MenuItem
            label={
              <Item>
                <Avatar
                  initials={getInitials(user.name)}
                  color={colorFromString(user.name)}
                />
                <Name>{user.name}</Name>
              </Item>
            }
            onClick={() => onAssign(user.id, assignedUser)}
            key={user.id}
          />
        ))}
      </Menu>
    </Container>
  )
}

export default AssignTaskMenu
