import React from 'react'
import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from './PlainButton'
import {PALETTE} from 'styles/palette'

interface DangerButtonProps extends PlainButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  style?: object
  waiting?: boolean
}

const DangerButton = styled(PlainButton)<DangerButtonProps>((props) => {
  //const {waiting, disabled} = props
  //const isDisabled = disabled || waiting
  return {
    backgroundColor: '#fff',
    color: PALETTE.ERROR_MAIN,
    borderRadius: 4,
    outline: 0,
    border: `1px solid ${PALETTE.ERROR_MAIN}`,
    ':hover': {
      backgroundColor: '#fdeeee'
    },
    ':active, :focus': {
      boxShadow: `0 0 0 3px #f9cccc`,
      backgroundColor: '#fdeeee'
    }
  }
})

export default DangerButton
