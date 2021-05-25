import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const EmptyMetricsSVG = memo(() => {
  return (
    <svg
      fill={PALETTE.BACKGROUND_GRAY_MID}
      height={100}
      width={100}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
  )
})

export default EmptyMetricsSVG
