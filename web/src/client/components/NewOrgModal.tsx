import React, {useCallback} from 'react'
import styled from '@emotion/styled'
import {Formik, Form} from 'formik'
import {organizationSchema} from 'universal/validations/yupSchema'
import InputField from 'universal/components/InputField'
import {PALETTE} from 'client/styles/palette'
import {BoxShadow} from 'client/utils/constants'
import SecondaryButton from 'universal/components/SecondaryButton'
import PrimaryButton from 'universal/components/PrimaryButton'

interface NewOrgProps {
  closePortal: () => void
  handleNewOrganization: (organizationName: string) => void
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

const FormContent = styled(Form)({
  padding: '50px 50px 30px'
})

const ButtonSection = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  justifyContent: 'space-between',
  paddingTop: '25px'
})

const NewOrgModal = ({closePortal, handleNewOrganization}: NewOrgProps) => {
  const onSubmitHandler = useCallback(
    (values, actions) => {
      handleNewOrganization(values)
      actions.setSubmitting()
      closePortal()
    },
    [closePortal, handleNewOrganization]
  )
  return (
    <ModalRoot>
      <Formik
        validateOnChange={true}
        initialValues={{name: ''}}
        validationSchema={organizationSchema}
        onSubmit={onSubmitHandler}
      >
        {({isSubmitting, values, handleChange}) => (
          <FormContent>
            <MainTitle>Add new organization</MainTitle>
            <InputField
              placeholder='Enter organization name'
              name='name'
              value={values.name}
              onChange={handleChange}
            />
            <ButtonSection>
              <SecondaryButton type='button' onClick={closePortal}>
                Cancel
              </SecondaryButton>
              <PrimaryButton type='submit' disabled={isSubmitting}>
                Create
              </PrimaryButton>
            </ButtonSection>
          </FormContent>
        )}
      </Formik>
    </ModalRoot>
  )
}

export default NewOrgModal
