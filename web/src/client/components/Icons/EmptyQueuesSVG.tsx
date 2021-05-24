import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

const EmptyQueuesSVG = memo(() => {
  return (    
    <svg xmlns="http://www.w3.org/2000/svg" 
      enableBackground="new 0 0 24 24"
      height={100} 
      viewBox="0 0 24 24" 
      width={100}
      fill={PALETTE.BACKGROUND_GRAY_MID}
    >
      <g>
        <rect fill="none" height="24" width="24"/>
        <rect fill="none" height="24" width="24"/>
        <rect fill="none" height="24" width="24"/>
      </g>
      <g>
      <g/>
      <path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
      </g>
    </svg>
  )
})

export default EmptyQueuesSVG
