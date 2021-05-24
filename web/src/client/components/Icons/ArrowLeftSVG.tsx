import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const ArrowLeftSVG = memo(() => {
  return (
    <svg
      height='13'
      viewBox='0 0 515.555 515.555'
      width='13'
      xmlns='http://www.w3.org/2000/svg'
      fill={PALETTE.TEXT_MAIN}
    >
      <path d='M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z' />
    </svg>
  )
})

export default ArrowLeftSVG
