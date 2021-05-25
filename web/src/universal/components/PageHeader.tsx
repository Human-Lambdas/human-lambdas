import React, {ReactElement} from 'react'
import styled from '@emotion/styled'

interface AppHeaderProps {
  leftBarItems?: ReactElement
  rightBarItems?: ReactElement
}

const Container = styled.div<{multiColumn: boolean}>(({multiColumn}) => ({
  display: 'grid',
  gridTemplateColumns: multiColumn ? '50% 50%' : '1fr',
  gridColumnGap: 50,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '95px 80px 40px',
  backgroundColor: '#fff'
}))

const AppHeader = (props: AppHeaderProps) => {
  const {leftBarItems, rightBarItems} = props
  return (
    <Container multiColumn={rightBarItems && leftBarItems}>
      <div>{leftBarItems}</div>
      <div>{rightBarItems}</div>
    </Container>
  )
}

export default AppHeader
