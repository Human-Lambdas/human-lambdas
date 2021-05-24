import React, {memo} from 'react'
import {PALETTE} from 'styles/palette'

interface Props {
  color: string
}

const FilterSVG = memo((props: Props) => {
  const {color} = props
  return (
    <svg
      height='15'
      viewBox='0 0 515.555 515.555'
      width='15'
      xmlns='http://www.w3.org/2000/svg'
      fill={color || PALETTE.TEXT_MAIN}
    >
      <path d='M178.5 382.5h102v-51h-102v51zM0 76.5v51h459v-51H0zM76.5 255h306v-51h-306v51z' />
    </svg>
  )
})

export default FilterSVG
