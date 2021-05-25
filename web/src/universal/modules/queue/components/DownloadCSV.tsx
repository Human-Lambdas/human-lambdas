import React, {useCallback} from 'react'
import {Formik, Form, Field} from 'formik'
import {connect} from 'react-redux'
import useNetworker from 'client/hooks/useNetworker'
import styled from '@emotion/styled'
import ActionButton from 'client/components/ActionButton'
import {Instructions} from './APITaskUpload'
import {csvDownloadSchema} from 'universal/validations/yupSchema'
import {IQueue} from 'client/types/generic'
import DatePicker from 'universal/components/DatePicker'
import Checkbox from 'universal/components/Checkbox'
import {toIsoString} from 'client/utils/dateHelpers'
import {addFailureNotification} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'

interface Props {
  dispatch: any
  orgId: number
  queue: IQueue
}

const Text = styled(Instructions)({
  width: 300,
  color: 'rgb(0, 0, 0, 0.5)'
})

const DownloadButton = styled(ActionButton)({
  marginTop: 15,
  width: 96,
  height: 32
})

const FormContainer = styled(Form)({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  padding: 25,
  width: 'calc(100vw / 2)'
})

const ContentBlock = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 15,
  width: 300
})

const FieldWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center'
})

const CheckFieldWrapper = styled(FieldWrapper)({
  gridTemplateColumns: 'auto auto',
  marginTop: 10
})

const Label = styled.div({
  fontSize: 15,
  color: 'rgb(0, 0, 0, 0.5)',
  lineHeight: 1.4,
  paddingTop: '10px'
})

const DownloadCSV = (props: Props) => {
  const {orgId, queue, dispatch} = props
  const networker = useNetworker()

  const handleDownloadCSV = useCallback(async (values) => {
    const {id, name} = queue
    const {startDate, endDate, correct} = values
    if (id) {
      const {data, errors} = await networker.httpHandler(
        `/orgs/${orgId}/queues/tasks/completed-tasks-csv`,
        {
          method: 'GET',
          responseType: 'text/csv',
          params: {
            queue_id: id,
            ...(correct && {correct}),
            ...(startDate && {start_date: toIsoString(startDate)}),
            ...(endDate && {end_date: toIsoString(endDate)})
          }
        },
        false
      )
      if (!errors) {
        const url = window.URL.createObjectURL(new Blob([data]))
        const csvLink = document.createElement('a')
        csvLink.href = url
        csvLink.setAttribute('download', `${name}-completed-tasks.csv`)
        document.body.appendChild(csvLink)
        csvLink.click()
      } else {
        dispatch(addFailureNotification('No tasks to export'))
      }
    }
  }, [])

  const initialValues = {
    startDate: null,
    endDate: null,
    correct: false
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleDownloadCSV}
      validateOnChange
      validateOnBlur
      validateOnMount
      validationSchema={csvDownloadSchema}
    >
      {({values, errors, isValid, isSubmitting}) => {
        return (
          <FormContainer>
            <Text>Export all tasks in this queue as CSV.</Text>
            <ContentBlock>
              <FieldWrapper>
                <Label>Start Date</Label>
                <DatePicker error={errors?.startDate} name={`startDate`} value={values.startDate} />
              </FieldWrapper>
            </ContentBlock>
            <ContentBlock>
              <FieldWrapper>
                <Label>End Date</Label>
                <DatePicker error={errors?.endDate} name={`endDate`} value={values.endDate} />
              </FieldWrapper>
            </ContentBlock>
            <ContentBlock>
              <CheckFieldWrapper>
                <Field name='correct'>
                  {({field}) => (
                    <Checkbox
                      {...field}
                      type='checkbox'
                      id='correct'
                      checked={field.value}
                      label={''}
                    />
                  )}
                </Field>
                <Label style={{width: 300, padding: 0, lineHeight: '20px'}}>
                  Only include approved tasks from Audits
                </Label>
              </CheckFieldWrapper>
            </ContentBlock>
            <DownloadButton disabled={isSubmitting || !isValid} type='submit'>
              Export
            </DownloadButton>
          </FormContainer>
        )
      }}
    </Formik>
  )
}

export default connect()(DownloadCSV)
