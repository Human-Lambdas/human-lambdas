/**
 * WIP
 */
import React, {Ref, ReactNode, forwardRef} from 'react'
import styled from '@emotion/styled'
import RootButton, {RootButtonProps} from './RootButton'
import {PALETTE} from 'styles/palette'

export interface PlainButtonProps extends RootButtonProps {
  children?: ReactNode
  className?: string
  onClick?: React.MouseEventHandler
  style?: object
  hideFocus?: boolean
}

interface Props {
  disabled: boolean
}

const StyledButton = styled(RootButton)<Props>(
  (
    {
      /* disabled */
    }
  ) => {
    return {
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      alignItems: 'center',
      border: 0,
      textAlign: 'center',
      //boxShadow: '',
      //transition: `box-shadow…`,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      fontSize: 15,
      color: PALETTE.TEXT_MAIN,
      fontWeight: 500,
      lineHeight: '32px',
      height: '32px',
      padding: '0 15px',
      borderRadius: '4px',
      width: '100%',
      ':hover,:focus,:active': {
        //boxShadow: '',
        //outline:  ''
      }
    }
  }
)

const PlainButton = forwardRef((props: PlainButtonProps, ref: Ref<HTMLButtonElement>) => {
  const {children, className, disabled, waiting, onClick, style} = props
  const isDisabled = !!(disabled || waiting)
  return (
    <StyledButton
      {...props}
      className={className}
      waiting={waiting}
      disabled={isDisabled}
      onClick={onClick}
      ref={ref}
      style={style}
    >
      {children}
    </StyledButton>
  )
})

export default PlainButton
