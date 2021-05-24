import React, {memo} from 'react'

interface CheckSVGProps {
  fill?: string
}

const CheckSVG = memo((props: CheckSVGProps) => {
  const {fill} = props
  return (
    <svg
      height='13'
      viewBox='0 0 515.555 515.555'
      width='13'
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
    >
      <path d='M0 274.226l176.549 176.886L515.556 112.44l-48.67-47.997-290.337 290L47.996 225.891z' />
    </svg>
  )
})

export default CheckSVG
