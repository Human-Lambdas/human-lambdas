import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const ArrowDownSVG = memo(() => {
  return (
    <svg
      height='13'
      viewBox='0 0 515.555 515.555'
      width='13'
      xmlns='http://www.w3.org/2000/svg'
      fill={PALETTE.TEXT_MAIN}
    >
      <path d='M400 216a23.928 23.928 0 01-16.971-7.029L256 81.941l-127.029 127.03a24 24 0 01-33.942-33.942l144-144a24 24 0 0133.942 0l144 144A24 24 0 01400 216zM272.971 480.971l144-144a24 24 0 00-33.942-33.942L256 430.059l-127.029-127.03a24 24 0 00-33.942 33.942l144 144a24 24 0 0033.942 0z' />
    </svg>
  )
})

export default ArrowDownSVG
