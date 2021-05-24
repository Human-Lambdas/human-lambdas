import React from 'react'

interface Props {
  rectangle: {x: number; y: number; w: number; h: number}
  borderWidth?: number
  color: string
}
const BBoxSelector: React.FC<Props> = ({rectangle, borderWidth = 2, color}) => {
  return (
    <div
      draggable={false}
      style={{
        left: `${rectangle.x}%`,
        top: `${rectangle.y}%`,
        width: `${rectangle.w}%`,
        height: `${rectangle.h}%`,
        border: `${borderWidth || 2}px solid ${color}`,
        borderWidth: `${borderWidth || 2}px`,
        position: 'absolute',
        pointerEvents: 'none'
      }}
    >
      <div
        draggable={false}
        style={{
          width: `100%`,
          height: `100%`,
          background: `${color}`,
          opacity: `0.2`
        }}
      ></div>
    </div>
  )
}
export default BBoxSelector
