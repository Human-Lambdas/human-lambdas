import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const ThreeDotsSVG = memo(() => {
  return (
    <svg
      height='16'
      viewBox='0 0 515.555 515.555'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      fill={PALETTE.TEXT_MAIN}
    >
      <path d='M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0' />
    </svg>
  )
})

export default ThreeDotsSVG
