import React, {ReactElement} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import isEmptyArray from 'universal/utils/isEmptyArray'

export const APP_HEADER_HEIGHT = 50

interface AppHeaderProps {
  leftBarItems?: ReactElement
  midBarItems?: ReactElement
  rightBarItems?: ReactElement
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 25px',
  backgroundColor: PALETTE.BACKGROUND_MAIN,
  borderBottom: `1px solid ${PALETTE.BORDER_GRAY_NEW}`,
  minHeight: APP_HEADER_HEIGHT,
  minWidth: '100%'
})

const FlexItem = styled.div((prop) => {
  return {
    flex: '1 1 0',
    textAlign: prop.center ? 'center': 'inherit' 
  }
})

const AppHeader = (props: AppHeaderProps) => {
  const {leftBarItems, rightBarItems, midBarItems} = props
  return (
    <Container>
      <FlexItem>{rightBarItems}</FlexItem>
      {!isEmptyArray(rightBarItems) && <FlexItem center>{midBarItems}</FlexItem>}
      <FlexItem>{leftBarItems}</FlexItem>
    </Container>
  )
}

export default AppHeader
