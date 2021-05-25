import styled from '@emotion/styled'
import {ButtonHTMLAttributes} from 'react'

export interface RootButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  waiting?: boolean
  disabled?: boolean
}

const disabledStyles = {
  cursor: 'not-allowed',
  opacity: 0.5,
  ':active': {
    animation: 'none'
  },
  ':hover,:focus,:active,:disabled': {
    boxShadow: 'none'
  },
  ':hover,:focus': {
    opacity: 0.5
  }
}

const RootButton = styled.button<RootButtonProps>(
  ({disabled, waiting}) => (disabled || waiting ? disabledStyles : undefined),
  ({waiting}) => ({cursor: waiting ? 'wait' : undefined}),
  {
    border: 0,
    margin: 0,
    padding: 0,
    outline: 0,
    background: 'inherit',
    borderRadius: 0,
    appearance: 'none',
    color: 'inherit',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    textAlign: 'inherit'
  }
)

export default RootButton
