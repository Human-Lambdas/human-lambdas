import React, {forwardRef} from 'react'
import styled from '@emotion/styled'
import ThreeDotsIcon from 'components/Icons/ThreeDotsSVG'
import {PALETTE} from 'styles/palette'
import PlainButton from 'components/PlainButton'

interface Props {
  onClick: any
  type?: string
}

const Container = styled(PlainButton)({
  cursor: 'pointer',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  width: 25,
  height: 25,
  padding: 0,
  margin: 0,
  transition: 'all 200ms ease-in',
  ':hover': {
    backgroundColor: PALETTE.BACKGROUND_HOVER
  }
})

const MenuButton = forwardRef((props: Props, ref: any) => {
  const {onClick, type} = props
  return (
    <Container ref={ref} onClick={onClick} type={type}>
      <ThreeDotsIcon />
    </Container>
  )
})

export default MenuButton
