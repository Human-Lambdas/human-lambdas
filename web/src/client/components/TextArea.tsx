// https://github.com/andreypopp/react-textarea-autosize
import React, {forwardRef} from 'react'
import TextArea from 'react-textarea-autosize'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'
import StyledError from 'components/StyledError'

interface Props {
  autoFocus?: boolean
  minRows?: number
  maxRows?: number
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
  error?: string | undefined | boolean
  maxLength?: number
  disabled?: boolean
  cacheMeasurements?: boolean
  readOnly?: boolean
  positionErrorBelow: boolean
  scrollable: boolean
}

const StyledTextArea = styled(TextArea)(({error, disabled, readOnly, scrollable}) => ({
  cursor: disabled || readOnly ? 'not-allowed' : 'text',
  backgroundColor: '#fff',
  borderRadius: 4,
  border: `1px solid ${error === 'true' ? PALETTE.ERROR_MAIN : PALETTE.BORDER_MAIN_GRAY}`,
  color: PALETTE.TEXT_MAIN,
  display: 'block',
  fontSize: 15,
  overflow: scrollable ? 'auto' : 'hidden',
  outline: 'none',
  padding: '5px 10px',
  resize: 'none',
  width: '100%',
  transition: 'border-color 200ms ease-in',
  ':focus': {
    borderColor: error === 'true' ? PALETTE.ERROR_MAIN : PALETTE.PRIMARY_MAIN
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

const BasicTextArea = forwardRef((props: Props, ref: any) => {
  const {
    autoFocus,
    disabled,
    isOptional,
    isRequired,
    minRows,
    maxRows,
    error,
    maxLength,
    label,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    value,
    style,
    cacheMeasurements,
    readOnly,
    positionErrorBelow,
    scrollable
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
      {!positionErrorBelow && error && <StyledError>{error}</StyledError>}
      <StyledTextArea
        ref={ref}
        autoFocus={autoFocus}
        disabled={disabled}
        minRows={minRows}
        maxRows={maxRows}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        style={style}
        value={value}
        maxLength={maxLength}
        error={String(Boolean(error))}
        cacheMeasurements={cacheMeasurements}
        readOnly={readOnly}
      />
      {positionErrorBelow && error && <StyledError>{error}</StyledError>}
    </>
  )
})

BasicTextArea.defaultProps = {
  positionErrorBelow: true,
  scrollable: false
}

export default BasicTextArea
