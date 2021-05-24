// https://github.com/andreypopp/react-textarea-autosize
import React from 'react'
import TextArea from 'react-textarea-autosize'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import StyledError from 'universal/components/StyledError'

interface Props {
  autoFocus?: boolean
  minRows?: number
  isOptional?: boolean
  isRequired?: boolean
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  name?: string
  placeholder?: string
  value: string
  style?: object
  error?: string | undefined
  maxLength?: number
  disabled?: boolean
  readOnly?: boolean
}

interface StyledProps {
  disabled?: boolean
  readOnly?: boolean
}

const StyledTextArea = styled.textarea<StyledProps>(({disabled, readOnly, error}) => ({
  cursor: disabled || readOnly ? 'not-allowed' : 'input',
  backgroundColor: '#fff',
  borderRadius: 4,
  border: `1px solid ${error ? PALETTE.ERROR_MAIN : PALETTE.BORDER_MAIN_GRAY}`,
  color: PALETTE.TEXT_MAIN,
  display: 'block',
  fontSize: 15,
  overflow: 'hidden',
  outline: 'none',
  padding: '5px 10px',
  resize: 'none',
  width: '100%',
  transition: 'border-color 200ms ease-in',
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

const BasicTextArea = (props: Props) => {
  const {
    autoFocus,
    disabled,
    isOptional,
    isRequired,
    minRows,
    error,
    hideErrorMessage,
    maxLength,
    label,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    value,
    style,
    readOnly
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
      {error && !hideErrorMessage && <StyledError>{error}</StyledError>}
      <StyledTextArea
        autoFocus={autoFocus}
        disabled={disabled}
        minRows={minRows}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        style={style}
        value={value || ""}
        maxLength={maxLength}
        readOnly={readOnly}
        error={error}
      />
    </>
  )
}

export default BasicTextArea
