import React, {forwardRef, ReactNode, useEffect, useImperativeHandle, useRef} from 'react'
import styled from '@emotion/styled'
import MenuItemLabel from './MenuItemLabel'
import {PALETTE} from 'styles/palette'

export interface MenuItemProps {
  isActive: boolean
  activate: () => void
  closePortal: () => void
}

interface Props {
  isDisabled?: boolean
  label: ReactNode
  onClick?: (e: React.MouseEvent) => void
  onMouseEnter?: (e: React.MouseEvent) => void
  noCloseOnClick?: boolean
  extraSpace?: boolean
}

const MenuItemStyles = styled('div')<{isActive: boolean; extraSpace: boolean | undefined; isDisabled: boolean | undefined}>(
  ({isActive, isDisabled, extraSpace}) => ({
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: isActive ? PALETTE.BACKGROUND_LIGHT_GRAY : undefined,
    color: isDisabled ? PALETTE.TEXT_GRAY : PALETTE.TEXT_MAIN,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    display: 'block',
    marginTop: extraSpace ? 10 : 0,
    borderRadius: 4,
    '&:hover,:focus': {
      backgroundColor: isActive ? PALETTE.BACKGROUND_HOVER : PALETTE.BACKGROUND_HOVER_LIGHT,
      outline: 0
    }
  })
)

const MenuItem = forwardRef((props: Props, ref: any) => {
  const {isDisabled, label, noCloseOnClick, onMouseEnter, onClick, isActive, extraSpace} = props
  const itemRef = useRef<HTMLDivElement>(null)
  const {activate, closePortal} = ref as MenuItemProps

  const handleClick = (e) => {
    if (isDisabled) return
    if (noCloseOnClick) {
      activate()
    } else if (closePortal) {
      closePortal()
    }
    if (onClick) {
      onClick(e)
    }
  }

  useImperativeHandle(ref, () => ({
    onClick: handleClick
  }))

  return (
    <MenuItemStyles
      isDisabled={isDisabled}
      role='menuitem'
      ref={itemRef}
      isActive={isActive}
      extraSpace={extraSpace}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
    >
      {typeof label === 'string' ? <MenuItemLabel>{label}</MenuItemLabel> : label}
    </MenuItemStyles>
  )
})

export default MenuItem
