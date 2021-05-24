import React, {useCallback} from 'react'
import styled from '@emotion/styled'
import FlatButton from './FlatButton'
import {Formik, Form} from 'formik'
import {emailListSchema} from 'universal/validations/yupSchema'
import TextArea from './TextArea'
import {PALETTE} from 'styles/palette'
import {BoxShadow} from 'utils/constants'
import SecondaryButton from 'universal/components/SecondaryButton'

interface InvitationProps {
  closePortal: () => void
  handleUsersInvite: (emails: string) => void
}

const ModalRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 500,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  boxShadow: BoxShadow.MODAL
})

const MainTitle = styled.div({
  fontSize: 22,
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  marginBottom: 35
})

const SubTitle = styled.div({
  marginBottom: 18,
  fontWeight: 500
})

const FormContent = styled(Form)({
  padding: '50px 50px 30px'
})

const SubmissionSection = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  justifyContent: 'space-between',
  paddingTop: '25px'
})

const InvitationModal = ({closePortal, handleUsersInvite}: InvitationProps) => {
  const onSubmitHandler = useCallback(
    (values, actions) => {
      handleUsersInvite(values)
      actions.setSubmitting()
      closePortal()
    },
    [closePortal, handleUsersInvite]
  )
  return (
    <ModalRoot>
      <Formik
        validateOnChange={true}
        validateOnBlur={true}
        initialValues={{emails: ''}}
        validationSchema={emailListSchema}
        onSubmit={onSubmitHandler}
      >
        {({isSubmitting, isValid, values, handleChange, handleBlur}) => (
          <FormContent>
            <MainTitle>Invite workers to team</MainTitle>
            <SubTitle>Send invites by email:</SubTitle>
            <TextArea
              placeholder='mike@humanlambdas.com, jeff@humanlambdas.com, sarah@humanlambdas.com, alice@humanlambdas.com'
              name='emails'
              value={values.emails}
              onChange={handleChange}
              onBlur={handleBlur}
              minRows={5}
            />
            <SubmissionSection>
              <SecondaryButton type='button' onClick={closePortal}>
                Cancel
              </SecondaryButton>
              <FlatButton type='submit' disabled={isSubmitting || !isValid}>
                Send Invitation
              </FlatButton>
            </SubmissionSection>
          </FormContent>
        )}
      </Formik>
    </ModalRoot>
  )
}

export default InvitationModal
