import React from 'react'
import styled from '@emotion/styled'
import {FieldArray} from 'formik'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {Label} from './NewBlockModal'
import InputField from 'universal/components/InputField'
import SecondaryButton from 'universal/components/SecondaryButton'
import {BLOCK_TYPE, BLOCKS} from 'universal/utils/constants'
import RootButton from 'client/components/RootButton'
import {PALETTE} from 'universal/styles/palette'
import slugify from 'universal/utils/slugify'
import {IBlock} from 'universal/types/generic'
import Icon from 'universal/components/Icon'
import BinaryMenu from './BinaryMenu'
import SequenceSelectionOptions from './SequenceSelectionOptions'
import getItemStyle from 'universal/utils/getItemStyle'

interface SequenceProps {
  onDragEnd: any
  data: Array<IBlock>
  index: number
  type: string
  handleChange: any
  arrayHelpers: any
  setFieldValue: any
  originRef: string
  togglePortal: any
}

const IconButton = styled(RootButton)({
  color: PALETTE.PRIMARY_MAIN
})

const FieldWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '100px 1fr 10px',
  marginBottom: 2.5,
  marginTop: 2.5,
  alignItems: 'center'
})

const ContentBlock = styled.div({
  padding: '10px 0',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `0.5px solid #eceef0`
})

const Type = styled.div({
  fontWeight: 500,
  fontSize: 12,
  color: PALETTE.PRIMARY_MAIN,
  textTransform: 'capitalize'
})

const FieldTitle = styled.div({
  marginRight: -5,
  display: 'flex',
  justifyContent: 'space-between'
})

export default function Sequence(props: SequenceProps) {
  const {
    originRef,
    togglePortal,
    onDragEnd,
    data,
    index,
    type,
    handleChange,
    arrayHelpers,
    setFieldValue
  } = props
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'choiceDroppable'}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <FieldWrapper>
              <b>{'Blocks'}</b>
              <SecondaryButton type='button' ref={originRef} onClick={togglePortal}>
                + Add type
              </SecondaryButton>
            </FieldWrapper>
            {data[index][type].data.map((sequence, seqIdx) => (
              <Draggable key={seqIdx} draggableId={String(seqIdx)} index={seqIdx}>
                {(provided, snapshot) => (
                  <ContentBlock
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    {data[index][type].data.length > 0 && (
                      <FieldTitle>
                        <Type>{BLOCKS.filter((f) => f.type === sequence?.type)[0]?.title}</Type>
                        <div>
                          {(sequence.type === BLOCK_TYPE.BINARY ||
                            sequence.type === BLOCK_TYPE.SINGLE_SELECTION) && (
                            <IconButton
                              type='button'
                              onClick={() =>
                                setFieldValue(
                                  `data[${index}][${type}].data[${seqIdx}].logic_jump`,
                                  data[index][type].data[seqIdx]?.logic_jump ? null : {}
                                )
                              }
                            >
                              <Icon
                                style={{
                                  fontSize: 15,
                                  color: data[index][type].data[seqIdx]?.logic_jump
                                    ? PALETTE.PRIMARY_MAIN
                                    : PALETTE.TEXT_MAIN
                                }}
                              >
                                call_split
                              </Icon>
                            </IconButton>
                          )}
                        </div>
                      </FieldTitle>
                    )}
                    <FieldWrapper>
                      <Label>Name</Label>
                      <InputField
                        name={`data[${index}][${type}].data[${seqIdx}].name`}
                        type='text'
                        onChange={(e) => {
                          handleChange(e)
                          const {value} = e.target
                          const slugId = slugify(value.substring(0, 30))
                          setFieldValue(`data[${index}][${type}].data[${seqIdx}].id`, slugId)
                        }}
                        value={data[index][type].data[seqIdx].name}
                        placeholder={'Name'}
                      />
                      <IconButton type='button' onClick={() => arrayHelpers.remove(seqIdx)}>
                        <Icon style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}>close</Icon>
                      </IconButton>
                    </FieldWrapper>
                    <FieldWrapper>
                      <Label>Identifier</Label>
                      <InputField
                        name={`data[${index}][${type}].data[${seqIdx}].id`}
                        type='text'
                        onChange={handleChange}
                        value={data[index][type].data[seqIdx].id}
                        placeholder={'Identifier'}
                      />
                      <Icon
                        {...provided.dragHandleProps}
                        style={{fontSize: 15, color: PALETTE.TEXT_MAIN}}
                      >
                        drag_indicator
                      </Icon>
                    </FieldWrapper>
                    {data[index][type].data[seqIdx].type === BLOCK_TYPE.BINARY &&
                      data[index][type].data.length > 1 &&
                      data[index][type].data[seqIdx]?.logic_jump && (
                        <BinaryMenu
                          data={data}
                          index={index}
                          type={type}
                          seqIdx={seqIdx}
                          setFieldValue={setFieldValue}
                        />
                      )}
                    {(data[index][type].data[seqIdx].type === BLOCK_TYPE.SINGLE_SELECTION ||
                      data[index][type].data[seqIdx].type === BLOCK_TYPE.MULTIPLE_SELECTION) && (
                      <FieldArray
                        name={`data[${index}][${type}].data[${seqIdx}][${data[index][type].data[seqIdx].type}].options`}
                        render={(arrayHelpers) => (
                          <div>
                            <SequenceSelectionOptions
                              seqIdx={seqIdx}
                              seqType={data[index][type].data[seqIdx].type}
                              index={index}
                              type={type}
                              data={data}
                              handleChange={handleChange}
                              arrayHelpers={arrayHelpers}
                              setFieldValue={setFieldValue}
                            />
                          </div>
                        )}
                      />
                    )}
                  </ContentBlock>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
