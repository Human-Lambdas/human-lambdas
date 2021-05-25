/**
 * FIXME: Issue with firefox when
 * droped on placeholder.
 * https://github.com/STRML/react-grid-layout/pull/1053
 */
import React, {useState, useCallback, useRef} from 'react'
import {Layout} from 'react-grid-layout'
import styled from '@emotion/styled'
import useRouter from 'client/hooks/useRouter'
import UUID from 'uuidjs'
import {Formik, Form, FieldArray, ArrayHelpers} from 'formik'
import {BLOCKS, BLOCK_TYPE} from 'universal/utils/constants'
import getBlockDims from 'universal/utils/getBlockDims'
import {IBlock, IQueue, ITask} from 'universal/types/generic'
import useModal from '../../../../client/hooks/useModal'
import NewBlockModal from './NewBlockModal'
import BuilderHeader from './BuilderHeader'
import BlockComponent from 'universal/components/BlockComponent'
import {PALETTE} from 'universal/styles/palette'
import Icon from 'universal/components/Icon'
import RGL from 'universal/components/RGL'
import {queueSchema} from 'universal/validations/yupSchema'
import BlockWrapper from 'universal/components/BlockWrapper'
import ConfirmationModal from 'client/components/ConfirmationModal'

interface QueueBuilderProps {
  orgId: number
  onSubmitHandler: (values: IQueue, orgId: number) => void
  queue: IQueue | {}
}

const FormContainer = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: PALETTE.RGL_BACKGROUND
})

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  height: 'calc(100vh - 50px)',
  overflow: 'scroll'
})

const DraggableEl = styled.div({
  textAlign: 'center',
  border: '1px solid #e8eCee',
  backgroundColor: '#fff',
  margin: '5px 10px',
  padding: '10px',
  minHeight: '72px',
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'grab',
  ':hover': {
    borderColor: '#d1d9dd'
  }
})

const IconBox = styled.div<{backgroundColor: string}>(({backgroundColor}) => ({
  backgroundColor,
  borderRadius: 5,
  marginRight: 10,
  padding: 5,
  width: 48,
  minWidth: 48
}))

const EmptyState = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
})

const StyledIcon = styled(Icon)({
  display: 'block',
  fontSize: 38,
  color: '#fff'
})

const BlockInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left'
})

const Note = styled.span({
  color: PALETTE.TEXT_GRAY,
  fontSize: 12,
  marginTop: 2.5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
})

const BlockContainer = styled.div({
  borderRight: '1px solid #e8eCee',
  backgroundColor: '#f6f8f9',
  height: '100%',
  overflow: 'scroll',
  width: 350,
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  top: '0px'
})

const BlockArea = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%'
})

const PrimaryText = styled.div({
  height: 50,
  fontWeight: 600,
  padding: 15,
  color: PALETTE.TEXT_MAIN
})

const SecondaryText = styled.div({
  height: 50,
  fontWeight: 400,
  color: PALETTE.TEXT_GRAY,
  width: '30%',
  textAlign: 'center'
})

