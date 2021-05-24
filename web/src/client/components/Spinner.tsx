import React from 'react'
import {keyframes} from '@emotion/core'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

const keyframesSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div({
  border: `2px solid ${PALETTE.BORDER_GRAY}`,
  borderRadius: '50%',
  borderTop: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  width: 20,
  height: 20,
  animationName: keyframesSpin.toString(),
  animationDuration: '1s',
  animationIterationCount: 'infinite'
})

const Spinner = () => <Loader />

export default Spinner
