import styled from '@emotion/styled'
import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const HeaderContainer = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: '0 0 auto',
  height: 'auto',
  background: 'white',
  zIndex: 11,
  position: 'relative',
  userSelect: 'none'
})

export default ({children}: Props) => <HeaderContainer>{children}</HeaderContainer>