const NewQueue = (props: QueueBuilderProps) => {
  const {queue, onSubmitHandler, orgId} = props
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const {id: queueId} = queue || {}
  const {history} = useRouter() as any
  const [currentBlockId, setCurrentBlockId] = useState<string | number | undefined>(undefined)
  const [droppingItem, setDroppingItem] = useState<Layout | null>(null)
  const [queueHasChanges, setQueueHasChanges] = useState<boolean>(false)

  const {modalPortal, togglePortal, closePortal} = useModal({noClose: true})
  const {
    modalPortal: confirmConfirmation,
    togglePortal: toggleConfirmation,
    closePortal: closeConfirmation
  } = useModal()
  const formRef = useRef()

  const initialValues = queueId ? queue : {name: 'Queue Title', data: []}
  const cancelUrl = queueId ? `/queues/${queueId}` : `/queues`

  const onDrop = useCallback(
    (
      layout: Layout,
      item: any,
      arrayHelpers: ArrayHelpers,
      setFieldValue: any,
      data: Array<ITask>
    ) => {
      const {i} = item
      if (i) {
        const newData = data.map((item) => {
          const newLayout = layout.filter((f) => f.i === item.layout.i)[0]
          return {...item, layout: newLayout}
        })
        setFieldValue(`data`, newData)
        const {type} = droppingItem || {}
        const isExtendedType = [
          BLOCK_TYPE.SINGLE_SELECTION,
          BLOCK_TYPE.NAMED_ENTITY_RECOGNITION,
          BLOCK_TYPE.BOUNDING_BOXES,
          BLOCK_TYPE.MULTIPLE_SELECTION
        ].includes(type)

        const usesPlaceholder = [
          BLOCK_TYPE.EMAIL,
          BLOCK_TYPE.EMBED,
          BLOCK_TYPE.IMAGE,
          BLOCK_TYPE.LINK,
          BLOCK_TYPE.NUMBER,
          BLOCK_TYPE.RICH_TEXT,
          BLOCK_TYPE.TEXT,
          BLOCK_TYPE.VIDEO,
          BLOCK_TYPE.DATE
        ].includes(type)

        const formSequence = {
          [type]: {
            is_required: true,
            history: [],
            data: []
          }
        }

        const textSequence = {
          [type]: {
            placeholder: [],
            ordering_disabled: false,
            delete_disabled: false,
            edit_disabled: false
          }
        }

        const singleOrMultiSelection = {
          [type]: {
            options: [
              {id: 'option_1', name: 'Option 1'},
              {id: 'option_2', name: 'Option 2'},
              {id: 'option_3', name: 'Option 3'}
            ]
          }
        }
        const nameEntitySelection = {
          [type]: {
            options: [
              {id: 'option_1', name: 'Option 1'},
              {id: 'option_2', name: 'Option 2'}
            ],
            use_placeholder: false,
            allow_edits: false
          }
        }
        const boundingBoxSelection = {
          [type]: {
            options: [
              {id: 'option_1', name: 'Option 1'},
              {id: 'option_2', name: 'Option 2'}
            ]
          }
        }
        const otherTypes = {
          [type]: {
            ...(type === BLOCK_TYPE.RICH_TEXT && {format: 'html'}),
            ...(usesPlaceholder && {use_placeholder: false})
          }
        }
        let options =
          type === BLOCK_TYPE.FORM_SEQUENCE
            ? formSequence
            : isExtendedType
            ? singleOrMultiSelection
            : otherTypes

        if (type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION) {
          options = nameEntitySelection
        }
        if (type === BLOCK_TYPE.BOUNDING_BOXES) {
          options = boundingBoxSelection
        }
        if (type === BLOCK_TYPE.TEXT_SEQUENCE) {
          options = textSequence
        }

        const newBlock = {
          isNew: true,
          type,
          _id: i,
          id: `${type}_id`,
          name: `${BLOCKS.filter((b) => b.type === type)[0].title} Block Title`,
          layout: {
            ...item,
            isDraggable: undefined
          },
          ...options
        }
        arrayHelpers.push(newBlock)
        setCurrentBlockId(newBlock._id)
        setIsDragging(false)
        togglePortal()
      } else {
        return
      }
    },
    [isDragging, droppingItem]
  )

  const onLayoutChange = useCallback(
    (layout: Layout, data: Array<ITask>, setFieldValue) => {
      const newData = data.map((item) => {
        const newLayout = layout.filter((f) => f.i === item.layout.i)[0]
        return {...item, layout: newLayout}
      })
      setFieldValue(`data`, newData)
    },
    [isDragging, droppingItem]
  )

  const onMouseDown = useCallback((e) => {
    setIsDragging(true)
    setQueueHasChanges(true)
  }, [])

  const onMouseUp = useCallback((e) => {
    setIsDragging(false)
  }, [])

  const onDragStart = useCallback(
    (e) => {
      e.dataTransfer.setData('text/plain', '')
      e.target.style.cursor = 'grabbing'
      const {type} = e.target.dataset || {}
      const elLayout = getBlockDims(type)
      setDroppingItem(Object.assign({}, {i: UUID.genV4().toString()}, elLayout, {type}))
    },
    [isDragging, droppingItem]
  )

  const onDragEnd = useCallback(
    (e) => {
      setIsDragging(false)
      e.target.style.cursor = 'grab'
    },
    [isDragging, droppingItem]
  )

  // memoize
  const renderBlocks = React.useCallback(
    (values: IQueue, arrayHelpers, handleChange, setFieldValue, errors) => {
      return values.data.map((block: IBlock, idx) => (
        <BlockWrapper
          key={block.layout?.i || block._id}
          type={block.type}
          data-grid={block.layout}
          index={idx}
        >
          <BlockComponent
            index={idx}
            handleChange={(e) => {
              setQueueHasChanges(true)
              handleChange(e)
            }}
            isEditing={true}
            setFieldValue={setFieldValue}
            block={block}
            errors={errors}
            onDelete={() => {
              arrayHelpers.remove(idx)
              setIsDragging(false)
            }}
            onEdit={() => {
              setCurrentBlockId(block._id)
              togglePortal()
            }}
          />
        </BlockWrapper>
      ))
    },
    []
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={queueSchema}
      validateOnBlur={true}
      validateOnChange={true}
      validateOnMount
      onSubmit={async (values) => {
        try {
          await onSubmitHandler(values, orgId)
          setQueueHasChanges(false)
        } catch (e) {
          setQueueHasChanges(true)
        }
      }}
      enableReinitialize={true}
      innerRef={formRef}
    >
      {({handleBlur, handleChange, values, errors, touched, setFieldValue, isValid}) => {
        return (
          <FormContainer>
            <BuilderHeader
              queueId={queueId}
              setQueueHasChanges={setQueueHasChanges}
              queueHasChanges={queueHasChanges}
              toggleConfirmation={toggleConfirmation}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
              error={Boolean(touched.name && errors.name)}
              isValid={isValid}
            />
            <FieldArray
              name='data'
              render={(arrayHelpers) => (
                <Container>
                  <BlockContainer>
                    <PrimaryText>Blocks</PrimaryText>
                    <BlockArea onDragOver={(e) => e.preventDefault()}>
                      {BLOCKS.map(
                        ({title, description, type, placeholder, iconColor, icon}, idx) => (
                          <DraggableEl
                            data-placeholder={placeholder}
                            data-type={type}
                            draggable={true}
                            key={idx}
                            unselectable='on'
                            onDragStart={onDragStart}
                            onDragEnd={onDragEnd}
                            onMouseDown={onMouseDown}
                            onMouseUp={onMouseUp}
                          >
                            <IconBox backgroundColor={iconColor}>
                              <StyledIcon>{icon}</StyledIcon>
                            </IconBox>
                            <BlockInfo>
                              <b>{title}</b>
                              <Note>{description}</Note>
                            </BlockInfo>
                          </DraggableEl>
                        )
                      )}
                    </BlockArea>
                  </BlockContainer>
                  {!values.data.length && !isDragging ? (
                    <EmptyState>
                      <PrimaryText>Drag a Block</PrimaryText>
                      <SecondaryText>
                        This queue is currently empty. Drag and drop any block into the canvas to
                        get started.
                      </SecondaryText>
                    </EmptyState>
                  ) : (
                    <RGL
                      droppingItem={droppingItem}
                      isDraggable={true}
                      isDroppable={true}
                      isResizable={true}
                      onDrop={(layout, item) =>
                        onDrop(layout, item, arrayHelpers, setFieldValue, values?.data)
                      }
                      onDragStart={() => {
                        setIsDragging(true)
                        setQueueHasChanges(true)
                      }}
                      onLayoutChange={(layout) =>
                        onLayoutChange(layout, values?.data, setFieldValue)
                      }
                      layouts={values.data.map((block) => block.layout)}
                    >
                      {renderBlocks(values, arrayHelpers, handleChange, setFieldValue, JSON.stringify(errors))}
                    </RGL>
                  )}
                  {modalPortal(
                    <NewBlockModal
                      closePortal={closePortal}
                      setFieldValue={(field, data, hasChanges = true) => {
                        if (hasChanges) {
                          setQueueHasChanges(true)
                          setFieldValue(field, data)
                        } else {
                          setQueueHasChanges(false)
                          setFieldValue(field, data)
                        }
                      }}
                      values={values}
                      currentBlockId={currentBlockId}
                      handleChange={(e) => {
                        setQueueHasChanges(true)
                        handleChange(e)
                      }}
                      arrayHelpers={arrayHelpers}
                      errors={errors}
                      isValid={isValid}
                    />
                  )}
                  {confirmConfirmation(
                    <ConfirmationModal
                      closePortal={closeConfirmation}
                      label={`Exit without saving`}
                      cancelLabel={`Save and Exit`}
                      message={`You have made changes but they haven't been saved.`}
                      onConfirm={() => {
                        history.replace(cancelUrl)
                      }}
                      onCancel={async () => {
                        if (formRef.current) {
                          formRef?.current?.handleSubmit()
                        }

                        // await onSave(values)
                      }}
                    />
                  )}
                </Container>
              )}
            />
          </FormContainer>
        )
      }}
    </Formik>
  )
}

export default NewQueue
