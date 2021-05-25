import React, {useCallback, useEffect} from 'react'
import {Formik, FormikHelpers} from 'formik'
import {AxiosRequestConfig} from 'axios'
import qs from 'qs'
import InputField from './InputField'
import {PublicSignUpSchema} from 'universal/validations/yupSchema'
import useDocumentTitle from 'client/hooks/useDocumentTitle'
import FlatButton from 'client/components/FlatButton'
import useRouter from 'client/hooks/useRouter'
import useNetworker from 'client/hooks/useNetworker'
import {segmentTrack} from 'client/utils/segmentIo'

import {
  addFailureNotification,
  addSuccessNotification
} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import {connect} from 'react-redux'

import LoginContainer from 'client/components/LoginContainer'
import {FormikRoot, FieldBlock} from 'client/components/LoginPage'
import {APP_TOKEN_KEY} from 'client/utils/constants'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import Spinner from 'client/components/Spinner'
import GoogleAuthButton from 'universal/components/GoogleAuthButton'

interface Credentials {
  email: string
  name: string
  password: string
}

const SubLine = styled.div({
  width: '100%',
  textAlign: 'center',
  marginTop: 8
})

const SubSubLine = styled(SubLine)({fontSize: 12})

export const Link = styled.span({
  color: PALETTE.PRIMARY_MAIN,
  cursor: 'pointer'
})

const SmallLink = styled.a({
  color: PALETTE.PRIMARY_MAIN,
  fontSize: 12
})

const PublicSignUpPage = (props) => {
  useDocumentTitle('Sign Up | Human Lambdas')
  const {history} = useRouter() as any
  const networker = useNetworker()
  const {
    location: {search}
  } = history
  const params = qs.parse(search.slice(search.lastIndexOf('?') + 1))

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
          console.error(`Error logging in user: ${userId}`, JSON.stringify(errors))
        }
      }
    })()
  }, [networker])

  const handleSubmitCredentials = useCallback(
    async (credentials: Credentials, actions: FormikHelpers<Credentials>) => {
      const template_id = params?.template_id ? Number(params.template_id) : undefined
      try {
        const payload = {
          email: credentials.email,
          name: credentials.name,
          password: credentials.password,
          template_id
        }

        const reqBody = {
          method: 'POST',
          data: payload
        } as AxiosRequestConfig

        const res: any = await networker.httpHandler('/users/register', reqBody)

        segmentTrack('Organization Join Successful', {
          email: credentials.email
        })

        if (res.errors) {
          res.errors.forEach((error) => {
            props.addFailureNotification(error.message)
          })
          throw 'Error signing up'
        } else {
          props.addSuccessNotification('You have successfuly joined this organization')
        }

        const tokenReqBody = {
          method: 'POST',
          data: {
            email: credentials.email,
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
        initialValues={{email: '', name: '', password: ''}}
        validationSchema={PublicSignUpSchema}
        onSubmit={handleSubmitCredentials}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange, dirty}) => (
          <LoginContainer tagLine={'Create an account'}>
            {!__OSS__ && <GoogleAuthButton label="Sign up with Google" />}
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
            <FlatButton type='submit' disabled={isSubmitting || !dirty || !isValid}>
              {isSubmitting ? <Spinner /> : `Sign up`}
            </FlatButton>
            <SubLine>
              Already have an account?{' '}
              <Link
                onClick={() => {
                  history.push('/')
                }}
              >
                Log in
              </Link>
            </SubLine>
            {!__OSS__ && <SubSubLine>
              By clicking Sign Up, you agree to the Human Lambdas{' '}
              <SmallLink target={'_blank'} href={'https://humanlambdas.com/legal/terms-of-service'}>
                Terms Of Service
              </SmallLink>
              ,{' '}
              <SmallLink target='_blank' href='https://humanlambdas.com/legal/privacy-policy'>
                Privacy Policy
              </SmallLink>{' '}
              and to receiving occasional emails relating to your account
            </SubSubLine>}
          </LoginContainer>
        )}
      </Formik>
    </FormikRoot>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(PublicSignUpPage)
