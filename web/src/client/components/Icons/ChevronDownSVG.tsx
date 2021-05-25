import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const ChevronDownSVG = memo(() => {
  return (
    <svg
      height='13'
      width='13'
      xmlns='http://www.w3.org/2000/svg'
      fill={PALETTE.TEXT_MAIN}
      viewBox='0 0 407.437 407.437'
    >
      <path d='M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z' />
    </svg>
  )
})

export default ChevronDownSVG
