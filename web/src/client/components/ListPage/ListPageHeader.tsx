import React, {memo, ReactElement} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

interface Props {
  pageHeader: ReactElement
}

const Container = styled.div({
  position: 'sticky',
  top: 0,
  backgroundColor: '#fff',
  width: '100%'
})

const StyledHeader = styled.header({
  paddingLeft: 35,
  display: 'grid',
  borderBottom: `1px solid ${PALETTE.BORDER_GRAY}`,
  width: '100%'
})

const ListPageHeader = memo((props: Props) => {
  const {pageHeader} = props
  return (
    <Container>
      <StyledHeader>{pageHeader}</StyledHeader>
    </Container>
  )
})

export default ListPageHeader
