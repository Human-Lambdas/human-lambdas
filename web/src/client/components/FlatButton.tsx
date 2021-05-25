import React from 'react'
import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from './PlainButton'
import {PALETTE} from 'styles/palette'

interface FlatButtonProps extends PlainButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  style?: object
  waiting?: boolean
}

const FlatButton = styled(PlainButton)<FlatButtonProps>((props) => {
  const {waiting, disabled} = props
  const isDisabled = disabled || waiting
  return {
    backgroundColor: PALETTE.PRIMARY_MAIN,
    color: '#fff',
    borderRadius: 4,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    outline: 0,
    ':hover': {
      backgroundColor: !isDisabled && PALETTE.PRIMARY_MAIN_DARK
    },
    ':active, :focus': {
      boxShadow: `0 0 0 3px ${PALETTE.BOX_SHADOW_PRIMARY}`,
      backgroundColor: !isDisabled && PALETTE.PRIMARY_MAIN_LIGHTER
    }
  }
})

export default FlatButton
