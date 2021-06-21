import React from 'react'
import styled from '@emotion/styled'
import UnderlinedInputField from 'universal/components/UnderlinedInputField'
import PrimaryButton from 'universal/components/PrimaryButton'
import SecondaryButton from 'universal/components/SecondaryButton'
import useRouter from 'client/hooks/useRouter'
import AppHeader from 'universal/components/AppHeader'

interface BuilderHeaderProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  queueId?: number
  value: string
  error?: string
  isValid: boolean
  setQueueHasChanges: any
  queueHasChanges: boolean
  toggleConfirmation: any
}

const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '300px',
  margin: '0 auto',
})

const BuilderHeader = (props: BuilderHeaderProps) => {
  const {
    queueId,
    isValid,
    handleChange,
    handleBlur,
    value,
    error,
    setQueueHasChanges,
    queueHasChanges,
    toggleConfirmation,
    isTemplate
  } = props
  const {history} = useRouter() as any
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.target.blur()
    }
  }
  const cancelUrl = queueId && !isTemplate ? `/queues/${queueId}` : `/queues`
  return (
    <AppHeader
      leftBarItems={
        <SecondaryButton
          type='button'
          onClick={() => {
            if (isValid && queueHasChanges) {
              toggleConfirmation()
            } else {
              history.replace(cancelUrl)
            }
          }}
        >
          Cancel
        </SecondaryButton>
      }
      midBarItems={
        <InputWrapper>
          <UnderlinedInputField
            onKeyDown={handleKeyPress}
            icon={'edit'}
            autoComplete='off'
            autoFocus={false}
            name='name'
            type='text'
            onChange={(e) => {
              setQueueHasChanges(true)
              handleChange(e)
            }}
            onBlur={handleBlur}
            value={value}
            error={error}
            placeholder={'Queue Title'}
          />
        </InputWrapper>
      }
      rightBarItems={
        <PrimaryButton disabled={!isValid} type='submit' style={{float: 'right'}}>
          {queueId ? 'Save' : 'Create'}
        </PrimaryButton>
      }
    />
  )
}

export default BuilderHeader
