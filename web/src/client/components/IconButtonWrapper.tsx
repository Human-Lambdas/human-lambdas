// TODO replace IconButton
import React, {forwardRef, ReactElement} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'
import PlainButton from 'components/PlainButton'

interface Props {
  onClick: any
  type: 'button' | 'submit' | 'reset' | undefined
  children: ReactElement
}

const Container = styled(PlainButton)({
  cursor: 'pointer',
  backgroundColor: 'inherit',
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

const IconButton = forwardRef((props: Props, ref: any) => {
  const {onClick, type, children} = props
  return (
    <Container ref={ref} onClick={onClick} type={type}>
      {children}
    </Container>
  )
})

export default IconButton
