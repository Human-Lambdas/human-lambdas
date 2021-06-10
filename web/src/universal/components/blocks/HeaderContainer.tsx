import styled from '@emotion/styled'
import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
  extendMargin?: boolean
}

interface HeaderProps {
  extendMargin?: boolean
}

const HeaderContainer = styled.div(({extendMargin}: HeaderProps) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: '0 0 auto',
  height: 'auto',
  background: 'white',
  zIndex: 11,
  position: 'relative',
  userSelect: 'none',
  marginLeft: extendMargin ? '10px' : 0
}))

export default ({children, extendMargin}: Props) => <HeaderContainer extendMargin={extendMargin}>{children}</HeaderContainer>
