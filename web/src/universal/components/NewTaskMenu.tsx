import React from 'react'
import {PALETTE} from 'universal/styles/palette'
import styled from '@emotion/styled'
import {BoxShadow} from 'client/utils/constants'
import {Formik, Form} from 'formik'
import SecondaryButton from 'universal/components/SecondaryButton'
import FlatButton from '../../client/components/FlatButton'
import BasicTextArea from 'universal/components/BasicTextArea'
import InputField from 'universal/components/InputField'
import capitalizeFirstLetter from 'client/utils/capitalizeFirstLetter'
import cutOffString from 'universal/utils/cutOffString'
import TaskRadio from 'universal/components/TaskRadio'
import TaskCheckbox from 'universal/components/TaskCheckbox'
import {BLOCK_TYPE, SAMPLE_VALUES} from 'universal/utils/constants'
import {taskMenuSchema} from 'universal/validations/yupSchema'
import TextEditor from 'universal/components/TextEditor'
import DatePicker from 'universal/components/DatePicker'

interface ITask {
  id: string
  name: string
  type: string
}

interface Props {
  closePortal: () => void
  format: ITask[]
  onSubmitHandler: (values: any) => void
}

const ModalRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 500,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  boxShadow: BoxShadow.MODAL
})

const MainTitle = styled.div({
  fontSize: 22,
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  marginBottom: 35
})

const FormContent = styled(Form)({
  padding: '35px'
})

const SubmissionSection = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  justifyContent: 'space-between',
  paddingTop: '25px'
})

const Input = styled.div({
  display: 'grid',
  gridGap: 5,
  alignItems: 'center',
  marginBottom: 24
})

const Label = styled.div({
  fontWeight: 400,
  marginRight: 20,
  fontSize: 16,
  width: '100%',
  textTransform: 'capitalize'
})

const Box = styled.div({
  marginBottom: 10
})

const Options = styled.div({
  maxHeight: '62vh',
  overflow: 'auto',
  padding: '8px 0px'
})

const Question = styled.div({
  fontWeight: 500,
  fontSize: 16
})

