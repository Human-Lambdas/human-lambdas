import React, {useCallback, useEffect, useState, useRef} from 'react'
import {Field, FieldArray} from 'formik'
import useMenu from 'client/hooks/useMenu'
import {MenuPosition} from 'client/hooks/useCoords'
import StandardMenu from 'client/components/StandardMenu'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import {BoxShadow} from '../../../../client/utils/constants'
import {IQueue, IBlock} from 'universal/types/generic'
import InputField from 'universal/components/InputField'
import Checkbox from 'universal/components/Checkbox'
import TaskRadio from 'universal/components/TaskRadio'
import {BLOCK_TYPE, BLOCKS} from 'universal/utils/constants'
import PrimaryButton from 'universal/components/PrimaryButton'
import SecondaryButton from 'universal/components/SecondaryButton'
import slugify from 'universal/utils/slugify'
import BasicTextArea from 'universal/components/BasicTextArea'
import DatePicker from 'universal/components/DatePicker'
import Sequence from './Sequence'
import Selection from './Selection'
import useKeyPress from '../../../hooks/useKeyPress'

interface NewBlockModalProps {
  arrayHelpers: any
  closePortal: () => void
  setFieldValue: any
  values: IQueue
  handleChange: boolean
  currentBlockId: string | number
  errors?: Error
  isValid?: boolean
}

const ModalRoot = styled.div<{isExtendedType?: boolean}>(({isExtendedType}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: isExtendedType ? 1000 : 500,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  boxShadow: BoxShadow.MODAL,
  paddingTop: 35,
  paddingBottom: 35,
  maxHeight: 'calc(100vh - 100px)'
}))

const ModalWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  overflow: 'auto'
})

const ModalHeader = styled.div({
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '27px',
  marginBottom: 45,
  paddingLeft: 35,
  paddingRight: 35
})

export const Label = styled.div({
  fontSize: 15,
  color: PALETTE.TEXT_MAIN,
  fontWeight: 400,
  textTransform: 'capitalize'
})

export const Note = styled.span({
  fontSize: 12,
  color: PALETTE.TEXT_GRAY,
  fontWeight: 400
})

export const FieldWrapper = styled.div(({vertAlign}) => ({
  display: 'grid',
  gridTemplateColumns: '150px 1fr',
  alignItems: vertAlign ? 'top' : 'center',
  marginBottom: 5
}))

export const ContentBlock = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 15
})

export const ModalFooter = styled.div({
  marginTop: 15,
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 35,
  paddingRight: 35
})

export const ContentWrapper = styled.div({
  backgroundColor: '#fff',
  width: '100%',
  paddingLeft: 35,
  paddingRight: 35
})

export const InlineWrapper = styled.div({
  display: 'inline-flex'
})

