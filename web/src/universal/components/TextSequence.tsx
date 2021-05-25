import React, {useCallback} from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import {FieldArray} from 'formik'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import TextArea from 'client/components/TextArea'
import SecondaryButton from 'universal/components/SecondaryButton'
import RootButton from 'client/components/RootButton'
import {PALETTE} from 'universal/styles/palette'
import Icon from 'universal/components/Icon'
import getItemStyle from 'universal/utils/getItemStyle'

interface SequenceProps {
  onDragEnd: any
  data: Array<string>
  index: number
  type: string
  handleChange: any
  setFieldValue: any
  name: string
  togglePortal: any
  isEditing?: boolean
  isAudits?: boolean
  targetName: string
  placeholder?: Array<string>
  settings: any
}

interface StyledProps {
  isEditing?: boolean
  isAudits?: boolean
  deleteDisabled?: boolean
  orderingDisabled?: boolean
  isTask?: boolean
}

const portal: HTMLElement = document.createElement('div')

if (!document.body) {
  throw new Error('body not ready for portal creation!')
}

document.body.appendChild(portal)

const IconButton = styled(RootButton)({
  color: PALETTE.PRIMARY_MAIN
})

const FieldWrapper = styled.div({
  display: 'grid',
  marginBottom: 2.5,
  marginTop: 2.5,
  alignItems: 'center'
})

const ContentWrapper = styled(FieldWrapper)<StyledProps>`
  grid-template-columns: 1fr;
  ${({isTask, orderingDisabled, deleteDisabled}) =>
    isTask && !orderingDisabled && !deleteDisabled
      ? `
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    &.focused {
      grid-template-columns: auto 1fr auto;
      grid-gap: 10px;
    }
    &:hover {
      grid-template-columns: auto 1fr auto;
      grid-gap: 10px;
    }
`
      : ``}

  ${({isEditing}) =>
    isEditing
      ? `
  &.focused {
    grid-template-columns: 1fr auto;
  }
  &:hover {
    grid-template-columns: 1fr auto;
  }
`
      : ``}
  ${({isTask, orderingDisabled, deleteDisabled}) =>
    isTask && orderingDisabled && !deleteDisabled
      ? `
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
  `
      : ``}

  ${({isTask, deleteDisabled, orderingDisabled}) =>
    isTask && deleteDisabled && !orderingDisabled
      ? `
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
`
      : ``}
  ${({isAudits}) =>
    isAudits
      ? `
    grid-template-columns: 1fr;
  `
      : ``}
`

const ContentBlock = styled.div({
  padding: '5px 0',
  display: 'flex',
  flexDirection: 'column'
})

const InputWrapper = styled.div<StyledProps>`
  ${({isTask, orderingDisabled, deleteDisabled}) =>
    isTask && !orderingDisabled && !deleteDisabled
      ? `
      margin: 0px;
      `
      : ``}

  ${({isTask, deleteDisabled, orderingDisabled}) =>
    isTask && deleteDisabled && orderingDisabled
      ? `
      margin: 0px;
      `
      : ``}

  ${({isEditing, deleteDisabled}) =>
    isEditing && !deleteDisabled
      ? `
      margin-right: 25px;
      ${ContentWrapper}:hover & {
        margin-right: 10px;
      }
      &.focused {
        margin-right: 10px;
      }
      `
      : ``}
`

const StyledIcon = styled(Icon)<StyledProps>`
  ${({isTask, orderingDisabled}) =>
    isTask && !orderingDisabled
      ? `
    visibility: hidden;
    &.focused {
      visibility: visible;
    }
    ${ContentWrapper}:hover & {
      visibility: visible;
    }
  `
      : ``}
  ${({isTask, orderingDisabled}) =>
    isTask && orderingDisabled
      ? `
    display: none;
  `
      : ``}
  ${({isEditing}) =>
    isEditing
      ? `
      display: none;
      &.focused {
        display: block;
      }

      ${ContentWrapper}:hover & {
        display: block;
      }
    `
      : ``}
`

