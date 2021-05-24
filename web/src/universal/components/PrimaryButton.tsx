import React from 'react'
import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from '../../client/components/PlainButton'
import {PALETTE} from 'universal/styles/palette'

interface PrimaryButtonProps extends PlainButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  style?: object
  waiting?: boolean
  hideFocus?: boolean
}

const PrimaryButton = styled(PlainButton)<PrimaryButtonProps>((props) => {
  const {hideFocus} = props
  //const isDisabled = disabled || waiting
  return {
    width: 'fit-content',
    lineHeight: '22px',
    color: '#fff',
    backgroundColor: PALETTE.PRIMARY_MAIN,
    fontWeight: 500,
    fontSize: 14,
    outline: 0,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    margin: 0,
    borderRadius: 4,
    border: `1px solid transparent`,
    transition: 'all 0.25s ease-in-out',
    padding: '0 10px',
    ':hover': {
      backgroundColor: PALETTE.PRIMARY_MAIN_DARK,
      border: `1px solid ${PALETTE.PRIMARY_MAIN_DARK}`
    },
    ...(!hideFocus && {
      ':focus, :active': {
        backgroundColor: PALETTE.PRIMARY_MAIN_DARK,
        border: `1px solid ${PALETTE.PRIMARY_MAIN_DARK}`
      }
    })
  }
})

export default PrimaryButton
