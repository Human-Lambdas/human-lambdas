import React from 'react'
import Menu from './Menu'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'

interface Props {
  menuProps: MenuProps
  menuItems: any
}

const StandardMenu = (props: Props) => {
  const {menuProps, menuItems} = props
  return (
    <Menu ariaLabel={'Standard dropdown menu'} {...menuProps}>
      {menuItems.map(({label, onClick}, idx) => (
        <MenuItem key={idx} label={label} onClick={onClick} />
      ))}
    </Menu>
  )
}

export default StandardMenu
