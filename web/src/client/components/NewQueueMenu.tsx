import React from 'react'
import styled from '@emotion/styled'
import Menu from './Menu'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'
import {PALETTE} from 'styles/palette'
import Icon from 'components/Icon'

interface Props {
  menuProps: MenuProps
  menuItems: any
}

const StyledIcon = styled(Icon)({
  display: 'block',
  color: PALETTE.TEXT_GRAY,
  marginRight: 15,
  fontSize: 18
})

const Label = styled.div({
  display: 'flex',
  flexDirection: 'row',
  fontSize: 15,
  fontWeight: 400,
  padding: '5px 15px',
  color: PALETTE.TEXT_MAIN
})

const NewQueueMenu = (props: Props) => {
  const {menuProps, menuItems} = props
  return (
    <Menu ariaLabel={'Add queue tasks'} {...menuProps}>
      {menuItems.map(({icon, label, onClick}, idx) => (
        <MenuItem
          key={idx}
          label={
            <Label>
              <StyledIcon>{icon}</StyledIcon>
              <span>{label}</span>
            </Label>
          }
          onClick={onClick}
        />
      ))}
    </Menu>
  )
}

export default NewQueueMenu