const NewBlockModal = (props: NewBlockModalProps) => {
  const {
    errors,
    arrayHelpers,
    currentBlockId,
    closePortal,
    setFieldValue,
    values,
    handleChange,
    isValid
  } = props

  const {data} = values || {}

  const blockFormat = {
    number: 'number',
    default: 'text'
  }

  if (!data.length) return null
  const index = data.findIndex((block: IBlock) => block._id === currentBlockId)
  if (index === -1) return null

  const {type, isNew}: any = data[index]
  const currentBlock = data[index] || {}
  const {title = '', placeholder = null} = BLOCKS.find((block) => block.type === type) || {}

  const readOnlyBlocks = [
    BLOCK_TYPE.NUMBER,
    BLOCK_TYPE.TEXT,
    BLOCK_TYPE.EMAIL,
    BLOCK_TYPE.LINK,
    BLOCK_TYPE.RICH_TEXT,
    BLOCK_TYPE.DATE
  ]

  /**
   * Form sequence values are always
   * required and can not be disabled below.
   */
  const requiredBlocks = [
    ...readOnlyBlocks,
    BLOCK_TYPE.NAMED_ENTITY_RECOGNITION,
    BLOCK_TYPE.SINGLE_SELECTION,
    BLOCK_TYPE.MULTIPLE_SELECTION,
    BLOCK_TYPE.BINARY,
    BLOCK_TYPE.BOUNDING_BOXES
  ]

  const multiBlocks = [
    BLOCK_TYPE.NAMED_ENTITY_RECOGNITION,
    BLOCK_TYPE.SINGLE_SELECTION,
    BLOCK_TYPE.MULTIPLE_SELECTION,
    BLOCK_TYPE.FORM_SEQUENCE,
    BLOCK_TYPE.BOUNDING_BOXES
  ]
  const isReadOnly = readOnlyBlocks.includes(type) && !data[index]?.[type]?.is_required
  const isRequired = requiredBlocks.includes(type) && !data[index]?.[type]?.read_only
  const isExtendedType = multiBlocks.includes(type)
  const hasPlaceholder =
    (type !== BLOCK_TYPE.BINARY && !isExtendedType && type !== BLOCK_TYPE.TEXT_SEQUENCE) ||
    type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION ||
    type === BLOCK_TYPE.BOUNDING_BOXES

  const allowEdits = type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION

  const hasErrors = errors ? Object.values(errors).length > 0 : false

  const blockError =
    (errors.data &&
      (errors.data[index]?.id ||
        errors.data[index]?.name ||
        errors.data[index]?.[type]?.placeholder ||
        errors.data[index]?.[type]?.data ||
        errors.data[index]?.[type]?.options)) ||
    (errors && errors[index]?.id)

  const idError =
    /**
     * TODO: Use Formiks `touched` field
     * once we are able to hook up `NewBlockModal`
     * to `QueueBuilder`. i.e. currently we are
     * portal'ing outside `form`.
     */
    currentBlock.id !== undefined &&
    ((errors.data && errors.data[index]?.id) || (errors && errors[index]?.id))

  const question = (
    <React.Fragment>
      <div>Label</div>
      <Note>Required</Note>
    </React.Fragment>
  )

  // eslint-disable-next-line
  const onClose = useCallback(() => {
    if (isNew) {
      arrayHelpers.remove(index)
    } else {
      setFieldValue(`data[${index}]`, currentBlock, false)
    }
    closePortal()
  }, [])

  // eslint-disable-next-line
  const onSave = useCallback(() => {
    if (isNew) {
      setFieldValue(`data[${index}].isNew`, undefined)
    }
    setFieldValue(`data[${index}][${type}].history`, [])
    closePortal()
  }, [])

  // eslint-disable-next-line
  const onDragEnd = useCallback(
    (result) => {
      const {destination, source, draggableId} = result
      if (
        !destination ||
        (destination.droppableId === source.droppableId && destination.index === source.index)
      ) {
        return
      }

      const changedItem =
        type === BLOCK_TYPE.FORM_SEQUENCE
          ? data[index][type].data[draggableId]
          : data[index][type].options[draggableId]
      const newList =
        type === BLOCK_TYPE.FORM_SEQUENCE ? data[index][type].data : data[index][type].options
      newList.splice(source.index, 1)
      newList.splice(destination.index, 0, changedItem)
      setFieldValue(
        type === BLOCK_TYPE.FORM_SEQUENCE ? data[index][type].data : data[index][type].options,
        newList
      )
    },
    [data, index]
  )

  const [userHasChangedIdentifier, setUserHasChangedIdentifier] = useState(false)

  const onIdentifierChange = useCallback((e) => {
    const {value} = e.target
    setFieldValue(`data[${index}].id`, value)
    setUserHasChangedIdentifier(false)
    if (value != '') {
      setUserHasChangedIdentifier(true)
    }
  }, [])

  const onPlaceholderChange = (e, setFieldValue) => {
    const {value} = e.target
    setFieldValue(`data[${index}].${[type]}.placeholder`, value)
  }

  const onRichTextFormatChange = (e, setFieldValue) => {
    const {value} = e.target
    setFieldValue(`data[${index}][${type}].format`, value.toLowerCase())
  }

  const {togglePortal, originRef, menuPortal, menuProps} = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true,
    parentId: 'portal'
  })

  const escape = useKeyPress('Escape')

  useEffect(() => {
    if (escape) {
      if (isNew) {
        return () => {
          arrayHelpers.remove(index)
        }
      } else {
        return () => {
          onClose()
        }
      }
    }
  }, [escape])

  const menuItems = (arrayHelpers) => {
    return [
      {
        label: 'Text',
        onClick: () =>
          arrayHelpers.push({
            id: 'text_id',
            name: 'Text Question',
            type: 'text',
            text: {}
          })
      },
      {
        label: 'Email',
        onClick: () =>
          arrayHelpers.push({
            id: 'email_id',
            name: 'Email Question',
            type: 'email',
            email: {}
          })
      },
      {
        label: 'Number',
        onClick: () =>
          arrayHelpers.push({
            id: 'number_id',
            name: 'Number Question',
            type: 'number',
            number: {}
          })
      },
      {
        label: 'Link',
        onClick: () =>
          arrayHelpers.push({
            id: 'link_id',
            name: 'Link Question',
            type: 'link',
            link: {}
          })
      },
      {
        label: 'Binary',
        onClick: () =>
          arrayHelpers.push({
            id: 'binary_id',
            name: 'Binary Question',
            type: 'binary',
            binary: {}
          })
      },
      {
        label: 'Single Selection',
        onClick: () =>
          arrayHelpers.push({
            id: 'single_selection_id',
            name: 'Single Selection Question',
            type: 'single_selection',
            single_selection: {
              options: [
                {id: 'option_1', name: 'Option 1'},
                {id: 'option_2', name: 'Option 2'},
                {id: 'option_3', name: 'Option 3'}
              ]
            }
          })
      },
      {
        label: 'Multiple Selection',
        onClick: () =>
          arrayHelpers.push({
            id: 'multiple_selection_id',
            name: 'Multiple Selection Question',
            type: 'multiple_selection',
            multiple_selection: {
              options: [
                {id: 'option_1', name: 'Option 1'},
                {id: 'option_2', name: 'Option 2'},
                {id: 'option_3', name: 'Option 3'}
              ]
            }
          })
      }
    ]
  }

  const idInput = useRef()
  const nameInput = useRef()

  if (nameInput.current) {
    if (nameInput.current.value === '') {
      nameInput.current.value = values?.data[index]?.name || ''
    }
  }

  if (idInput.current) {
    if (idInput.current.value === '') {
      idInput.current.value = values?.data[index]?.id || ''
    }
  }

  const [userHasChangedName, setUserHasChangedName] = useState(false)

  const onNameBlur = (e, setFieldValue) => {
    const {value} = e.target
    setFieldValue(`data[${index}].name`, value)
    if (!isNew || userHasChangedIdentifier) return
    const slugId = slugify(value.substring(0, 30))

    if (userHasChangedName) {
      setFieldValue(`data[${index}].id`, slugId)
    }
  }

  const onNameChange = (e) => {
    if (!userHasChangedName) setUserHasChangedName(true)
    const {value} = e.target

    if (!isNew || userHasChangedIdentifier) return
    const slugId = slugify(value.substring(0, 30))
    idInput.current.value = slugId

    if (!isValid) {
      setFieldValue(`data[${index}].name`, value)
      setFieldValue(`data[${index}].id`, slugId)
    }
  }

  return (
    <ModalRoot isExtendedType={isExtendedType} id='parentId'>
      <ModalHeader>{`${title} Settings`}</ModalHeader>
      <ModalWrapper>
        <ContentWrapper>
          <ContentBlock>
            <FieldWrapper vertAlign={type === BLOCK_TYPE.BINARY}>
              <Label>{type === BLOCK_TYPE.BINARY ? question : 'Label'}</Label>
              <InputField
                type='text'
                ref={nameInput}
                onBlur={(e) => onNameBlur(e, setFieldValue)}
                onChange={onNameChange}
                autoFocus={true}
                placeholder={type === BLOCK_TYPE.BINARY ? `${type} question` : `${type} Label`}
              />
            </FieldWrapper>
            {type !== BLOCK_TYPE.BINARY && (
              <FieldWrapper>
                <Note>Required</Note>
                <Note>Displayed to users as this block's title</Note>
              </FieldWrapper>
            )}
          </ContentBlock>
          <ContentBlock>
            <FieldWrapper>
              <Label>Identifier</Label>
              <InputField
                error={idError}
                hideErrorMessage={true}
                name={`data[${index}].id`}
                ref={idInput}
                type='text'
                onChange={(e) => onIdentifierChange(e)}
                placeholder={`${type}-id`}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Note>Required</Note>
              <Note>A unique identifier for this block in the underlying queue data schema</Note>
            </FieldWrapper>
          </ContentBlock>
          {hasPlaceholder && (
            <ContentBlock>
              <FieldWrapper>
                <Label>Placeholder</Label>
                {type !== BLOCK_TYPE.TEXT &&
                type !== BLOCK_TYPE.NAMED_ENTITY_RECOGNITION &&
                type !== BLOCK_TYPE.DATE ? (
                  <InputField
                    name={`data[${index}].${[type]}.placeholder`}
                    type={blockFormat[type] || blockFormat.default}
                    onChange={(e) => {
                      onPlaceholderChange(e, setFieldValue)
                    }}
                    error={errors.data && errors.data[index]?.[type]?.placeholder}
                    hideErrorMessage={true}
                    value={values?.data[index]?.[type]?.placeholder}
                    placeholder={placeholder}
                  />
                ) : (
                  <>
                    {type === BLOCK_TYPE.DATE ? (
                      <DatePicker
                        name={`data[${index}].${[type]}.placeholder`}
                        value={values?.data[index]?.[type]?.placeholder || ''}
                        placeholder={placeholder}
                        setFieldValue={setFieldValue}
                        error={errors.data && errors.data[index]?.[type]?.placeholder}
                      />
                    ) : (
                      <BasicTextArea
                        hideErrorMessage={true}
                        value={values?.data[index]?.[type]?.placeholder || ''}
                        placeholder={placeholder}
                        name={`data[${index}].${[type]}.placeholder`}
                        error={errors.data && errors.data[index]?.[type]?.placeholder}
                        onChange={handleChange}
                        maxRows={3}
                      />
                    )}
                  </>
                )}
              </FieldWrapper>
              <FieldWrapper>
                <Note>Optional</Note>
                <Note>Used as a sample value when creating or editing a queue</Note>
              </FieldWrapper>
            </ContentBlock>
          )}
          {hasPlaceholder && (
            <ContentBlock>
              <FieldWrapper>
                <Label>Use Placeholder</Label>
                <Field name={`data[${index}].${[type]}.use_placeholder`}>
                  {({field}) => (
                    <Checkbox
                      {...field}
                      type='checkbox'
                      id='use_placeholder'
                      checked={field.value}
                      label={
                        'Fallback to using the placeholder when no value is provided in the task'
                      }
                    />
                  )}
                </Field>
              </FieldWrapper>
            </ContentBlock>
          )}
          {isReadOnly && (
            <ContentBlock>
              <FieldWrapper>
                <Label>Read-only</Label>
                <Field name={`data[${index}].${[type]}.read_only`}>
                  {({field}) => (
                    <Checkbox
                      {...field}
                      type='checkbox'
                      id='read_only'
                      checked={field.value}
                      label={'Makes this block’s value unmodifiable after task creation'}
                    />
                  )}
                </Field>
              </FieldWrapper>
            </ContentBlock>
          )}
          {isRequired && (
            <ContentBlock>
              <FieldWrapper>
                <Label>Required</Label>
                <Field name={`data[${index}].${[type]}.is_required`}>
                  {({field}) => (
                    <Checkbox
                      {...field}
                      type='checkbox'
                      id='is_required'
                      checked={field.value}
                      label='Prevents tasks with an empty value from being submitted.'
                    />
                  )}
                </Field>
              </FieldWrapper>
            </ContentBlock>
          )}
          {allowEdits && (
            <ContentBlock>
              <FieldWrapper>
                <Label>Enable Text Editing</Label>
                <Field name={`data[${index}].${[type]}.allow_edits`}>
                  {({field}) => (
                    <Checkbox
                      {...field}
                      type='checkbox'
                      id='allow_edits'
                      checked={field.value}
                      label={'Allows the text content of this block to be edited in task mode.'}
                    />
                  )}
                </Field>
              </FieldWrapper>
            </ContentBlock>
          )}
          {type === BLOCK_TYPE.TEXT_SEQUENCE &&
            [
              {
                setting: 'ordering_disabled',
                label: 'Disable Ordering',
                fieldLabel: 'Prevents re-ordering of fields in tasks.'
              },
              {
                setting: 'delete_disabled',
                label: 'Disable Deletes',
                fieldLabel: 'Prevents deletion of fields in tasks.'
              },
              {
                setting: 'edit_disabled',
                label: 'Disable Edits',
                fieldLabel: 'Prevents editing of fields in tasks.'
              }
            ].map((item) => (
              <ContentBlock key={item.setting}>
                <FieldWrapper>
                  <Label>{item.label}</Label>
                  <Field name={`data[${index}].${[type]}[${item.setting}]`}>
                    {({field}) => (
                      <Checkbox
                        {...field}
                        type='checkbox'
                        id={item.setting}
                        checked={field.value}
                        label={item.fieldLabel}
                      />
                    )}
                  </Field>
                </FieldWrapper>
              </ContentBlock>
            ))}
          {type === BLOCK_TYPE.RICH_TEXT && (
            <ContentBlock>
              <FieldWrapper>
                <Label>format</Label>
                <InlineWrapper>
                  <Field name={`data[${index}][${type}].format`}>
                    {({field}) =>
                      ['HTML', 'Markdown'].map((option, optionIndex: number) => (
                        <TaskRadio
                          {...field}
                          key={optionIndex}
                          id={`${index}-${optionIndex}`}
                          checked={field.value === option.toLowerCase()}
                          value={option}
                          label={option}
                          noShadow
                          onChange={(e) => {
                            onRichTextFormatChange(e, setFieldValue)
                          }}
                        />
                      ))
                    }
                  </Field>
                </InlineWrapper>
              </FieldWrapper>
            </ContentBlock>
          )}
        </ContentWrapper>
        {(type === BLOCK_TYPE.SINGLE_SELECTION ||
          type === BLOCK_TYPE.MULTIPLE_SELECTION ||
          type === BLOCK_TYPE.BOUNDING_BOXES ||
          type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION) && (
          <ContentWrapper style={{marginLeft: 15, overflow: 'auto', marginBottom: 15}}>
            <FieldArray
              name={`data[${index}][${type}].options`}
              render={(arrayHelpers) => (
                <Selection
                  index={index}
                  type={type}
                  onDragEnd={onDragEnd}
                  data={data}
                  handleChange={handleChange}
                  arrayHelpers={arrayHelpers}
                  setFieldValue={setFieldValue}
                  errors={errors}
                />
              )}
            />
          </ContentWrapper>
        )}
        {type === BLOCK_TYPE.FORM_SEQUENCE && (
          <ContentWrapper style={{marginLeft: 15, overflow: 'auto', marginBottom: 15}}>
            <FieldArray
              name={`data[${index}][${type}].data`}
              render={(arrayHelpers) => (
                <div>
                  <Sequence
                    onDragEnd={onDragEnd}
                    index={index}
                    type={type}
                    data={data}
                    handleChange={handleChange}
                    arrayHelpers={arrayHelpers}
                    originRef={originRef}
                    togglePortal={togglePortal}
                    setFieldValue={setFieldValue}
                  />
                  {menuPortal(
                    <StandardMenu menuProps={menuProps} menuItems={menuItems(arrayHelpers)} />
                  )}
                </div>
              )}
            />
          </ContentWrapper>
        )}
      </ModalWrapper>
      <ModalFooter>
        <PrimaryButton type='submit' onClick={onSave} disabled={blockError || hasErrors}>
          Save
        </PrimaryButton>
        <SecondaryButton type='button' onClick={onClose}>
          Cancel
        </SecondaryButton>
      </ModalFooter>
    </ModalRoot>
  )
}

export default NewBlockModal
