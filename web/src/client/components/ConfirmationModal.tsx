import React, {useCallback, ReactElement} from 'react'
import styled from '@emotion/styled'
import DangerButton from './DangerButton'
import {PALETTE} from 'styles/palette'
import {BoxShadow} from 'utils/constants'
import SecondaryButton from 'universal/components/SecondaryButton'

interface Props {
  closePortal: () => void
  onConfirm: () => void
  onCancel?: () => void
  message: ReactElement | undefined | string
  label?: string
  cancelLabel?: string
}

const ModalRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 450,
  borderRadius: 4,
  backgroundColor: '#fff',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  boxShadow: BoxShadow.MODAL
})

const Container = styled.div({
  padding: '25px 20px 15px'
})

const ButtonBlock = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  justifyContent: 'space-between',
  paddingTop: '25px'
})

const Message = styled.div({
  fontSize: 14,
  lineHeight: 1.4,
  color: PALETTE.TEXT_MAIN
})

const ConfirmationModal = ({
  closePortal,
  onCancel,
  message,
  onConfirm,
  label,
  cancelLabel
}: Props) => {
  const handleOnConfirm = useCallback(async () => {
    onConfirm && onConfirm()
    closePortal()
  }, [])
  const handleOnCancel = useCallback(async () => {
    onCancel && onCancel()
    closePortal()
  }, [])
  return (
    <ModalRoot>
      <Container>
        <Message>{message}</Message>
        <ButtonBlock>
          <SecondaryButton onClick={handleOnCancel} type='button'>
            {cancelLabel}
          </SecondaryButton>
          <DangerButton type='button' onClick={handleOnConfirm} style={{fontSize: 14}}>
            {label}
          </DangerButton>
        </ButtonBlock>
      </Container>
    </ModalRoot>
  )
}

ConfirmationModal.defaultProps = {
  label: 'Delete',
  cancelLabel: 'Cancel'
}

export default ConfirmationModal
