import * as React from 'react'
import styled from '@emotion/styled'

interface DotProps {
  color: string
}

const StyledDot = styled.div<{color?: string}>(({color}) => ({
  height: 10,
  width: 10,
  borderRadius: 50,
  backgroundColor: color,
  marginRight: 10
}))

const Dot = React.memo((props: DotProps) => {
  const {color} = props
  return <StyledDot color={color} />
})

export default Dot
