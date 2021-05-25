import React, {memo} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

interface Props {
  autoFocus?: boolean
  disabled?: boolean
  id: string
  checked: boolean
  label: string
  command?: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const Label = styled.label(({disabled}) => ({
  background: '#fff',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  borderRadius: 4,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  cursor: disabled ? 'not-allowed' : 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 500,
  padding: '10px 10px 10px 45px',
  position: 'relative',
  userSelect: 'none',
  transition: '.3s ease all',
  width: '100%',
  '&::before': {
    background: PALETTE.BACKGROUND_MAIN,
    borderRadius: 2,
    border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
    content: '""',
    height: '20px',
    width: '20px',
    left: '10px',
    position: 'absolute',
    top: 'calc(50% - 10px)',
    transition: '.3s ease background-color'
  },
  ':hover': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
  },
  minHeight: '41.25px'
}))

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  &:checked + ${Label} {
    /* background: ${PALETTE.PRIMARY_MAIN_LIGHTEST}; */
    border-color: ${PALETTE.PRIMARY_MAIN};
  }
  &:checked + ${Label}:before {
    background-color: ${PALETTE.PRIMARY_MAIN};
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNiIgaGVpZ2h0PSIyMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIyLjAyOTY4IC00MC4wOTAzIDI2IDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdGVkIGJ5IElKU1ZHIChodHRwczovL2dpdGh1Yi5jb20vaWNvbmphci9JSlNWRyktLT48cGF0aCBkPSJNMjcuOTc0MywtMzYuMTI3MmMwLDAuNDQ2NDI4IC0wLjE1NjI1LDAuODI1ODkzIC0wLjQ2ODc1LDEuMTM4MzlsLTEyLjEyMDUsMTIuMTIwNWwtMi4yNzY3OSwyLjI3Njc5Yy0wLjMxMjUsMC4zMTI1IC0wLjY5MTk2NCwwLjQ2ODc1IC0xLjEzODM5LDAuNDY4NzVjLTAuNDQ2NDI4LDAgLTAuODI1ODkzLC0wLjE1NjI1IC0xLjEzODM5LC0wLjQ2ODc1bC0yLjI3Njc5LC0yLjI3Njc5bC02LjA2MDI3LC02LjA2MDI3Yy0wLjMxMjUsLTAuMzEyNSAtMC40Njg3NSwtMC42OTE5NjUgLTAuNDY4NzUsLTEuMTM4MzljMCwtMC40NDY0MjkgMC4xNTYyNSwtMC44MjU4OTMgMC40Njg3NSwtMS4xMzgzOWwyLjI3Njc5LC0yLjI3Njc5YzAuMzEyNSwtMC4zMTI1IDAuNjkxOTY1LC0wLjQ2ODc1IDEuMTM4MzksLTAuNDY4NzVjMC40NDY0MjksMCAwLjgyNTg5MywwLjE1NjI1IDEuMTM4MzksMC40Njg3NWw0LjkyMTg4LDQuOTM4NjJsMTAuOTgyMSwtMTAuOTk4OWMwLjMxMjUsLTAuMzEyNSAwLjY5MTk2NCwtMC40Njg3NSAxLjEzODM5LC0wLjQ2ODc1YzAuNDQ2NDI4LDAgMC44MjU4OTMsMC4xNTYyNSAxLjEzODM5LDAuNDY4NzVsMi4yNzY3OCwyLjI3Njc5YzAuMzEyNSwwLjMxMjUgMC40Njg3NSwwLjY5MTk2NCAwLjQ2ODc1LDEuMTM4MzlaIiB0cmFuc2Zvcm09InNjYWxlKDEuMDAxOTgpIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 9px;
  }
`

const Checkbox = memo((props: Props) => {
  const {autoFocus, disabled, id, checked, name, onChange, label, value} = props
  return (
    <>
      <Input
        autoFocus={autoFocus}
        disabled={disabled}
        checked={checked}
        id={id}
        name={name}
        type='checkbox'
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id} disabled={disabled}>
        <span>{label}</span>
      </Label>
    </>
  )
})

export default Checkbox
