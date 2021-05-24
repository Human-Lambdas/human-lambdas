import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const QueueSVG = memo(() => {
  return (
    <svg
      height='15'
      viewBox='0 0 515.555 515.555'
      width='15'
      xmlns='http://www.w3.org/2000/svg'
      fill={PALETTE.TEXT_MAIN}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 426.667 426.667'>
        <path d='M341.333 53.333L256 138.667h64V288c0 23.573-19.093 42.667-42.667 42.667-23.573 0-42.667-19.093-42.667-42.667V138.667c0-47.04-38.293-85.333-85.333-85.333S64 91.627 64 138.667V288H0l85.333 85.333L170.667 288h-64V138.667c0-23.573 19.093-42.667 42.667-42.667S192 115.093 192 138.667V288c0 47.04 38.293 85.333 85.333 85.333S362.666 335.04 362.666 288V138.667h64l-85.333-85.334z' />
      </svg>
    </svg>
  )
})

export default QueueSVG
