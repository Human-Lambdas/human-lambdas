import React from 'react'

export interface MarkProps {
  key: string
  content: string
  start: number
  end: number
  tag: string
  color?: string
  onClick: (any) => any
}

const Mark: React.FunctionComponent<MarkProps> = (props) => {
  const {color, start, end, content, tag, onClick} = props

  return (
    <mark
      style={{backgroundColor: color || '#84d2ff', padding: '0 4px', marginRight: '2px'}}
      data-start={start}
      data-end={end}
      onClick={() => onClick({start, end})}
    >
      {content}
      {tag && <span style={{fontSize: '0.7em', fontWeight: 500, marginLeft: 6}}>{tag}</span>}
    </mark>
  )
}

export default Mark
