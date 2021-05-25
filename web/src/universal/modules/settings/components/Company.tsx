import React, {useCallback, useState} from 'react'
import {Formik, Form} from 'formik'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import InputField from 'universal/components/InputField'
import PrimaryButton from 'universal/components/PrimaryButton'
import Spinner from 'client/components/Spinner'
import PageWrapper from './PageWrapper'
import Title from './Title'
import FieldLine from './FieldLine'
import CopyFieldLine from './CopyFieldLine'
import ButtonFieldLine from './ButtonFieldLine'
import IconButton from 'universal/components/IconButton'
import Icon from 'universal/components/Icon'
import {PALETTE} from 'universal/styles/palette'

interface Props {
  organization: any
  orgId: number
  handleSubmit: any
  saved: string
  isLoading: boolean
}

const Company = (props: Props) => {
  const {handleSubmit, saved, organization, isLoading} = props
  const {name} = organization
  const orgId = props.orgId
  const [copied, setCopied] = useState<boolean>(false)

  const handleKeyCopy = useCallback(() => {
    setInterval(() => {
      setCopied(false)
    }, 1000)
    setCopied(true)
  }, [copied, orgId])

  return (
    <PageWrapper>
      <Formik
        enableReinitialize={true}
        validateOnChange={true}
        validateOnBlur={true}
        initialValues={{name}}
        onSubmit={handleSubmit}
      >
        {({touched, isSubmitting, isValid, values, errors, handleBlur, handleChange}) => (
          <Form>
            <Title>Company</Title>
            <FieldLine>
              <InputField
                label='Organization Name'
                placeholder='Organization'
                type='text'
                name='name'
                value={values.name}
                error={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
            </FieldLine>
            <CopyFieldLine>
              <InputField
                onChange={(e) => e.preventDefault()}
                label='Organization ID'
                placeholder='OrgId'
                type='text'
                name='orgId'
                value={orgId}
                disabled={true}
              />
              <CopyToClipboard
                text={orgId || ''}
                onCopy={() => handleKeyCopy()}
                style={{position: 'relative', top: 15, right: 30}}
              >
                <IconButton type='button' onClick={() => null}>
                  <Icon
                    style={{
                      fontSize: 15,
                      color: copied ? PALETTE.PRIMARY_GREEN : PALETTE.TEXT_DARK_GRAY
                    }}
                  >
                    content_copy
                  </Icon>
                </IconButton>
              </CopyToClipboard>
            </CopyFieldLine>
            <ButtonFieldLine>
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

export default Company
