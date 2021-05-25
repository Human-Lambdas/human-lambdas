import React from 'react'
import Menu from './Menu'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'
import {Range} from 'utils/constants'

interface Props {
  menuProps: MenuProps
  setRange: (date: string) => void
}

const ChartFilterMenu = (props: Props) => {
  const {menuProps, setRange} = props
  return (
    <Menu ariaLabel={'Filter range'} {...menuProps}>
      <MenuItem label={'Day'} onClick={() => setRange(Range.DAILY)} />
      <MenuItem label={'Week'} onClick={() => setRange(Range.WEEKLY)} />
      <MenuItem label={'Month'} onClick={() => setRange(Range.MONTHLY)} />
    </Menu>
  )
}

export default ChartFilterMenu
