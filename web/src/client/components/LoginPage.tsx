import React, {useCallback, useEffect} from 'react'
import styled from '@emotion/styled'
import {Formik} from 'formik'
import {connect} from 'react-redux'
import jwtDecode from 'jwt-decode'
import {AxiosRequestConfig} from 'axios'
import {PALETTE} from '../styles/palette'
import InputField from './InputField'
import {loginSchema} from 'universal/validations/yupSchema'
import useDocumentTitle from 'client/hooks/useDocumentTitle'
import FlatButton from 'client/components/FlatButton'
import useRouter from 'client/hooks/useRouter'
import useNetworker from 'client/hooks/useNetworker'
import {APP_TOKEN_KEY} from 'client/utils/constants'
import {addFailureNotification} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import {segmentTrack} from 'client/utils/segmentIo'
import PlainButton from 'client/components/PlainButton'
import LoginContainer from './LoginContainer'
import {Link} from 'universal/components/PublicSignUpPage'
import Spinner from 'client/components/Spinner'
import GoogleAuthButton from 'universal/components/GoogleAuthButton'
import isUserStaff from 'client/utils/isUserStaff'

interface Props {
  dispatch: any
  email?: string
}

interface Credentials {
  email: string
  password: string
}

const SubLine = styled.div({
  width: '100%',
  textAlign: 'center',
  marginBottom: 8
})

export const FormikRoot = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: PALETTE.BACKGROUND_MAIN
})

export const LinkButton = styled(PlainButton)({
  color: PALETTE.PRIMARY_MAIN,
  fontSize: 13,
  textAlign: 'center',
  fontWeight: 500,
  height: 18,
  lineHeight: '18px',
  ':hover': {
    color: PALETTE.PRIMARY_MAIN_DARK
  }
})

export const FieldBlock = styled.div({
  marginBottom: 15
})

const LoginPage = (props: Props) => {
  useDocumentTitle('Login | Human Lambdas')
  const {history} = useRouter() as any
  const networker = useNetworker()
  const {dispatch} = props
  const initialEmailValue = props.email ? props.email : ''

  useEffect(() => {
    ;(async function maybeLoggedIn() {
      const accessToken = await window.localStorage.getItem(APP_TOKEN_KEY)
      const {accessObj = {}} = networker || {}
      const {user_id: userId} = accessObj || {}
      if (userId && accessToken) {
        const {
          data: {current_organization_id},
          errors
        } = await networker.httpHandler(`/users/${userId}`, {method: 'GET'})
        if (errors === undefined && current_organization_id) {
          const {data: organizations} = await networker.httpHandler(`/orgs`, {method: 'GET'})

          if (isUserStaff(organizations, current_organization_id)) {
            history.push(`/outstanding-queues`)
          } else {
            history.push(`/queues`)
          }
        } else {
          console.error(`Error logging in user: ${userId}`, JSON.stringify(errors))
        }
      }
    })()
  }, [networker])

  const handleSubmitCredentials = useCallback(
    async (credentials: Credentials) => {
      const reqBody = {
        method: 'POST',
        data: credentials
      } as AxiosRequestConfig

      const {data, errors} = await networker.httpHandler('/users/token', reqBody)

      if (!errors) {
        const {access, refresh} = data || {}

        if (access && refresh) {
          networker.setAccessToken(access)
          networker.setRefreshToken(refresh)
          const {user_id, name, email} = jwtDecode(access)
          const {
            data: {current_organization_id}
          } = await networker.httpHandler(`/users/${user_id}`, {method: 'GET'})

          // segment track
          segmentTrack('Logged In', {
            orgId: current_organization_id,
            fullName: name,
            userId: user_id,
            email,
            login_type: 'manual'
          })

          const {data: organizations} = await networker.httpHandler(`/orgs`, {method: 'GET'})

          if (isUserStaff(organizations, current_organization_id)) {
            history.push(`/outstanding-queues`)
          } else {
            history.push(`/queues`)
          }
        }
      } else {
        errors.forEach((error) => dispatch(addFailureNotification(error.message)))
      }
    },
    [networker]
  )

  return (
    <FormikRoot>
      <Formik
        validateOnChange={true}
        validateOnBlur={true}
        initialValues={{email: initialEmailValue, password: ''}}
        validationSchema={loginSchema}
        onSubmit={handleSubmitCredentials}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange, dirty}) => (
          <LoginContainer tagLine={'Log in to Human Lambdas'}>
            {!__OSS__ && <GoogleAuthButton label='Log in with Google' />}
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
            <FieldBlock>
              <FlatButton type='submit' disabled={isSubmitting || !dirty || !isValid}>
                {isSubmitting ? <Spinner /> : `Log in`}
              </FlatButton>
            </FieldBlock>
            <SubLine>
              Don't have an account?{' '}
              <Link
                onClick={() => {
                  history.push('/signup')
                }}
              >
                Sign up
              </Link>
            </SubLine>
            <LinkButton
              onClick={() => {
                history.push('/forgot/')
              }}
            >
              Forgot your password?
            </LinkButton>
          </LoginContainer>
        )}
      </Formik>
    </FormikRoot>
  )
}

export default connect()(LoginPage)
