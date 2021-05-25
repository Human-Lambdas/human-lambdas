import React, {forwardRef} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from '../../client/styles/palette'
import getFirstLetter from 'universal/utils/getFirstLetter'

interface Props {
  initials: string
  diameter?: number
  color?: string
  onClick?: (e?: React.MouseEvent) => void
  style?: object
  trim?: boolean
}

const Avatar = forwardRef((props: Props, ref: any) => {
  const {initials, color, onClick, style, trim = true} = props

  const backgroundColor = color || PALETTE.PRIMARY_MAIN

  const AvatarBlock = styled.span({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    testAlign: 'center',
    height: `20px`,
    width: `20px`,
    minWidth: `20px`,
    fontWeight: 700,
    fontSize: 11,
    color: '#fff',
    borderRadius: '100%',
    backgroundColor: backgroundColor,
    userSelect: 'none',
    margin: '0px 2px'
  })

  return (
    <AvatarBlock ref={ref} onClick={onClick} style={style}>
      {trim ? getFirstLetter(initials) : initials}
    </AvatarBlock>
  )
})

export default Avatar
