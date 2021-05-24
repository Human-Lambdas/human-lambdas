import React, {useCallback} from 'react'
import {Formik, FormikHelpers} from 'formik'
import {AxiosRequestConfig} from 'axios'
import InputField from './InputField'
import {resetSchema} from 'universal/validations/yupSchema'
import useDocumentTitle from 'hooks/useDocumentTitle'
import FlatButton from 'components/FlatButton'
import useRouter from 'hooks/useRouter'
import useNetworker from 'hooks/useNetworker'
import {
  addFailureNotification,
  addSuccessNotification
} from 'modules/notificationSystem/ducks/notificationSystemDuck'
import {connect} from 'react-redux'
import CheckValidInviteToken from './CheckValidToken'
import LoginContainer from './LoginContainer'
import {FormikRoot, FieldBlock} from './LoginPage'

interface Credentials {
  password: string
}

const ResetPassword = (props) => {
  useDocumentTitle('Reset Password | Human Lambdas')
  const {history} = useRouter() as any
  const networker = useNetworker()
  const token = props.match.params.forgottenId

  const handleSubmitCredentials = useCallback(
    async (credentials: Credentials, actions: FormikHelpers<Credentials>) => {
      const payload = {
        password: credentials.password
      }

      const reqBody = {
        method: 'POST',
        data: payload
      } as AxiosRequestConfig

      const response = await networker.httpHandler(
        `/users/forgotten-password-token/${token}`,
        reqBody
      )

      if (response.errors) {
        response.errors.forEach((e) => {
          props.addFailureNotification(e.message)
        })
      } else {
        props.addSuccessNotification(response.data.message)
        actions.resetForm()
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
        initialValues={{password: ''}}
        validationSchema={resetSchema}
        onSubmit={handleSubmitCredentials}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange}) => (
          <LoginContainer tagLine={'Human-in-the-loop tasks at any scale'}>
            <FieldBlock>
              <InputField
                label='New password'
                type='password'
                name='password'
                error={touched.password && errors.password}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldBlock>
            <FlatButton type='submit' disabled={isSubmitting || !isValid}>
              Reset
            </FlatButton>
          </LoginContainer>
        )}
      </Formik>
      <CheckValidInviteToken url={`/users/forgotten-password-token/${token}`} />
    </FormikRoot>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(ResetPassword)
