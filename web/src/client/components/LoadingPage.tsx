import React from 'react'
import hlLoading from 'styles/theme/images/hlLoading.svg'
import styled from '@emotion/styled'

const RootStyles = styled.div({
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  alignItems: 'center',
  backgroundColor: '#fff'
})

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: 100,
  alignItems: 'center',
  justifyContent: 'center'
})

const Brand = styled.img({
  height: '50px',
  width: '50px',
  marginBottom: 20
})

const LoadingPage = () => {
  return (
    <RootStyles>
      <Container>
        <img src={hlLoading} />
      </Container>
    </RootStyles>
  )
}

export default LoadingPage
