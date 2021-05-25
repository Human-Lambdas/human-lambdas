import React, {memo, ReactElement} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

interface Props {
  pageFooter: ReactElement
}

const Container = styled.div({
  position: 'fixed',
  bottom: '0px',
  height: 45,
  width: '100%',
  backgroundColor: '#fff'
})

const StyledFooter = styled.footer({
  paddingLeft: 35,
  paddingRight: 35,
  display: 'grid',
  borderTop: `1px solid ${PALETTE.BORDER_GRAY}`,
  width: '100%',
  position: 'relative'
})

const ListPageFooter = memo((props: Props) => {
  const {pageFooter} = props
  return (
    <Container>
      <StyledFooter>{pageFooter}</StyledFooter>
    </Container>
  )
})

export default ListPageFooter
