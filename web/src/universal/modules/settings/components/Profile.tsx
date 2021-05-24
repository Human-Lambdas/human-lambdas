import React from 'react'
import {Formik, Form} from 'formik'
import InputField from 'universal/components/InputField'
import {IUser} from 'universal/types/generic'
import {userSchema} from 'universal/validations/yupSchema'
import Spinner from 'client/components/Spinner'
import PageWrapper from './PageWrapper'
import Title from './Title'
import PrimaryButton from 'universal/components/PrimaryButton'
import FieldLine from './FieldLine'
import ButtonFieldLine from './ButtonFieldLine'

interface Props {
  isLoading?: boolean
  saved?: string
  user: IUser
  handleSubmit: (values: object) => null
}

const Profile = (props: Props) => {
  const {handleSubmit, user, saved, isLoading} = props
  const {email, name} = user || {}

  return (
    <PageWrapper>
      <Formik
        enableReinitialize
        validateOnChange={true}
        validateOnBlur={true}
        initialValues={{name, email}}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange}) => (
          <Form>
            <Title>Profile</Title>
            <FieldLine>
              <InputField
                placeholder={'i.e. Same Smith'}
                type='text'
                name='name'
                value={values.name}
                error={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isRequired={true}
                label={'Full Name'}
              />
            </FieldLine>
            <FieldLine>
              <InputField
                placeholder={'i.e. sam.smith@humanlambdas.com'}
                type='email'
                name='email'
                error={touched.email && errors.email}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isRequired={true}
                label='Email'
              />
            </FieldLine>
            <ButtonFieldLine>
              <div />
              <PrimaryButton type='submit' disabled={!isValid || isSubmitting}>
                {isSubmitting || isLoading ? <Spinner /> : saved}
              </PrimaryButton>
            </ButtonFieldLine>
          </Form>
        )}
      </Formik>
    </PageWrapper>
  )
}

export default Profile
