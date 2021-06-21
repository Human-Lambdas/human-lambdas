import React, {useCallback, useEffect} from 'react'
import styled from '@emotion/styled'
import {Formik, FormikHelpers} from 'formik'
import {AxiosRequestConfig} from 'axios'
import InputField from './InputField'
import {forgottenSchema} from 'universal/validations/yupSchema'
import useDocumentTitle from 'hooks/useDocumentTitle'
import FlatButton from 'components/FlatButton'
import useRouter from 'hooks/useRouter'
import useNetworker from 'hooks/useNetworker'
import {connect} from 'react-redux'
import LoginContainer from './LoginContainer'
import {
  addFailureNotification,
  addSuccessNotification
} from '../modules/notificationSystem/ducks/notificationSystemDuck'
import {FormikRoot, LinkButton} from './LoginPage'
import {APP_TOKEN_KEY} from 'utils/constants'

interface IProps {
  dispatch: any
}

interface Credentials {
  email: string
}

const FieldBlock = styled.div({
  marginBottom: 15
})

const ForgottenForm = (props: IProps) => {
  const {dispatch} = props
  useDocumentTitle('Forgotten password | Human Lambdas')
  const {history} = useRouter() as any
  const networker = useNetworker()

  useEffect(() => {
    ;(async function maybeLoggedIn() {
      const accessToken = await window.localStorage.getItem(APP_TOKEN_KEY)
      const {userId} = networker || {}
      if (userId && accessToken) {
        const {
          data: {current_organization_id},
          errors
        } = await networker.httpHandler(`/users/${userId}`, {method: 'GET'})
        if (errors === undefined && current_organization_id) {
          history.push(`/queues`)
        } else {
          console.error(`Error logging in user: ${userId}`)
        }
      }
    })()
  }, [networker])

  const handleSubmitCredentials = useCallback(
    async (credentials: Credentials, actions: FormikHelpers<Credentials>) => {
      const reqBody = {
        method: 'POST',
        data: credentials
      } as AxiosRequestConfig
      const response = await networker.httpHandler('/users/forgotten-password', reqBody)
      if (response.errors) {
        actions.setSubmitting(false)
      } else {
        dispatch(addSuccessNotification(response.data.message))
        actions.setSubmitting(false)
        history.push('/')
      }
    },
    [networker]
  )

  return (
    <FormikRoot>
      <Formik
        validateOnChange={true}
        validateOnBlur={true}
        initialValues={{email: ''}}
        validationSchema={forgottenSchema}
        onSubmit={handleSubmitCredentials}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange}) => (
          <LoginContainer tagLine={'Enter your email to reset your password'}>
            <FieldBlock>
              <InputField
                label='Email'
                type='text'
                name='email'
                value={values.email}
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldBlock>
            <FieldBlock>
              <FlatButton type='submit' disabled={isSubmitting || !isValid}>
                {__OSS__ ? "Create recovery link in server log": "Send recovery email"}
              </FlatButton>
            </FieldBlock>
            <LinkButton onClick={() => history.push('/')}>Already have an account?</LinkButton>
          </LoginContainer>
        )}
      </Formik>
    </FormikRoot>
  )
}

export default connect()(ForgottenForm)