const NewTaskMenu = (props: Props) => {
  const {closePortal, format, onSubmitHandler} = props

  const initialValues = {data: {}, required: {}}
  format.map((item) => {
    if (initialValues.data[item.type]) {
      initialValues.data[item.type][item.id] = ''
    } else {
      initialValues.data[item.type] = {[item.id]: ''}
    }

    if (item.type === BLOCK_TYPE.BOUNDING_BOXES) {
      initialValues.data[item.type] = {[item.id]: {image: ''}}
    }

    if (item[item.type].is_required) {
      if (initialValues.required[item.type]) {
        initialValues.required[item.type][item.id] = true
      } else {
        initialValues.required[item.type] = {[item.id]: true}
      }
    }
  })

  return (
    <ModalRoot>
      <Formik
        validationSchema={taskMenuSchema}
        validateOnChange
        validateOnBlur
        validateOnMount
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmitHandler}
      >
        {({
          touched,
          isSubmitting,
          isValid,
          handleChange,
          handleBlur,
          values,
          errors,
          setFieldValue
        }) => (
          <FormContent>
            <MainTitle>New Task</MainTitle>
            {format.map((input: ITask) => {
              // this single and multiple selection code will currently never be invoked as the back end will not return these types
              return input.type === BLOCK_TYPE.SINGLE_SELECTION ? (
                <div key={input.name}>
                  <Question>{cutOffString(capitalizeFirstLetter(input.name), 18)}</Question>
                  <Options>
                    {input[input.type].options.map((option, optionIndex: number) => (
                      <Box key={optionIndex}>
                        <TaskRadio
                          name={input.id}
                          id={optionIndex}
                          value={option.id}
                          label={option.name}
                          onChange={handleChange}
                          checked={option.id === values[input.id]}
                        />
                      </Box>
                    ))}
                  </Options>
                </div>
              ) : input.type === BLOCK_TYPE.MULTIPLE_SELECTION ? (
                <div key={input.name}>
                  <Question>{cutOffString(capitalizeFirstLetter(input.name), 18)}</Question>
                  <Options>
                    {input[input.type].options.map((option, optionIndex) => (
                      <Box key={optionIndex}>
                        <TaskCheckbox
                          name={input.id}
                          id={option.id}
                          value={option.id}
                          label={option.name}
                          onChange={handleChange}
                          checked={values[input.id] && values[input.id].includes(option.id)}
                        />
                      </Box>
                    ))}
                  </Options>
                </div>
              ) : input.type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION ? (
                <Input key={input.name} type={input.type}>
                  <Label>{input.name}</Label>
                  <BasicTextArea
                    value={
                      values && values.data && values.data[input.type]
                        ? values.data[input.type][input.id]
                        : null
                    }
                    placeholder={
                      input[input.type].placeholder
                        ? input[input.type].placeholder
                        : SAMPLE_VALUES[input.type]
                    }
                    name={`data[${input.type}][${input.id}]`}
                    error={
                      touched &&
                      touched.data &&
                      touched.data[input.type] &&
                      touched.data[input.type][input.id] &&
                      errors &&
                      errors.data &&
                      errors.data[input.type] &&
                      errors.data[input.type][input.id]
                    }
                    hideErrorMessage={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxRows={3}
                  />
                </Input>
              ) : input.type === BLOCK_TYPE.BOUNDING_BOXES ? (
                <Input key={input.name} type={input.type}>
                  <Label>{input.name}</Label>
                  <InputField
                    value={
                      values &&
                      values.data &&
                      values.data[input.type] &&
                      values.data[input.type][input.id]
                        ? values.data[input.type][input.id]['image']
                        : 'bbb'
                    }
                    placeholder={
                      input[input.type].placeholder
                        ? input[input.type].placeholder
                        : SAMPLE_VALUES[input.type]
                    }
                    type={input.type}
                    format={values.data[input.type].format}
                    name={`data[${input.type}][${input.id}][image]`}
                    error={
                      errors && errors.data && errors.data[input.type]
                        ? errors.data[input.type][input.id]
                        : ''
                    }
                    hideErrorMessage={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    containerStyles={{width: '100%'}}
                  />
                </Input>
              ) : input.type === BLOCK_TYPE.RICH_TEXT ? (
                <Input key={input.name} type={input.type}>
                  <Label>{input.name}</Label>
                  <TextEditor
                    isTaskMenu
                    value={
                      values && values.data && values.data[input.type]
                        ? values.data[input.type][input.id]
                        : ''
                    }
                    placeholder={
                      input[input.type].placeholder
                        ? input[input.type].placeholder
                        : SAMPLE_VALUES[input.type]
                    }
                    name={`data[${input.type}][${input.id}]`}
                    format={input[input.type].format}
                    error={
                      errors && errors.data && errors.data[input.type]
                        ? errors.data[input.type][input.id]
                        : ''
                    }
                    setFieldValue={setFieldValue}
                  />
                </Input>
              ) : input.type === BLOCK_TYPE.DATE ? (
                <Input key={input.name} type={input.type}>
                  <Label>{input.name}</Label>
                  <DatePicker
                    isTaskMenu
                    value={
                      values && values.data && values.data[input.type]
                        ? values.data[input.type][input.id]
                        : ''
                    }
                    placeholder={
                      input[input.type].placeholder
                        ? input[input.type].placeholder
                        : SAMPLE_VALUES[input.type]
                    }
                    name={`data[${input.type}][${input.id}]`}
                    error={
                      errors && errors.data && errors.data[input.type]
                        ? errors.data[input.type][input.id]
                        : ''
                    }
                    setFieldValue={setFieldValue}
                  />
                </Input>
              ) : (
                <Input key={input.name} type={input.type}>
                  <Label>{input.name}</Label>
                  {input.type !== BLOCK_TYPE.TEXT ? (
                    <InputField
                      value={
                        values && values.data && values.data[input.type]
                          ? values.data[input.type][input.id]
                          : ''
                      }
                      placeholder={
                        input[input.type].placeholder
                          ? input[input.type].placeholder
                          : SAMPLE_VALUES[input.type]
                      }
                      type={input.type === 'number' ? 'number' : 'text'}
                      format={values.data[input.type].format}
                      name={`data[${input.type}][${input.id}]`}
                      error={
                        errors && errors.data && errors.data[input.type]
                          ? errors.data[input.type][input.id]
                          : ''
                      }
                      hideErrorMessage={true}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      containerStyles={{width: '100%'}}
                    />
                  ) : (
                    <BasicTextArea
                      value={values[input.id] || ''}
                      placeholder={
                        input[input.type].placeholder
                          ? input[input.type].placeholder
                          : SAMPLE_VALUES[input.type]
                      }
                      name={input.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxRows={3}
                    />
                  )}
                </Input>
              )
            })}
            <SubmissionSection>
              <SecondaryButton type='button' onClick={closePortal}>
                Cancel
              </SecondaryButton>
              <FlatButton type='submit' disabled={!isValid || isSubmitting}>
                Create
              </FlatButton>
            </SubmissionSection>
          </FormContent>
        )}
      </Formik>
    </ModalRoot>
  )
}

export default NewTaskMenu
