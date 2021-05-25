import React, {useCallback} from 'react'
import {Formik, FormikHelpers} from 'formik'
import {AxiosRequestConfig} from 'axios'
import InputField from './InputField'
import {InviteSignUpSchema} from 'universal/validations/yupSchema'
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
import {segmentTrack} from 'utils/segmentIo'
import LoginContainer from './LoginContainer'
import {FormikRoot, FieldBlock} from './LoginPage'

interface Credentials {
  name: string
  password: string
}

const InviteSignUpPage = (props) => {
  useDocumentTitle('Sign Up | Human Lambdas')
  const {history} = useRouter() as any
  const networker = useNetworker()
  const token = props.match.params.inviteId

  const handleSubmitCredentials = useCallback(
    async (credentials: Credentials, actions: FormikHelpers<Credentials>) => {
      try {
        let returnedEmail = ''

        const payload = {
          name: credentials.name,
          password: credentials.password
        }

        const reqBody = {
          method: 'POST',
          data: payload
        } as AxiosRequestConfig

        const {data}: any = await networker.httpHandler(`/users/invitation/${token}`, reqBody)

        returnedEmail = data.email

        segmentTrack('Organization Join Successful', {
          email: data.email
        })

        if (data.status === 200) {
          props.addSuccessNotification('You have successfuly joined this organization')
          history.push('/')
        } else if (data.message) {
          props.addSuccessNotification(data.message)
        }
        {
          const tokenReqBody = {
            method: 'POST',
            data: {
              email: returnedEmail,
              password: credentials.password
            }
          } as AxiosRequestConfig

          const url = '/users/token'
          const {data}: any = await networker.httpHandler(url, tokenReqBody)
          const {access, refresh} = data || {}

          if (access && refresh) {
            networker.setAccessToken(access)
            networker.setRefreshToken(refresh)
            actions.setSubmitting(false)
            history.push(`/queues`)
          }
        }
      } catch (e) {
        console.error('User signup failed', e)
        segmentTrack('Signup Failed')
      }
    },
    [networker]
  )

  return (
    <FormikRoot>
      <Formik
        validateOnChange={true}
        validateOnBlur={true}
        initialValues={{name: '', password: ''}}
        validationSchema={InviteSignUpSchema}
        onSubmit={handleSubmitCredentials}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange}) => (
          <LoginContainer tagLine={'Human-in-the-loop tasks at any scale'}>
            <FieldBlock>
              <InputField
                label='Name'
                type='text'
                name='name'
                value={values.name}
                error={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldBlock>
            <FieldBlock>
              <InputField
                label='Password'
                type='password'
                name='password'
                error={touched.password && errors.password}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldBlock>
            <FlatButton type='submit' disabled={isSubmitting || !isValid}>
              Sign Up
            </FlatButton>
          </LoginContainer>
        )}
      </Formik>
      <CheckValidInviteToken url={`/users/invitation/${token}`} />
    </FormikRoot>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(InviteSignUpPage)
