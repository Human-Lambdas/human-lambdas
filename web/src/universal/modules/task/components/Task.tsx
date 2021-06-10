import React, {useEffect, useState, useRef} from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import {Formik, Form, FieldArray} from 'formik'
import RGL from 'universal/components/RGL'
import BlockComponent from 'universal/components/BlockComponent'
import {IBlock, ITask, IUser, IQueue} from 'universal/types/generic'
import {PALETTE} from 'universal/styles/palette'
import PrimaryButton from 'universal/components/PrimaryButton'
import SecondaryButton from 'universal/components/SecondaryButton'
import Sidebar from './Sidebar'
import useRouter from 'client/hooks/useRouter'
import AppHeader from 'universal/components/AppHeader'
import BlockWrapper from 'universal/components/BlockWrapper'
import {taskSchema} from 'universal/validations/yupSchema'
import AuditDecision from 'universal/modules/audits/components/AuditDecision'
import Spinner from 'client/components/Spinner'
import useModal from 'client/hooks/useModal'
import ConfirmationModal from 'client/components/ConfirmationModal'
import {workfllowActions} from 'client/redux/queuesReducers'

interface TaskProps {
  activity: any
  isAudits?: boolean
  users: Array<IUser>
  onPost: (comment: string) => void
  onDelete: (deleteId: number) => void
  orgId: number
  userId: number
  task: ITask
  isStaff: any
  onSubmit: (values: ITask, formikBag: any, orgId: number) => void
  onSave: (task: ITask) => Promise<any>
  onAssign: (userId: number | null, prevUserId: number | null) => void
  onAuditDecision: (correct: boolean) => void
  isLoading: boolean
  isPosting: boolean
  queues: Array<IQueue>
  setSelectedQueue: (arg: IQueue) => void
}

const FormContainer = styled(Form)({
  display: 'flex',
  height: '100%',
  flexDirection: 'column'
})

const Content = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
})

const ActionBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: min-content ${(props) => (props.audits ? '35px 35px' : '')} min-content;
  column-gap: 20px;
  justify-content: flex-end;
  flex-direction: row;
