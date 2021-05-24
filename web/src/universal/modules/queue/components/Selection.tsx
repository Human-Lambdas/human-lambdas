import React, {useState, useCallback, useRef, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Field, useField} from 'formik'
import styled from '@emotion/styled'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import InputField from 'universal/components/InputField'
import CSVInput from 'client/components/CSVInput'
import SecondaryButton from 'universal/components/SecondaryButton'
import RootButton from 'client/components/RootButton'
import {PALETTE} from 'universal/styles/palette'
import slugify from 'universal/utils/slugify'
import {IBlock} from 'universal/types/generic'
import Icon from 'universal/components/Icon'
import getItemStyle from 'universal/utils/getItemStyle'
import {BLOCK_TYPE} from 'universal/utils/constants'

interface SelectionProps {
  onDragEnd: any
  data: Array<IBlock>
  index: number
  type: string
  handleChange: any
  arrayHelpers: any
  setFieldValue: any
  errors?: any
}
const RemoveButton = styled(RootButton)({
  color: PALETTE.PRIMARY_MAIN,
  fontWeight: '500',
  marginTop: '5px',
  ':hover': {
    color: PALETTE.ERROR_MAIN
  }
})
const InputWrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  align-items: center;
  grid-gap: 10px;
`
const CSVWrapper = styled.div`
  margin: 10px 15px;
`
const ContentBlock = styled.div({
  padding: '5px 0',
  display: 'flex',
  flexDirection: 'column'
})
const SelectionTitle = styled.div`
  display: flex;
  margin: 5px 15px;
  flex-direction: row;
  justify-content: space-between;
`
const ActionsBlock = styled.div`
  margin: 5px 15px;
  line-height: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const ImportText = styled.span({
  color: `${PALETTE.PRIMARY_MAIN}`,
  fontSize: '15px',
  fontWeight: 500,
  outline: 0,
  cursor: 'pointer',
  justifySelf: 'end'
})

const StyledIcon = styled(Icon)`
  visibility: hidden;
  ${ContentWrapper}:hover & {
    visibility: visible;
  }
  ${ContentWrapper}.focused & {
    visibility: visible;
  }
`

const SelectionOption = ({
  provided,
  snapshot,
  optIdx,
  data,
  index,
  type,
  setFieldValue,
  arrayHelpers,
  errors,
  minOptions,
  optionRefs,
  focusedOption,
  setFocusedOption
}) => {
  const {isNew}: any = data[index]
  const [identifier, setIdentifier] = useState(data[index][type].options[optIdx].id)
  const [identifierChanged, setIdentifierChanged] = useState(false)

  const [name, setName] = useState(data[index][type].options[optIdx].name)
  const [_idField, _idMeta, idHelper] = useField(`data[${index}][${type}].options[${optIdx}].id`)

  const canSlugify = isNew || data[index][type].options[optIdx].isNew
  const setTouched = () => {
    idHelper.setTouched(true, true)
  }

  useEffect(() => {
    if (optionRefs.current[focusedOption]?.current) {
      optionRefs.current[focusedOption].current.focus()
    }
  }, [])

  useEffect(() => {
    setTouched()
  }, [identifier])

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      arrayHelpers.insert(optIdx + 1, {id: '', name: ''})
      setFocusedOption(optIdx + 1)

      e.preventDefault()
    }
  }

  const setFocusStyles = (elements, action) => {
    elements.forEach((id) => {
      const element = document.getElementById(id)
      element?.classList[action]('focused')
    })
  }

  const onNameBlur = useCallback(
    (e) => {
      if (canSlugify || !identifierChanged) {
        setFieldValue(`data[${index}][${type}].options[${optIdx}].id`, identifier)
      }
      setFieldValue(`data[${index}][${type}].options[${optIdx}].name`, name)
      setFocusStyles([`selection-wrapper-${optIdx}`], 'remove')
    },
    [name, identifier]
  )

  const onIdBlur = (e) => {
    setFieldValue(`data[${index}][${type}].options[${optIdx}].id`, identifier)
    setIdentifier(identifier)
  }

  const onNameChange = useCallback(
    (e) => {
      const {value} = e.target
      setName(value)
      if (!canSlugify) return
      if (!identifierChanged) {
        const slugId = slugify(value.substring(0, 30))
        setIdentifier(slugId)
      }
    },
    [name, identifier]
  )

  const onIdentifierChange = useCallback(
    (e) => {
      const {value} = e.target
      if (value != '') {
        setIdentifierChanged(true)
      }
      setIdentifier(value)
    },
    [identifier]
  )

  return (
    <ContentBlock
      {...provided.draggableProps}
      ref={provided.innerRef}
      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
    >
      <ContentWrapper id={`selection-wrapper-${optIdx}`}>
        <StyledIcon {...provided.dragHandleProps} style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}>
          drag_indicator
        </StyledIcon>
        <InputWrapper>
          <InputField
            ref={optionRefs.current[optIdx]}
            name={`data[${index}][${type}].options[${optIdx}].name`}
            type='text'
            onChange={onNameChange}
            value={name}
            placeholder={'Label'}
            onFocus={(e) => {
              setFocusStyles([`selection-wrapper-${optIdx}`], 'add')
            }}
            onBlur={onNameBlur}
            onKeyDown={onKeyDown}
          />
        </InputWrapper>
        <InputWrapper>
          <Field
            id={`selection-input-id-${optIdx}`}
            as={InputField}
            error={
              errors &&
              errors[optIdx] &&
              errors[optIdx][type] &&
              errors[optIdx][type].options &&
              errors[optIdx][type].options.id
            }
            validate={(value) => {
              let error
              if (value === '' && identifier === '') {
                error = 'Field ID is required'
              }
              return error
            }}
            value={identifier}
            name={`data[${index}][${type}].options[${optIdx}].id`}
            type='text'
            onChange={onIdentifierChange}
            placeholder='Identifier'
            onBlur={onIdBlur}
            hideErrorMessage
          />
        </InputWrapper>
        {data[index][type].options.length > minOptions && (
          <RemoveButton type='button' onClick={() => arrayHelpers.remove(optIdx)}>
            <StyledIcon style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}>close</StyledIcon>
          </RemoveButton>
        )}
      </ContentWrapper>
    </ContentBlock>
  )
}

