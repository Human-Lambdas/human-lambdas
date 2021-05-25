import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const MetricSVG = memo(() => {
  return (
    <svg
      height='15'
      viewBox='0 0 515.555 515.555'
      width='15'
      xmlns='http://www.w3.org/2000/svg'
      fill={PALETTE.TEXT_MAIN}
    >
      <path d='M298.667 85.333l48.96 48.96-104.107 104-85.333-85.333L0 311.147l30.187 30.186 128-128 85.333 85.334 134.187-134.294 48.96 48.96v-128z' />
    </svg>
  )
})

export default MetricSVG