`

const QueueName = styled.div({
  fontWeight: 500,
  color: PALETTE.TEXT_MAIN
})

const Task = (props: TaskProps) => {
  const {
    onDelete,
    onPost,
    userId,
    activity,
    task,
    onSubmit,
    taskNav,
    orgId,
    onSave,
    users,
    onAssign,
    isAudits,
    onAuditDecision,
    isLoading,
    isPosting,
    isStaff,
    queues,
    setSelectedQueue
  } = props
  const {id: taskId, queue_id: queueId, correct: correct} = task || {}
  const {history} = useRouter() as any
  const [assignedTo, setAssignedTo] = useState(taskId)
  const {next, previous} = taskNav || {}
  const returnUrl = `/queues/${queueId}` || 'queues'
  const {queue} = task || ''
  const layouts = task.data.map((block) => block.layout)
  const isNotAssignedToMe = assignedTo !== userId
  let readOnly = isAudits || isNotAssignedToMe
  if (isStaff && isNotAssignedToMe) {
    readOnly = true
  }
  const [isTaskSubmiting, setSubmiting] = useState<boolean>(false)
  const [isSaving, setSaving] = useState<boolean>(false)
  const [view, setView] = useState(null)
  const [assigneeDetails, setAssigneeDetails] = useState(null)
  // on-going issue https://github.com/formium/formik/issues/1950
  const [initialErrors, setInitialErrors] = useState({})
  const {
    location: {pathname, state: locationState}
  } = history || {}
  const formRef = useRef()

  const [taskChanged, setTaskChanged] = useState<boolean>(locationState?.taskChanged || false)

  const {
    modalPortal: confirmTask,
    togglePortal: toggleTaskModal,
    closePortal: closeTaskModal
  } = useModal()
  const {
    modalPortal: confirmAssignee,
    togglePortal: toggleAssigneeModal,
    closePortal: closeAssigneeModal
  } = useModal()

  const isAuditsRequestedFromUrl = pathname.includes('audit')
  const isLoadingPrevious = view === 'previous'
  const isLoadingNext = view === 'next'

  useEffect(() => {
    const {assigned_to} = task || {}
    setAssignedTo(assigned_to)
    const currentQueue = queues.find((q) => q.id === task.queue_id)
    if (currentQueue) {
      setSelectedQueue(currentQueue)
    }
  }, [isAudits, task])

  useEffect(() => {
    return () => {
      if (history.action === 'POP') {
        history.replace({
          pathname: history.location.pathname,
          state: locationState
        })
      }
    }
  }, [history])

  const resetView = () => setView(null)
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={task}
        onSubmit={(_values, formikBag) => {
          formikBag.setSubmitting(false)
        }}
        validateOnChange
        validateOnBlur
        validateOnMount
        validationSchema={taskSchema}
        innerRef={formRef}
        initialErrors={initialErrors}
      >
        {({handleChange, values, setFieldValue, isValid, errors, handleBlur, validateForm}) => {
          return (
            <FormContainer>
              {isAudits && isAuditsRequestedFromUrl ? (
                <AppHeader
                  leftBarItems={
                    <SecondaryButton
                      key='back'
                      type='button'
                      onClick={() =>
                        history.replace({
                          pathname: '/audits',
                          state: locationState
                        })
                      }
                    >
                      Back
                    </SecondaryButton>
                  }
                  midBarItems={<QueueName key='name'>{queue}</QueueName>}
                  rightBarItems={
                    <ActionBlock audits={!isStaff ? true : false} key='nav_block'>
                      <SecondaryButton
                        hideFocus={true}
                        disabled={!previous}
                        type='button'
                        onClick={() => {
                          setView('previous')
                          history.replace({
                            pathname: previous.split('?')[0],
                            state: locationState
                          })
                        }}
                      >
                        {isLoadingPrevious && isLoading ? <Spinner /> : `Previous`}
                      </SecondaryButton>
                      {!isStaff && (
                        <AuditDecision
                          orgId={orgId}
                          queueId={queueId}
                          taskId={taskId}
                          correct={correct}
                          onAuditDecision={(args) => {
                            resetView()
                            onAuditDecision(args)
                          }}
                        />
                      )}
                      <PrimaryButton
                        hideFocus={true}
                        disabled={!next}
                        type='button'
                        onClick={() => {
                          setView('next')
                          history.replace({
                            pathname: next.split('?')[0],
                            state: locationState
                          })
                        }}
                      >
                        {isLoadingNext && isLoading ? <Spinner /> : `Next`}
                      </PrimaryButton>
                    </ActionBlock>
                  }
                />
              ) : (
                <AppHeader
                  leftBarItems={
                    <SecondaryButton
                      key='back'
                      type='button'
                      onClick={() => {
                        if (taskChanged && formRef.current.dirty) {
                          toggleTaskModal()
                        } else {
                          history.replace({
                            pathname: returnUrl,
                            state: locationState
                          })
                        }
                      }}
                    >
                      Back
                    </SecondaryButton>
                  }
                  midBarItems={<QueueName key='name'>{queue}</QueueName>}
                  rightBarItems={
                    <ActionBlock>
                      <SecondaryButton
                        hideFocus={true}
                        disabled={readOnly || isSaving}
                        type='button'
                        onClick={async () => {
                          setSaving(true)
                          await onSave(values)
                          setTaskChanged(false)
                          setSaving(false)
                          const preExistingErrors = await validateForm(values)
                          setInitialErrors(preExistingErrors)
                        }}
                      >
                        {isSaving ? <Spinner /> : `Save`}
                      </SecondaryButton>
                      <PrimaryButton
                        hideFocus={true}
                        disabled={readOnly || isTaskSubmiting || !isValid}
                        type='submit'
                        onClick={async (e) => {
                          setSubmiting(true)
                          await onSubmit(e, values, orgId)
                          setSubmiting(false)
                          setInitialErrors(errors)
                        }}
                      >
                        {isTaskSubmiting ? <Spinner /> : `Submit`}
                      </PrimaryButton>
                    </ActionBlock>
                  }
                />
              )}
              <FieldArray
                name='data'
                render={() => (
                  <Content>
                    <Sidebar
                      onPost={(args) => {
                        resetView()
                        onPost(args)
                      }}
                      onDelete={(args) => {
                        resetView()
                        onDelete(args)
                      }}
                      isPosting={isPosting}
                      assignedTo={assignedTo}
                      task={task}
                      users={users}
                      onAssign={(assignee, assignor) => {
                        resetView()
                        setAssigneeDetails({
                          assignee,
                          assignor
                        })
                        if (taskChanged && formRef.current.dirty) {
                          toggleAssigneeModal()
                        } else {
                          onAssign(assignee, assignor)
                        }
                      }}
                      queueId={queueId}
                      orgId={orgId}
                      activity={activity}
                      isAudits={isAudits}
                      correct={correct}
                      queue={queue}
                    />
                    <div style={{width: '100%'}}>
                      {!(
                        (isAudits && isLoadingNext && isLoading) ||
                        (isLoadingPrevious && isLoading)
                      ) && (
                        <RGL
                          isDraggable={false}
                          isDroppable={false}
                          isResizable={false}
                          layouts={layouts}
                        >
                          {values.data.map((block: IBlock, idx: number) => {
                            let errorsForBlock = {}
                            if (errors.data && errors.data[idx] !== undefined) {
                              errorsForBlock = errors.data[idx]
                            }
                            return (
                              <BlockWrapper
                                key={block.id}
                                data-grid={block.layout}
                                index={idx}
                                type={block.type}
                              >
                                <BlockComponent
                                  setFieldValue={(field, data) => {
                                    setTaskChanged(true)
                                    setFieldValue(field, data)
                                  }}
                                  isStaff={isStaff}
                                  block={block}
                                  errors={errorsForBlock}
                                  handleChange={(e) => {
                                    setTaskChanged(true)
                                    handleChange(e)
                                  }}
                                  handleBlur={handleBlur}
                                  index={idx}
                                  isEditing={false}
                                  isAudits={readOnly}
                                />
                              </BlockWrapper>
                            )
                          })}
                        </RGL>
                      )}
                    </div>

                    {confirmTask(
                      <ConfirmationModal
                        closePortal={closeTaskModal}
                        label={`Exit without saving`}
                        cancelLabel={`Save and Exit`}
                        message={`You have made changes but they haven't been saved.`}
                        onConfirm={() => {
                          history.replace({
                            pathname: returnUrl,
                            state: locationState
                          })
                        }}
                        onCancel={async () => {
                          setSaving(true)
                          await onSave(values)
                          setTaskChanged(false)
                          setSaving(false)
                          history.replace({
                            pathname: returnUrl,
                            state: locationState
                          })
                        }}
                      />
                    )}
                    {confirmAssignee(
                      <ConfirmationModal
                        closePortal={closeAssigneeModal}
                        label={`Reassign without saving`}
                        cancelLabel={`Save and Reassign`}
                        message={`You have made changes but they haven't been saved.`}
                        onConfirm={() => {
                          resetView()
                          onAssign(assigneeDetails.assignee, assigneeDetails.assignor)
                          setAssigneeDetails(null)
                        }}
                        onCancel={async () => {
                          setSaving(true)
                          await onSave(values)
                          setTaskChanged(false)
                          setSaving(false)
                          resetView()
                          onAssign(assigneeDetails.assignee, assigneeDetails.assignor)
                        }}
                      />
                    )}
                  </Content>
                )}
              />
            </FormContainer>
          )
        }}
      </Formik>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users,
  queues: state.queues.queues
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedQueue: (arg) => dispatch(workfllowActions.setSelectedQueue(arg))
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
