import * as React from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

interface Props {
  active?: boolean
  onToggle?: () => void
}

const ToggleWrapper = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const ToggleBlock = styled.div<Props>(({active}) => ({
  display: 'inline-block',
  width: '35px',
  height: '18px',
  borderRadius: '100px',
  position: 'relative',
  margin: 'auto',
  overflow: 'hidden',
  backgroundColor: active ? PALETTE.PRIMARY_MAIN : PALETTE.BACKGROUND_GRAY_MID,
  transition: 'all .3s ease-in-out',
  cursor: 'pointer',
  '::after': {
    backgroundColor: '#fff',
    borderRadius: '50%',
    content: '""',
    display: 'block',
    transition: 'transform 150ms, background-color 150ms',
    transform: active ? 'translateX(17px)' : 'none',
    left: 0,
    margin: '2px',
    position: 'absolute',
    top: 0,
    height: '14px',
    width: '14px'
  }
}))

const Toggle = (props: Props) => {
  const {active, onToggle} = props
  return (
    <ToggleWrapper onClick={onToggle}>
      <ToggleBlock active={active} />
    </ToggleWrapper>
  )
}

export default Toggle
