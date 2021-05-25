import React, {forwardRef, Ref} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'
import {FONT_FAMILY} from 'styles/typography'
import StyledError from 'components/StyledError'

interface Props {
  autoComplete?: string
  autoFocus?: boolean
  disabled?: boolean
  isOptional?: boolean
  isRequired?: boolean
  label?: string
  name?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value?: string
  error?: string | false | undefined
  style?: object
  spellCheck?: boolean
}

interface InputProps {
  error?: string | false | undefined
  disabled?: boolean
}

const Input = styled.input(({error, disabled}: InputProps) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  border: `1px solid ${error ? PALETTE.ERROR_MAIN : PALETTE.BORDER_MAIN_GRAY}`,
  boxSizing: 'border-box',
  color: PALETTE.TEXT_MAIN,
  fontFamily: FONT_FAMILY.SANS_SERIF,
  fontWeight: 400,
  cursor: disabled ? 'not-allowed' : 'input',
  borderRadius: 4,
  fontSize: 15,
  lineHeight: '32px',
  backgroundColor: '#fff',
  height: 32,
  padding: '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    boxShadow: `0 0 0 3px ${error ? '#ffdacc' : PALETTE.BOX_SHADOW_PRIMARY}`,
    borderColor: error ? PALETTE.ERROR_MAIN : PALETTE.PRIMARY_MAIN
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
    onBlur,
    onFocus,
    onChange,
    placeholder,
    type = 'text',
    value,
    label,
    style,
    spellCheck
  } = props

  return (
    <>
      {label && (
        <StyledLabel>
          <Label>{label}</Label>
          {isRequired && <LabelHelper>Required</LabelHelper>}
          {isOptional && <LabelHelper>Optional</LabelHelper>}
        </StyledLabel>
      )}
      <Input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        ref={ref}
        type={type}
        value={value}
        error={Boolean(error)}
        spellCheck={spellCheck}
        style={style}
      />
      {error && <StyledError>{error}</StyledError>}
    </>
  )
})

export default InputField
