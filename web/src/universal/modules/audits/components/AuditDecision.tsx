import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from 'client/components/PlainButton'
import React, {Fragment, useEffect, useState} from 'react'
import {PALETTE} from 'universal/styles/palette'
import Icon from 'universal/components/Icon'

interface AuditDecisionProps {
  orgId: number
  queueId: number
  taskId: number
  correct: boolean
  onAuditDecision: (correct: boolean | null) => void
}

interface DecisionButtonProps extends PlainButtonProps {
  isApprove: boolean
  isActive: boolean
}

const DecisionButton = styled(PlainButton)((props: DecisionButtonProps) => {
  const {isApprove, isActive} = props
  const color = isApprove ? PALETTE.PRIMARY_GREEN : PALETTE.ERROR_MAIN

  return {
    width: 'auto',
    backgroundColor: isActive ? color : 'white',
    color: isActive ? 'white' : color,
    border: `1px solid ${isActive ? 'white' : color}`,
    fontSize: '14px',
    fontWeight: 500,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    outline: 0,
    transition: 'all 0.25s ease-in-out',
    ':hover': {
      boxShadow: `0 4px 8px ${isApprove ? 'rgba(0,173,69,0.05)' : 'rgba(255,74,0,0.05)'}`
    },
    ':active': {
      backgroundColor: isActive ? 'white' : color,
      color: isActive ? color : 'white',
      border: `1px solid ${isActive ? color : 'white'}`
    }
  }
})

const StyledIcon = styled(Icon)({
  margin: 0,
  padding: 0,
  fontSize: 16
})

/*
Key parameters:
- decision: true if the button is Approve, false if the button is Reject
- correct: current audit decision

We flip the state of the button by comparing decision and correct: ie if decision is true, the state can only flip between true and null.

The server takes some time to respond (onAuditDecision) which results in a feedback delay, so we change its state directly (setCorrectState) on click
*/
function clickHandler(
  onAuditDecision: (correct: boolean | null) => void,
  setCorrectState: (boolean) => void,
  correct: boolean,
  decision: boolean
) {
  const newDecision = correct === decision ? null : decision
  setCorrectState(newDecision)
  onAuditDecision(newDecision)
}

const AuditDecision = (props: AuditDecisionProps) => {
  const {correct, onAuditDecision} = props
  const [correctState, setCorrectState] = useState<boolean>(correct)

  useEffect(() => {
    setCorrectState(correct)
  }, [correct])

  return (
    <Fragment>
      <DecisionButton
        key='approve'
        type='button'
        onClick={() => {
          clickHandler(onAuditDecision, setCorrectState, correctState, true)
        }}
        isApprove={true}
        isActive={correctState === true}
      >
        <StyledIcon>done</StyledIcon>
      </DecisionButton>
      <DecisionButton
        key='reject'
        type='button'
        onClick={() => {
          clickHandler(onAuditDecision, setCorrectState, correctState, false)
        }}
        isApprove={false}
        isActive={correctState === false}
      >
        <StyledIcon>close</StyledIcon>
      </DecisionButton>
    </Fragment>
  )
}

export default AuditDecision
