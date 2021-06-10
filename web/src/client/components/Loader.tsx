import React from 'react'
import styled from '@emotion/styled'
import hlLoading from 'styles/theme/images/hlLoading.svg'

interface LoaderProps {
  height?: string | number
  width?: string | number
}

const StyledLoader = styled('div')<LoaderProps>(
  ({height = 'fill-available', width = 'fill-available'}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '0 auto',
    top: '40%',
    height,
    width
  })
)

const Loader = () => {
  return (
    <StyledLoader height={100} width={100}>
      <img src={hlLoading} />
    </StyledLoader>
  )
}

export default Loader
