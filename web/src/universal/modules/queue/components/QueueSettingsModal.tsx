import React from 'react'
import {Formik, Form, useField} from 'formik'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import {BoxShadow} from '../../../../client/utils/constants'
import {IQueue} from 'universal/types/generic'
import InputField from 'universal/components/InputField'
import PrimaryButton from 'universal/components/PrimaryButton'
import SecondaryButton from 'universal/components/SecondaryButton'
import TextArea from 'client/components/TextArea'
import {queueSettingsSchema} from 'universal/validations/yupSchema'

interface QueueSettingsProps {
  closePortal: () => void
  runQueue: () => void
  queue: IQueue
}

const ModalRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 700,
  width: 700,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  boxShadow: BoxShadow.MODAL,
  paddingTop: 35,
  paddingBottom: 35,
  maxHeight: 'calc(100vh - 100px)'
})

const ModalWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  overflow: 'auto'
})

const ModalHeader = styled.div({
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '27px',
  marginBottom: 10,
  paddingLeft: 35,
  paddingRight: 35
})

const ModalNote = styled.div({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '20px',
  marginBottom: 25,
  paddingLeft: 35,
  paddingRight: 35,
  color: PALETTE.TEXT_DARKER_GRAY
})

const Label = styled.div({
  fontSize: 15,
  color: PALETTE.TEXT_MAIN,
  fontWeight: 400,
  marginBottom: 5
})

const Note = styled.span({
  fontSize: 12,
  color: PALETTE.TEXT_GRAY,
  fontWeight: 400
})

const FieldWrapper = styled.div({
  display: 'grid',
  alignItems: 'top',
  marginBottom: 5
})

const FormContent = styled(Form)({
  overflow: 'auto',
  position: 'relative',
  height: 'inherit'
})

const QuotaInfoWrapper = styled.div({
  display: 'grid',
  alignItems: 'top',
  marginTop: 10,
  gridGap: 10,
  backgroundColor: '#fcfbff',
  padding: 20,
  borderRadius: 4
})

const QuotaInfo = styled.span({
  fontSize: 12,
  color: '#846cf1',
  fontWeight: 400
})

const ContentBlock = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 10
})

const ModalFooter = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 35,
  paddingRight: 35
})

const ContentWrapper = styled.div({
  backgroundColor: '#fff',
  width: '100%',
  paddingLeft: 35,
  paddingRight: 35
})

const SettingFields = () => {
  const [descriptionField, descriptionMeta, _descriptionHelper] = useField('task_description')
  const [guidelinesField, guidelinesMeta, _guidelinesHelper] = useField('guidelines_url')

  return (
    <>
      <ContentBlock>
        <FieldWrapper>
          <Label>Describe the goal of the task </Label>
          <TextArea
            {...descriptionField}
            cacheMeasurements={true}
            error={descriptionMeta.error}
            placeholder='Description'
            minRows={4}
            maxRows={8}
            positionErrorBelow={false}
            scrollable={true}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Note>
            Required field. This will help us understand how tasks in this queue should be
            delivered.
          </Note>
        </FieldWrapper>
      </ContentBlock>
      <ContentBlock>
        <FieldWrapper>
          <Label>Include a link to a guidelines document or instructional video</Label>
          <InputField
            {...guidelinesField}
            error={guidelinesMeta.error}
            type='text'
            placeholder='https://example.com/link-to-document'
          />
        </FieldWrapper>
        <FieldWrapper>
          <Note>
            Optional field with a URL to publicly accessible instructions. The more detailed context
            and examples, the higher the output quality we'll be able to provide.
          </Note>
        </FieldWrapper>
      </ContentBlock>
    </>
  )
}

const QueueSettingsModal = ({runQueue, queue, closePortal}: QueueSettingsProps) => (
  <ModalRoot id='queue-settings-modal'>
    <Formik
      validationSchema={queueSettingsSchema}
      validateOnChange
      validateOnBlur
      initialValues={queue}
      enableReinitialize
      onSubmit={runQueue}
    >
      {({isValid, isSubmitting}) => (
        <FormContent>
          <ModalHeader>Automate your queue</ModalHeader>
          <ModalNote>Tell us how this queue should be run and we'll handle it for you.</ModalNote>
          <ModalWrapper>
            <ContentWrapper>
              <SettingFields />
              <ContentBlock>
                <QuotaInfoWrapper>
                  <QuotaInfo>
                    Your account includes a{' '}
                    <b>monthly quota of 100 tasks handled by us at no cost. </b>
                    We will send you an email once you approach your limit.
                  </QuotaInfo>
                  <QuotaInfo>
                    If you are anticipating a large task load, have specific SLA requirements or
                    want to ask additiional questions, don't hesitate to contact us at{' '}
                    <b>contact@humanlambdas.com</b>
                  </QuotaInfo>
                </QuotaInfoWrapper>
              </ContentBlock>
            </ContentWrapper>
          </ModalWrapper>
          <ModalFooter>
            <PrimaryButton type='submit' disabled={!isValid || isSubmitting}>
              Enable
            </PrimaryButton>
            <SecondaryButton type='button' onClick={() => closePortal()}>
              Cancel
            </SecondaryButton>
          </ModalFooter>
        </FormContent>
      )}
    </Formik>
  </ModalRoot>
)

export default QueueSettingsModal
