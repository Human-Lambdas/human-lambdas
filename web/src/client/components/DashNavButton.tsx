import React from 'react'
import styled from '@emotion/styled'
import Icon from './Icon'
import {ICON_SIZE} from '../styles/typography'
import {FONT_FAMILY} from '../styles/typography'

interface Props {
  icon?: string
  label: string
  togglePortal?: any
}

const Label = styled.div({
  flex: 1,
  wordBreak: 'break-word',
  fontFamily: FONT_FAMILY.SANS_SERIF
})

const StyledIcon = styled(Icon)({
  textAlign: 'left',
  display: 'block',
  fontSize: ICON_SIZE.MD18,
  marginRight: 10,
  color: 'inherit'
})

const InviteButton = styled.button({
  display: 'flex',
  color: 'inherit',
  fontSize: '15px',
  fontWeight: 400,
  padding: '8px 0',
  textDecoration: 'none',
  width: '100%',
  opacity: 0.9,
  textAlign: 'left',
  backgroundColor: 'inherit',
  border: 'none',
  transition: 'all 100ms ease-in',
  ':hover': {
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: 1
  },
  ':focus': {
    outline: 'none !important',
    border: 'none !important',
    WebkitBoxShadow: 'none !important',
    boxShadow: 'none !important'
  }
})

const DashNavButton = (props: Props) => {
  const {label, icon, togglePortal} = props
  return (
    <InviteButton title={label} onClick={togglePortal}>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <Label>{label}</Label>
    </InviteButton>
  )
}

export default DashNavButton