export default function Selection(props: SelectionProps) {
  const {onDragEnd, data, index, type, handleChange, arrayHelpers, setFieldValue, errors} = props
  const minOptions =
    type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION || type === BLOCK_TYPE.BOUNDING_BOXES ? 1 : 2
  const [view, setView] = useState('manual')
  const [canImport, setCanImport] = useState(true)
  const [csvOptions, setCsvOptions] = useState([])
  const handleCsvImport = () => {
    const previousOptions = data[index][type].options.map((i) => i.name)
    previousOptions.forEach((_v, idx) => {
      arrayHelpers.remove(idx)
    })
    csvOptions.forEach((value, idx) => {
      arrayHelpers.replace(idx, {id: slugify(value.substring(0, 30)), name: value})
    })
    setView('manual')
  }
  const optionRefs = useRef([])
  const [focusedOption, setFocusedOption] = useState(-1)
  const dataLength = data[index][type].options.length

  if (optionRefs.current.length !== dataLength) {
    if (focusedOption !== -1) {
      optionRefs.current = [
        ...optionRefs.current.slice(0, focusedOption),
        null,
        ...optionRefs.current.slice(focusedOption)
      ]
    }
    optionRefs.current = Array(dataLength)
      .fill()
      .map((_, i) => optionRefs.current[i] || React.createRef())
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'choiceDroppable'}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <SelectionTitle>
              <b>{'Options'}</b>
            </SelectionTitle>
            {view === 'manual' &&
              data[index][type].options.map((option, optIdx) => (
                <Draggable
                  key={`${option.name}-${optIdx}`}
                  draggableId={String(optIdx)}
                  index={optIdx}
                >
                  {(provided, snapshot) => {
                    const usePortal: boolean = snapshot.isDragging
                    const child = (
                      <SelectionOption
                        provided={provided}
                        snapshot={snapshot}
                        optIdx={optIdx}
                        data={data}
                        index={index}
                        type={type}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                        arrayHelpers={arrayHelpers}
                        errors={errors}
                        minOptions={minOptions}
                        optionRefs={optionRefs}
                        focusedOption={focusedOption}
                        setFocusedOption={setFocusedOption}
                      />
                    )
                    if (!usePortal) {
                      return child
                    }
                    return ReactDOM.createPortal(child, portal)
                  }}
                </Draggable>
              ))}
            {}
            {provided.placeholder}
            {view === 'import' && (
              <CSVWrapper>
                <CSVInput
                  label={`Enter a list of comma-separated options to import`}
                  setCanImport={setCanImport}
                  setOptions={setCsvOptions}
                  initialValue={data[index][type].options.map((i) => i.name)?.join(',') || ''}
                />
              </CSVWrapper>
            )}
            {view === 'manual' && (
              <ActionsBlock style={{padding: 10}}>
                <SecondaryButton
                  type='button'
                  onClick={() => {
                    arrayHelpers.push({id: '', name: '', isNew: true})
                    setFocusedOption(dataLength)
                  }}
                >
                  Add option
                </SecondaryButton>
                <ImportText onClick={(e) => setView('import')}>Batch Import...</ImportText>
              </ActionsBlock>
            )}
            {view === 'import' && (
              <ActionsBlock>
                <SecondaryButton
                  type='button'
                  disabled={!canImport || !csvOptions}
                  onClick={handleCsvImport}
                >
                  Import
                </SecondaryButton>
                <ImportText onClick={(e) => setView('manual')}>Add Manually...</ImportText>
              </ActionsBlock>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
