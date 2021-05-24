import React from 'react'
import styled from '@emotion/styled'
import {FONT_FAMILY} from 'styles/typography'
import {PALETTE} from 'styles/palette'
import ErrorSVG from './ErrorSVG'

interface Iprops {
  error?: Error
  title: string
  message?: string
}

const ErrorWrapper = styled.div({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
  fontFamily: FONT_FAMILY.SANS_SERIF,
  textAlign: 'center'
})

const Title = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontSize: 24,
  fontWeight: 500,
  margin: '20px 0 15px'
})

const ErrorMsg = styled.div({
  color: PALETTE.TEXT_GRAY,
  fontSize: 15,
  fontWeight: 400
})

const Error = (props: Iprops) => {
  const {error, message, title} = props
  if (error) console.error(error)
  return (
    <ErrorWrapper>
      <ErrorSVG />
      <Title>{title}</Title>
      {message && <ErrorMsg>{message}</ErrorMsg>}
    </ErrorWrapper>
  )
}

export default Error
