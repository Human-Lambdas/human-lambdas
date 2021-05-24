import React from 'react'
import styled from '@emotion/styled'
import FilterMenu from 'components/FilterMenu'
import useMenu from 'hooks/useMenu'
import {MenuPosition} from 'hooks/useCoords'
import RangeFilterMenu from 'components/RangeFilterMenu'
import {Range} from 'utils/constants'
import MenuButton from 'components/MenuButton'

interface Props {
  range: string
  setRange: (range: any) => void
  setActive: (id: string) => void
  filter?: boolean
  menuItems: any
}

interface DotProps {
  color?: boolean
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center'
})

const MenuBlock = styled.div({
  display: 'flex',
  flexDirection: 'row'
})

const FilterBlock = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: 25
})

const Label = styled.span({
  fontWeight: 500,
  fontSize: 15,
  marginRight: 5
})

const Dot = styled.div(({color}: DotProps) => ({
  height: 10,
  width: 10,
  borderRadius: 50,
  margin: 2,
  backgroundColor: color
}))

const ChartHeader = (props: Props) => {
  const {range, menuItems = [], setRange, setActive, filter} = props
  const dots = filter ? menuItems.filter((w) => w.isActive) : menuItems
  const {menuPortal, togglePortal, originRef, menuProps} = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true
  })
  const {
    menuPortal: menuPortalFilter,
    togglePortal: togglePortalFilter,
    originRef: originRefFilter,
    menuProps: menuPropsFilter
  } = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true
  })
  return (
    <Container>
      <MenuBlock>
        {filter && (
          <FilterBlock>
            {dots.map((item, idx) => (
              <Dot key={idx} color={item.stroke} />
            ))}
            <MenuButton type='button' onClick={togglePortalFilter} ref={originRefFilter} />
          </FilterBlock>
        )}
        <FilterBlock>
          <Label>{range === Range.DAILY ? 'Day' : range === Range.WEEKLY ? 'Week' : 'Month'}</Label>
          <MenuButton type='button' onClick={togglePortal} ref={originRef} />
        </FilterBlock>
      </MenuBlock>
      {menuPortal(<RangeFilterMenu menuProps={menuProps} setRange={setRange} />)}
      {menuPortalFilter(
        <FilterMenu menuProps={menuPropsFilter} menuItems={menuItems} setActive={setActive} />
      )}
    </Container>
  )
}

export default ChartHeader
