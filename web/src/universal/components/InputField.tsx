import React, {forwardRef, Ref} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import {FONT_FAMILY} from 'universal/styles/typography'
import StyledError from 'universal/components/StyledError'

interface Props {
  autoComplete?: string
  autoFocus?: boolean
  disabled?: boolean
  containerStyles?: object
  isOptional?: boolean
  isRequired?: boolean
  label?: string
  name?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.ChangeEvent<HTMLInputElement>) => void
  pattern?: string
  placeholder?: string
  type?: string
  value: string | number
  error?: string | false | undefined
  hideErrorMessage?: boolean
  style?: object
  spellCheck?: boolean
  readOnly?: boolean
}

interface InputProps {
  error?: string | false | undefined
  disabled?: boolean
}

const Input = styled.input(({error, disabled, readOnly}: InputProps) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  border: `1px solid ${error ? PALETTE.ERROR_MAIN : PALETTE.BORDER_MAIN_GRAY}`,
  boxSizing: 'border-box',
  color: PALETTE.TEXT_MAIN,
  fontFamily: FONT_FAMILY.SANS_SERIF,
  fontWeight: 400,
  cursor: disabled || readOnly ? 'not-allowed' : 'input',
  borderRadius: 4,
  fontSize: 15,
  lineHeight: '32px',
  backgroundColor: '#fff',
  height: 32,
  padding: '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    borderColor: error ? PALETTE.ERROR_MAIN : PALETTE.PRIMARY_MAIN
  },
  ':hover': {
    borderColor: !readOnly && PALETTE.BORDER_HOVER
  },
  ':active, :focus': {
    borderColor: !readOnly && PALETTE.PRIMARY_MAIN
  }
}))

const Label = styled.div({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: PALETTE.TEXT_MAIN
})

const StyledLabel = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 5
})

const LabelHelper = styled.div({
  fontSize: 12,
  fontWeight: 400,
  color: PALETTE.TEXT_GRAY,
  marginLeft: 6
})

const InputField = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  const {
    autoComplete,
    autoFocus,
    disabled,
    error,
    isOptional,
    isRequired,
    name,
    hideErrorMessage,
    onBlur,
    onFocus,
    onChange,
    onKeyDown,
    pattern,
    placeholder,
    value,
    label,
    style,
    spellCheck,
    readOnly,
    containerStyles,
    type
  } = props

  return (
    <div style={{...containerStyles}}>
      {label && (
        <StyledLabel>
          <Label>{label}</Label>
          {isRequired && <LabelHelper>Required</LabelHelper>}
          {isOptional && <LabelHelper>Optional</LabelHelper>}
        </StyledLabel>
      )}
      {error && !hideErrorMessage && <StyledError>{error}</StyledError>}
      <Input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={ref}
        type={type || 'text'}
        value={value}
        error={Boolean(error) && Boolean(value !== '')}
        spellCheck={spellCheck}
        style={style}
        readOnly={readOnly}
      />
    </div>
  )
})

export default InputField
