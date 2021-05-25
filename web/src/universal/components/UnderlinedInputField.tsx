import React, {forwardRef, Ref, FocusEvent, ChangeEvent, KeyboardEvent} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import {FONT_FAMILY} from 'universal/styles/typography'
import Icon from 'universal/components/Icon'

interface Props {
  autoComplete?: string
  autoFocus?: boolean
  disabled?: boolean
  icon?: string
  name?: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value: string | number
  error?: string | false | undefined
  style?: object
  spellCheck?: boolean
  readOnly?: boolean
}

interface InputProps {
  error?: string | false | undefined
  disabled?: boolean
  icon?: string
}

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  position: 'relative'
})

const Input = styled.input(({error, disabled, icon}: InputProps) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  textAlign: 'center',
  border: 0,
  borderBottom: `1px solid ${error ? PALETTE.ERROR_MAIN : '#CACACB'}`,
  boxSizing: 'border-box',
  color: PALETTE.TEXT_MAIN,
  fontFamily: FONT_FAMILY.SANS_SERIF,
  fontWeight: 500,
  cursor: disabled ? 'not-allowed' : 'input',
  fontSize: 16,
  lineHeight: '32px',
  backgroundColor: 'inherit',
  height: 32,
  padding: icon ? '0 10px 0 30px' : '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    borderColor: error ? PALETTE.ERROR_MAIN : PALETTE.PRIMARY_MAIN
  }
}))

const StyledIcon = styled(Icon)({
  fontSize: 16,
  position: 'absolute',
  lineHeight: '32px',
  paddingLeft: 8
})

const UnderlinedInputField = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  const {
    autoComplete,
    autoFocus,
    disabled,
    error,
    name,
    onBlur,
    onFocus,
    onKeyDown,
    onChange,
    icon,
    placeholder,
    type = 'text',
    value,
    style,
    spellCheck,
    readOnly
  } = props

  return (
    <Wrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <Input
        icon={icon}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onChange={onChange}
        ref={ref}
        type={type}
        value={value}
        error={Boolean(error)}
        spellCheck={spellCheck}
        style={style}
        readOnly={readOnly}
      />
    </Wrapper>
  )
})

export default UnderlinedInputField
