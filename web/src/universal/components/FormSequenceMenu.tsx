import React from 'react'
import Menu from 'client/components/Menu'
import styled from '@emotion/styled'
import {MenuProps} from 'client/hooks/useMenu'
import MenuItem from 'client/components/MenuItem'

interface MenuItemProps {
  id: string
  name: string
  isActive: boolean
  stroke: string
}

interface Props {
  menuProps: MenuProps
  setActive: (id: string) => void
  menuItems: MenuItemProps
}

const MenuContainer = styled.div({
  width: 300
})

const FormSequenceMenu = (props: Props) => {
  const {menuProps, menuItems} = props
  return (
    <MenuContainer>
      <Menu ariaLabel={'Filter range'} {...menuProps}>
        {menuItems.map(({label, onClick}, idx) => (
          <MenuItem key={idx} label={label} onClick={onClick} noCloseOnClick={true} />
        ))}
      </Menu>
    </MenuContainer>
  )
}

export default FormSequenceMenu
