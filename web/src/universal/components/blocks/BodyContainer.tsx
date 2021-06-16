import styled from '@emotion/styled'
import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
  row?: boolean
  style?: object
}

const BodyContainer = styled.div(({row}) => ({
  float: 'left',
  paddingTop: '10px',
  display: 'flex',
  height: '100%',
  flexDirection: row ? 'row' : 'column',
  zIndex: 11
}))

export default ({children, row, style}: Props) => (
  <BodyContainer style={style} row={row}>
    {children}
  </BodyContainer>
)
