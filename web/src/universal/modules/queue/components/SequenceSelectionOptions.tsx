/**
 * https://github.com/atlassian/react-beautiful-dnd/issues/131
 */
import React, {useCallback} from 'react'
import styled from '@emotion/styled'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {Label} from './NewBlockModal'
import InputField from 'universal/components/InputField'
import SecondaryButton from 'universal/components/SecondaryButton'
import RootButton from 'client/components/RootButton'
import {PALETTE} from 'universal/styles/palette'
import slugify from 'universal/utils/slugify'
import {IBlock} from 'universal/types/generic'
import Icon from 'universal/components/Icon'
import SequenceSelectionOptionsMenu from './SequenceSelectionOptionsMenu'
import getItemStyle from 'universal/utils/getItemStyle'

interface SequenceSelectionOptions {
  data: Array<IBlock>
  index: number
  type: string
  handleChange: any
  arrayHelpers: any
  setFieldValue: any
  seqIdx: number
  seqType: string
}

const RemoveButton = styled(RootButton)({
  textAlign: 'end',
  color: PALETTE.PRIMARY_MAIN,
  fontWeight: '500',
  ':hover': {
    color: PALETTE.ERROR_MAIN
  }
})

const FieldTitle = styled.div({
  display: 'flex',
  justifyContent: 'space-between'
})

const ButtonBlock = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: 10
})

const FieldWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '100px 1fr 10px',
  marginBottom: 2.5,
  marginTop: 2.5,
  alignItems: 'center'
})

export default function Selection(props: SequenceSelectionOptions) {
  const {data, index, type, seqIdx, handleChange, arrayHelpers, setFieldValue, seqType} = props
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

      const changedItem = data[index][type].data[seqIdx][seqType].options[draggableId]
      const newList = data[index][type].data[seqIdx][seqType].options
      newList.splice(source.index, 1)
      newList.splice(destination.index, 0, changedItem)
      setFieldValue(data[index][type].data[seqIdx][seqType].options, newList)
    },
    [data, index]
  )
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'optionsDroppable'}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {data[index][type].data[seqIdx][seqType].options.map((_option, optIdx) => (
              <Draggable key={optIdx} draggableId={String(optIdx)} index={optIdx}>
                {(provided, snapshot) => (
                  <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    <FieldWrapper>
                      <Label>{'Option'}</Label>
                      <InputField
                        name={`data[${index}][${type}].data[${seqIdx}][${seqType}].options[${optIdx}].name`}
                        type='text'
                        onChange={(e) => {
                          handleChange(e)
                          const {value} = e.target
                          const slugId = slugify(value.substring(0, 30))
                          setFieldValue(
                            `data[${index}][${type}].data[${seqIdx}][${seqType}].options[${optIdx}].id`,
                            slugId
                          )
                        }}
                        value={data[index][type].data[seqIdx][seqType].options[optIdx].name}
                        placeholder={'Option'}
                      />
                      {data[index][type].data[seqIdx][seqType].options.length > 2 && (
                        <FieldTitle>
                          <div />
                          <RemoveButton type='button' onClick={() => arrayHelpers.remove(optIdx)}>
                            <Icon style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}>close</Icon>
                          </RemoveButton>
                        </FieldTitle>
                      )}
                    </FieldWrapper>
                    <FieldWrapper>
                      <Label>{'Identifier'}</Label>
                      <InputField
                        name={`data[${index}][${type}].data[${seqIdx}][${seqType}].options[${optIdx}].id`}
                        type='text'
                        onChange={handleChange}
                        value={data[index][type].data[seqIdx][seqType].options[optIdx].id}
                        placeholder={'Option identifier'}
                      />
                      <Icon
                        {...provided.dragHandleProps}
                        style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}
                      >
                        drag_indicator
                      </Icon>
                    </FieldWrapper>
                    {data[index][type].data.length > 1 &&
                      data[index][type].data[seqIdx]?.logic_jump && (
                        <SequenceSelectionOptionsMenu
                          setFieldValue={setFieldValue}
                          data={data}
                          type={type}
                          index={index}
                          seqIdx={seqIdx}
                          seqType={seqType}
                          optIdx={optIdx}
                        />
                      )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <ButtonBlock>
        <SecondaryButton
          type='button'
          onClick={() => {
            arrayHelpers.push({id: '', name: ''})
          }}
        >
          Add option
        </SecondaryButton>
      </ButtonBlock>
    </DragDropContext>
  )
}
