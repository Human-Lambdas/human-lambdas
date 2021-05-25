import React from 'react'
import Menu from './Menu'
import styled from '@emotion/styled'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'
import Overflow from 'universal/styles/helpers/textOverflow'
import CheckSVG from './Icons/CheckSVG'
import Dot from 'components/Dot'
import {PALETTE} from 'styles/palette'

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

const Label = styled.span({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 35,
  padding: '0 10px'
})

const Container = styled.span({
  ...Overflow,
  maxWidth: 225
})

const StyledName = styled.span({
  marginLeft: 15
})

const EmptySVG = React.memo(() => {
  return (
    <svg
      height='13'
      viewBox='0 0 515.555 515.555'
      width='13'
      xmlns={'http://www.w3.org/2000/svg'}
    ></svg>
  )
})

const FilterMenu = (props: Props) => {
  const {menuProps, setActive, menuItems = []} = props
  const itemCount = menuItems.reduce((a, b) => (b.isActive === true ? ++a : a), 0)
  return (
    <MenuContainer>
      <Menu ariaLabel={'Filter range'} {...menuProps}>
        {menuItems.map(({id, name, isActive, stroke}: MenuItemProps) => (
          <MenuItem
            key={id}
            label={
              <Label>
                <Container>
                  {isActive ? (
                    <CheckSVG fill={itemCount === 1 ? PALETTE.TEXT_GRAY : PALETTE.PRIMARY_MAIN} />
                  ) : (
                    <EmptySVG />
                  )}
                  <StyledName>{name}</StyledName>
                </Container>
                <Dot color={stroke} />
              </Label>
            }
            noCloseOnClick={true}
            onClick={itemCount === 1 && isActive === true ? null : () => setActive(id)}
          />
        ))}
      </Menu>
    </MenuContainer>
  )
}

export default FilterMenu
