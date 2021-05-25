import React from 'react'
import styled from '@emotion/styled'
import {Form} from 'formik'
import {PALETTE} from '../styles/palette'
import {FONT_FAMILY} from '../styles/typography'
import HLLogo from 'universal/styles/theme/logos/HLLogo'
import {BoxShadow} from 'client/utils/constants'

interface Props {
  children: any
  tagLine?: string
}

const Header = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
})

const Tagline = styled.div({
  marginTop: 15,
  marginBottom: 15,
  fontFamily: FONT_FAMILY.SANS_SERIF,
  color: PALETTE.TEXT_GRAY,
  fontWeight: 500,
  fontSize: 15
})

const Content = styled(Form)({
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  borderRadius: 4,
  backgroundColor: '#fff',
  boxShadow: BoxShadow.TOP_BAR
})

const BetaPill = styled.div({
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  right: 115,
  width: 48,
  height: 29,
  borderRadius: 100,
  // color: PALETTE.PRIMARY_MAIN,
  color: '#3E0BB0',
  fontWeight: 500,
  fontSize: 13,
  backgroundColor: '#A4E3FF'
})

const LoginContainer = (props: Props) => {
  const {children, tagLine} = props
  return (
    <Content>
      <Header>
        <HLLogo />
        <BetaPill>Beta</BetaPill>
        {tagLine && <Tagline>{tagLine}</Tagline>}
      </Header>
      {children}
    </Content>
  )
}

export default LoginContainer
