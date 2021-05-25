import React, {useCallback} from 'react'
import {Formik, Form} from 'formik'
import {AxiosRequestConfig} from 'axios'
import InputField from 'universal/components/InputField'
import PrimaryButton from 'universal/components/PrimaryButton'
import {IUser} from 'universal/types/generic'
import {
  addFailureNotification,
  addSuccessNotification
} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import useNetworker from 'client/hooks/useNetworker'
import {connect} from 'react-redux'
import {ChangePasswordSchema} from 'universal/validations/yupSchema'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import FieldLine from '../components/FieldLine'
import ButtonFieldLine from '../components/ButtonFieldLine'

interface Props {
  isLoading?: boolean
  saved?: string
  user: IUser
  handleSubmit: (values: object) => null
  addFailureNotification?: Function
  addSuccessNotification?: Function
}

interface IPasswords {
  currentPassword: string
  newPassword: string
}

const PasswordContainer = (props: Props) => {
  const networker = useNetworker()

  const handleSubmitPassword = useCallback(
    async (passwords: IPasswords, actions: any) => {
      const passwordReqBody = {
        method: 'PATCH',
        data: {
          currentPassword: passwords.currentPassword,
          password: passwords.newPassword
        }
      } as AxiosRequestConfig

      const {userId} = networker

      const url = `/users/${userId}`

      const response = await networker.httpHandler(url, passwordReqBody)

      if (response.errors) {
        response.errors.forEach((e) => {
          props.addFailureNotification(e.message)
        })
      } else {
        props.addSuccessNotification('Your password has been changed!')
      }

      actions.resetForm()
    },
    [networker]
  )

  return (
    <PageWrapper>
      <Formik
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={ChangePasswordSchema}
        initialValues={{currentPassword: '', newPassword: ''}}
        onSubmit={handleSubmitPassword}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange}) => (
          <Form>
            <Title>Change Password</Title>
            <FieldLine>
              <InputField
                type='password'
                autoComplete='on'
                name='currentPassword'
                placeholder='*********'
                value={values.currentPassword}
                error={touched.currentPassword && errors.currentPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isRequired={true}
                label={'Current Password'}
              />
            </FieldLine>
            <FieldLine>
              <InputField
                type='password'
                autoComplete='on'
                name='newPassword'
                placeholder='*********'
                error={touched.newPassword && errors.newPassword}
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isRequired={true}
                label='New Password'
              />
            </FieldLine>
            <ButtonFieldLine>
              <div />
              <PrimaryButton type='submit' disabled={!isValid || isSubmitting}>
                Save
              </PrimaryButton>
            </ButtonFieldLine>
          </Form>
        )}
      </Formik>
    </PageWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(PasswordContainer)