const BlockInput = ({
  provided,
  snapshot,
  seqIdx,
  data,
  index,
  type,
  setFieldValue,
  targetName,
  placeholder,
  isAudits,
  arrayHelpers,
  isEditing,
  settings
}) => {
  const setFocusStyles = (elements, action) => {
    elements.forEach((id) => {
      const element = document.getElementById(id)
      element?.classList[action]('focused')
    })
  }
  const isTask = !isEditing && !isAudits
  const showDelete = isAudits ? false : !settings.deleteDisabled
  return (
    <ContentBlock
      {...provided.draggableProps}
      ref={provided.innerRef}
      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
    >
      {data.length > 0 && (
        <ContentWrapper
          id={`content-wrapper-${seqIdx}`}
          isAudits={isAudits}
          isEditing={isEditing}
          isTask={isTask}
          orderingDisabled={settings.orderingDisabled}
          deleteDisabled={settings.deleteDisabled}
        >
          {isTask && !settings.orderingDisabled ? (
            <StyledIcon
              {...provided.dragHandleProps}
              isAudits={isAudits}
              isEditing={isEditing}
              isTask={isTask}
              id={`drag-icon-${seqIdx}`}
              orderingDisabled={settings.orderingDisabled}
              style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}
            >
              drag_indicator
            </StyledIcon>
          ) : (
            ''
          )}

          <InputWrapper
            id={`input-wrapper-${seqIdx}`}
            isAudits={isAudits}
            isEditing={isEditing}
            isTask={isTask}
            orderingDisabled={settings.orderingDisabled}
            deleteDisabled={settings.deleteDisabled}
          >
            <TextArea
              name={`data[${index}][${type}].value[${seqIdx}]`}
              cacheMeasurements={true}
              type='text'
              onFocus={() =>
                setFocusStyles(
                  [
                    `content-wrapper-${seqIdx}`,
                    `drag-icon-${seqIdx}`,
                    `close-icon-${seqIdx}`,
                    `input-wrapper-${seqIdx}`
                  ],
                  'add'
                )
              }
              onBlur={() =>
                setFocusStyles(
                  [
                    `content-wrapper-${seqIdx}`,
                    `drag-icon-${seqIdx}`,
                    `close-icon-${seqIdx}`,
                    `input-wrapper-${seqIdx}`
                  ],
                  'remove'
                )
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.keyCode === 13) {
                  e.preventDefault()
                }
              }}
              onChange={(e) => {
                const {value} = e.target
                setFieldValue(`${targetName}[${seqIdx}]`, value)
              }}
              value={data[seqIdx]}
              placeholder={placeholder?.[seqIdx] || 'Text'}
              readOnly={isAudits}
              disabled={settings.editDisabled}
            />
          </InputWrapper>
          {showDelete && (
            <IconButton
              type='button'
              disabled={isAudits}
              onClick={() => arrayHelpers.remove(seqIdx)}
            >
              <StyledIcon
                isAudits={isAudits}
                isEditing={isEditing}
                deleteDisabled={settings.deleteDisabled}
                id={`close-icon-${seqIdx}`}
                style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}
                isTask={isTask}
              >
                close
              </StyledIcon>
            </IconButton>
          )}
        </ContentWrapper>
      )}
    </ContentBlock>
  )
}

const TextSequence = (props: SequenceProps) => {
  const {
    name,
    data,
    index,
    isEditing,
    type,
    isAudits,
    targetName,
    setFieldValue,
    placeholder,
    settings
  } = props
  const onDragEnd = useCallback(
    (result) => {
      const {destination, source, draggableId} = result
      if (
        !destination ||
        (destination.droppableId === source.droppableId && destination.index === source.index)
      ) {
        return
      }

      const changedItem = data[draggableId]

      const newList = data
      newList.splice(source.index, 1)
      newList.splice(destination.index, 0, changedItem)
      setFieldValue(`data[${index}][${type}].value`, newList)
    },
    [data, index]
  )

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => {
        return (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='dropable-list'>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={{width: '100%'}}>
                  <FieldWrapper>
                    {Array.isArray(data) &&
                      data.map((_, seqIdx) => {
                        return (
                          <Draggable
                            key={seqIdx}
                            draggableId={String(seqIdx)}
                            isDragDisabled={isEditing || isAudits || settings.orderingDisabled}
                            index={seqIdx}
                          >
                            {(provided, snapshot) => {
                              const usePortal: boolean = snapshot.isDragging
                              const child = (
                                <BlockInput
                                  provided={provided}
                                  snapshot={snapshot}
                                  seqIdx={seqIdx}
                                  data={data}
                                  index={index}
                                  type={type}
                                  setFieldValue={setFieldValue}
                                  targetName={targetName}
                                  placeholder={placeholder}
                                  isAudits={isAudits}
                                  arrayHelpers={arrayHelpers}
                                  isEditing={isEditing}
                                  settings={settings}
                                />
                              )
                              if (!usePortal) {
                                return child
                              }

                              return ReactDOM.createPortal(child, portal)
                            }}
                          </Draggable>
                        )
                      })}
                  </FieldWrapper>
                  {provided.placeholder}
                  <ContentBlock>
                    <SecondaryButton
                      type='button'
                      disabled={isAudits || settings.editDisabled}
                      onClick={() => {
                        arrayHelpers.push('')
                      }}
                    >
                      Add Item
                    </SecondaryButton>
                  </ContentBlock>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )
      }}
    />
  )
}

TextSequence.defaultProps = {
  settings: {
    deleteDisabled: false,
    editDisabled: false,
    orderingDisabled: false
  }
}

export default TextSequence
