import React from 'react'
import styled from '@emotion/styled'
import {FONT_FAMILY} from 'styles/typography'
import {PALETTE} from 'styles/palette'

interface Props {
  svg?: any
  header: string
  subHeader: string
  button?: HTMLDivElement
}

const Wrapper = styled.div({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  fontFamily: FONT_FAMILY.SANS_SERIF
})

const Title = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontSize: 24,
  fontWeight: 500,
  margin: '20px 0 15px'
})

const SubTitle = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontSize: 16,
  fontWeight: 400,
  margin: '0px 0 20px',
  '> div > a': {
    color: PALETTE.PRIMARY_MAIN
  }
})

const EmptyPage = ({svg, header, subHeader, button}: Props) => {
  return (
    <Wrapper>
      {svg}
      <Title>{header}</Title>
      <SubTitle>{subHeader}</SubTitle>
      {button}
    </Wrapper>
  )
}

export default EmptyPage
