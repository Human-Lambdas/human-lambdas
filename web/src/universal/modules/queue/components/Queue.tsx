import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import ActionButton from 'client/components/ActionButton'
import {PALETTE} from 'client/styles/palette'
import useRouter from 'client/hooks/useRouter'
import Avatar from 'universal/components/Avatar'
import cutOffString from 'universal/utils/cutOffString'
import capitalizeFirstLetter from 'client/utils/capitalizeFirstLetter'
import Icon from 'universal/components/Icon'
import {MenuPosition} from 'client/hooks/useCoords'
import useMenu from 'client/hooks/useMenu'
import QueueActionsMenu from 'client/components/QueueActionsMenu'
import QueueFilterColumnMenu from 'client/components/QueueFilterColumnMenu'
import EmptyPage from 'client/components/EmptyPage'
import dayjs from 'dayjs'
import useModal from 'client/hooks/useModal'
import ConfirmationModal from 'client/components/ConfirmationModal'
import NewTaskMenu from 'universal/components/NewTaskMenu'
import relativeTime from 'dayjs/plugin/relativeTime'
import {IUser, IQueue} from 'client/types/generic'
import useNetworker from 'client/hooks/useNetworker'
import {colorFromString} from 'universal/utils/getColor'
import SecondaryButton from 'universal/components/SecondaryButton'
import {connect} from 'react-redux'
import formatValues from 'universal/utils/formatValues'
import {transformDates} from 'client/utils/dateHelpers'
import QueueSettingsModal from './QueueSettingsModal'
import {workfllowActions} from 'client/redux/queuesReducers'
import {
  addFailureNotification,
  addSuccessNotification
} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import StatusTag from 'universal/components/StatusTag'
import {FILTER_BLOCK_TYPES} from 'universal/utils/constants'
dayjs.extend(relativeTime)

interface ITask {
  id: string
  name: string
  type: string
}

interface Props {
  user: IUser
  queue: IQueue
  queueId: number
  orgId: number
  format: ITask[]
  taskPage: number
  tasks: any[]
  isStaff: any[]
  setTaskPage: (arg: number) => void
  startNextTask: () => void
  deleteQueue: () => void
  flushQueueTasks: () => void
  addFailureNotification: (arg: string) => void
  addSuccessNotification: (arg: string) => void
  setQueue: (arg: IQueue) => void
  setSelectedQueue: (arg: IQueue) => void
  updateQueue: (arg: IQueue) => void
}

const Page = styled.div({
  background: '#fff',
  minWidth: 800,
  padding: '0 10% 0 10%',
  height: '100%'
})

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '96px 0 70px 0',
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: '30px'
})

const Buttons = styled.div({
  display: 'flex',
  justifyContent: 'space-between'
})

const PlayButton = styled(ActionButton)({
  width: 100,
  height: 32,
  fontSize: '14px'
})

const TableHeader = styled.div({
  border: '1px solid #E8ECEE',
  height: 42,
  borderRadius: '10px',
  display: 'flex',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.02)',
  marginBottom: 24,
  padding: '0px 15px'
})

const TableItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '20%'
})

const TableHeaderItem = styled(TableItem)({
  fontWeight: 600,
  fontSize: '14px',
  borderLeft: `1px solid ${PALETTE.BORDER_GRAY}`,
  paddingLeft: 10
})

const IDHeaderItem = styled(TableHeaderItem)({
  borderLeft: 'none',
  position: 'relative'
})

const HeaderItemText = styled.div({
  paddingRight: 35,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const TasksContainer = styled.div({
  border: `1px solid ${PALETTE.BORDER_GRAY}`,
  height: 'calc(100% - 240px - 80px)',
  maxHeight: 470,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px'
})

const NavContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '12px 0px',
  height: 48,
  backgroundColor: '#f8f8fa',
  borderTop: '1px solid #e8ecee',
  userSelect: 'none'
})

const Task = styled.div({
  height: 42,
  padding: '0 25px',
  borderBottom: `1px solid ${PALETTE.BORDER_GRAY}`,
  display: 'flex',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#f7f8f9'
  }
})

const GrayText = styled.div({
  fontSize: '14px',
  color: `${PALETTE.TEXT_GRAY}`,
  paddingLeft: 15,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center'
})

const ID = styled.span({
  color: `${PALETTE.PRIMARY_MAIN}`
})

const AssignedTo = styled.span({
  display: 'flex'
})

const Name = styled.span({
  marginLeft: 4,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const ColoredText = styled.span({
  color: `${PALETTE.PRIMARY_MAIN}`,
  fontSize: 16,
  textAlign: 'center',
  fontWeight: 600,
  marginTop: 1
})

const Tasks = styled.div({
  height: 'calc(100% - 48px)',
  overflowY: 'auto'
})

const QueueTitle = styled.div({
  display: 'flex'
})

const MenuButtonContainer = styled.div({
  width: 30,
  height: 30,
  paddingTop: 2.5,
  paddingLeft: 5
})

const FilterMenuButtonContainer = styled.div({
  width: 30,
  height: 30,
  position: 'absolute',
  right: 10,
  top: 18
})

const MenuButtonSecondary = styled(SecondaryButton)({
  marginRight: 16
})

const StyledIcon = styled(Icon)({
  fontSize: 15,
  alignItems: 'center',
  margin: '2px 0 0 5px'
})

const StyledMenuIcon = styled(Icon)({
  fontSize: 24,
  alignItems: 'center',
  margin: '-10px 0 0 5px',
  cursor: 'pointer',
  ':hover': {
    color: PALETTE.PRIMARY_MAIN
  }
})

const Queue = (props: Props) => {
  const {
    orgId,
    queue,
    startNextTask,
    queueId,
    deleteQueue,
    flushQueueTasks,
    format,
    tasks,
    taskPage,
    setTaskPage,
    user,
    isStaff,
    setQueue,
    setSelectedQueue,
    updateQueue
  } = props

  const {is_running: isRunning, pinned_block: pinnedBlock} = queue

  const [pinnedBlockId, setPinnedBlockId] = useState(pinnedBlock || '')

  const networker = useNetworker()
  const {history} = useRouter() as any
  const {menuPortal, originRef, menuProps, togglePortal} = useMenu(MenuPosition.UPPER_LEFT, {
    isDropdown: true
  })
  const {modalPortal, togglePortal: newTaskTogglePortal, closePortal} = useModal({overflow: 'auto'})
  const {
    modalPortal: queueSettingsPortal,
    togglePortal: toggleQueueSettingsModal,
    closePortal: closeQueueSettingsModal
  } = useModal({})
  const {
    modalPortal: confirmModalPortal,
    togglePortal: confirmTogglePortal,
    closePortal: confirmClosePortal
  } = useModal()

  const {
    modalPortal: confirmFlushModalPortal,
    togglePortal: confirmFlushTogglePortal,
    closePortal: confirmFlushClosePortal
  } = useModal()

  const {
    menuPortal: filterMenuPortal,
    originRef: originFilterMenuRef,
    menuProps: filterMenuProps,
    togglePortal: toggleFilterMenuPortal
  } = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true
  })

  const onSubmitHandler = async (values) => {
    const returnData: ITask[] = []
    format.forEach(({id, type, name}) => {
      let value = values[id]
      if (values.data && values.data[type] && values.data[type][id]) {
        value = values.data[type][id]
      }

      const returnObj = {id, type, name, [type]: {value}} as ITask
      returnData.push(returnObj)
    })

    const payload = {
      method: 'POST',
      data: {data: formatValues(returnData).map(transformDates)}
    }

    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/form`, payload)

    if (res.errors) {
      props.addFailureNotification('An error occurred')
    }

    res.errors && closePortal()

    const fetchTaskPayload = {
      method: 'GET'
    }

    const fetchTaskRes = await networker.httpHandler(
      `/orgs/${orgId}/queues/${queueId}/tasks/${res.data.id}`,
      fetchTaskPayload
    )

    const {data} = fetchTaskRes || {}

    const route = data.id ? `/queues/${queueId}/tasks/${data.id}` : `/queues/${queueId}/connections`
    const taskState = data.id ? {hasChanged: false} : null

    history.push({
      pathname: route,
      state: taskState
    })

    closePortal()
  }

  const runQueue = async (values) => {
    const updatedQueue = {
      ...values,
      is_running: true
    }
    const payload = {
      method: 'PUT',
      data: updatedQueue
    }

    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, payload)
    if (res?.errors) {
      props.addFailureNotification('An error occurred')
    } else {
      setQueue(updatedQueue)
      setSelectedQueue(updatedQueue)
      updateQueue(updatedQueue)
      props.addSuccessNotification('This queue is now being executed by Human Lambdas')
    }
    closeQueueSettingsModal()
  }

  const finalPage = Math.floor((queue.n_tasks - 1) / 10) + 1 || 1

  const BackNavIcon = styled(Icon)({
    color: taskPage === 1 ? PALETTE.TEXT_GRAY : PALETTE.PRIMARY_MAIN,
    cursor: taskPage === 1 ? 'auto' : 'pointer',
    margin: '0px 12px'
  })

  const ForwardNavIcon = styled(Icon)({
    color: taskPage === finalPage ? `${PALETTE.TEXT_GRAY}` : `${PALETTE.PRIMARY_MAIN}`,
    cursor: taskPage === finalPage ? 'auto' : 'pointer',
    margin: '0px 12px'
  })

  const pauseQueue = async () => {
    const updatedQueue = {
      ...queue,
      is_running: false
    }
    setQueue(updatedQueue)
    const payload = {
      method: 'PUT',
      data: updatedQueue
    }

    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, payload)
    if (res?.errors) {
      props.addFailureNotification('An error occurred')
    } else {
      props.addSuccessNotification('Queue execution has been successfully paused')
    }
  }

  const handleRunOrPause = useCallback(() => {
    if (isRunning) {
      pauseQueue()
    } else {
      toggleQueueSettingsModal()
    }
  }, [queue])

  let thereAreNonePinnedBlocks = true

  if (queue.data && Array.isArray(queue.data)) {
    queue.data.map((block, id) => {
      if (FILTER_BLOCK_TYPES.includes(block.type)) {
        thereAreNonePinnedBlocks = false
      }
    })
  }

  const setPinnedBlock = async (id) => {
    setPinnedBlockId(id)

    await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, {
      method: 'PATCH',
      data: {pinned_block: id}
    })
  }

  const extractPinnedValue = (data, id) => {
    let pinnedValue = '#' + id
    if (data && Array.isArray(data) && !thereAreNonePinnedBlocks && pinnedBlockId) {
      let theValueHasBeenAssigned = false
      data.map((block) => {
        
        if (block.id === pinnedBlockId) {
          pinnedValue = block[block.type]?.value
          theValueHasBeenAssigned = true
        }
        if (!theValueHasBeenAssigned) {
          pinnedValue = "-"
        }
      })
    }

    return pinnedValue
  }

  const extractPinnedTitle = (queue) => {
    let pinnedTitle = 'ID'

    if (queue.data && Array.isArray(queue.data) && pinnedBlockId) {
      queue.data.map((block) => {
        if (block.id === pinnedBlockId) {
          pinnedTitle = block.name
        }
      })
    }

    return pinnedTitle
  }

  return (
    <Page>
      <Header>
        <QueueTitle>
          {queue.name && capitalizeFirstLetter(cutOffString(queue.name, 25))}
          {user?.is_admin && (
            <MenuButtonContainer>
              <StyledMenuIcon onClick={togglePortal} ref={originRef}>
                expand_more
              </StyledMenuIcon>
            </MenuButtonContainer>
          )}
        </QueueTitle>
        <Buttons>
          {user?.is_admin && !isStaff && (
            <MenuButtonSecondary
              onClick={() => {
                history.push(`/queues/${queueId}/connections`)
              }}
            >
              Connections
            </MenuButtonSecondary>
          )}
          {queue.data && queue.data.length > 0 && !isStaff && (
            <MenuButtonSecondary
              onClick={() => {
                format.length > 0 ? newTaskTogglePortal() : onSubmitHandler({})
              }}
            >
              New Task
            </MenuButtonSecondary>
          )}
          {(__OSS__ || !user?.is_admin || isStaff) && queue.n_tasks > 0 ? (
            <PlayButton onClick={startNextTask}>Play</PlayButton>
          ) : null}
          {!__OSS__ && user?.is_admin && !isStaff && (
            <PlayButton onClick={handleRunOrPause}>{isRunning ? 'Pause' : 'Run'}</PlayButton>
          )}
        </Buttons>
      </Header>
      <TableHeader>
        <IDHeaderItem>
          <HeaderItemText>{extractPinnedTitle(queue)}</HeaderItemText>
          {user?.is_admin && !thereAreNonePinnedBlocks && (
            <FilterMenuButtonContainer>
              <StyledMenuIcon onClick={toggleFilterMenuPortal} ref={originFilterMenuRef}>
                expand_more
              </StyledMenuIcon>
            </FilterMenuButtonContainer>
          )}
        </IDHeaderItem>
        <TableHeaderItem>Status</TableHeaderItem>
        <TableHeaderItem>Assigned To</TableHeaderItem>
        <TableHeaderItem>Comments</TableHeaderItem>
        <TableHeaderItem>Created At</TableHeaderItem>
      </TableHeader>
      <TasksContainer>
        <Tasks>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              const {id, status, created_at, assigned_to, n_comments, data} = task

              return (
                <Task key={id} onClick={() => history.push(`/queues/${queueId}/tasks/${id}`)}>
                  <TableItem>
                    <ID>
                      <HeaderItemText>{extractPinnedValue(data, id)}</HeaderItemText>
                    </ID>
                  </TableItem>
                  <TableItem>
                    <div>
                      <StatusTag status={status} />
                    </div>
                  </TableItem>
                  <TableItem>
                    {assigned_to && (
                      <AssignedTo>
                        <Avatar
                          initials={assigned_to.charAt(0).toUpperCase()}
                          color={colorFromString(assigned_to)}
                        />
                        <Name>{assigned_to}</Name>
                      </AssignedTo>
                    )}
                  </TableItem>
                  <TableItem>
                    {n_comments > 0 && (
                      <GrayText>
                        <div>{n_comments}</div>
                        <StyledIcon>comment</StyledIcon>
                      </GrayText>
                    )}
                  </TableItem>
                  <TableItem>
                    <GrayText>{dayjs(created_at).fromNow()}</GrayText>
                  </TableItem>
                </Task>
              )
            })
          ) : (
            <EmptyPage
              header={'This queue currently has no tasks'}
              subHeader={"You can upload tasks at this queue's connections page"}
            />
          )}
        </Tasks>
        <NavContainer>
          <BackNavIcon onClick={() => setTaskPage(1)}>first_page</BackNavIcon>
          <BackNavIcon
            onClick={() => {
              if (taskPage > 1) setTaskPage(taskPage - 1)
            }}
          >
            navigate_before
          </BackNavIcon>
          <ColoredText>{taskPage}</ColoredText>
          <ForwardNavIcon
            onClick={() => {
              if (taskPage !== finalPage) setTaskPage(taskPage + 1)
            }}
          >
            navigate_next
          </ForwardNavIcon>
          <ForwardNavIcon
            onClick={() => {
              setTaskPage(finalPage)
            }}
          >
            last_page
          </ForwardNavIcon>
        </NavContainer>
      </TasksContainer>
      {menuPortal(
        <QueueActionsMenu
          queueId={queueId}
          orgId={orgId}
          menuProps={menuProps}
          onDelete={confirmTogglePortal}
          onFlush={confirmFlushTogglePortal}
        />
      )}
      {modalPortal(
        <NewTaskMenu onSubmitHandler={onSubmitHandler} closePortal={closePortal} format={format} />
      )}
      {confirmModalPortal(
        <ConfirmationModal
          label={'Delete'}
          closePortal={confirmClosePortal}
          message={'Are you sure you want to permanently delete this queue?'}
          onConfirm={() => {
            deleteQueue()
          }}
        />
      )}
      {confirmFlushModalPortal(
        <ConfirmationModal
          label={'Delete'}
          closePortal={confirmFlushClosePortal}
          message={'Are you sure you want to permanently delete all tasks from this queue?'}
          onConfirm={() => {
            flushQueueTasks()
          }}
        />
      )}
      {queueSettingsPortal(
        <QueueSettingsModal
          closePortal={closeQueueSettingsModal}
          runQueue={runQueue}
          queue={queue}
        />
      )}
      {filterMenuPortal(
        <QueueFilterColumnMenu
          queue={queue}
          activeBlockName={extractPinnedTitle(queue)}
          menuProps={filterMenuProps}
          setPinnedBlock={setPinnedBlock}
        />
      )}
    </Page>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg)),
    updateQueue: (arg) => dispatch(workfllowActions.updateQueue(arg))
  }
}

export default connect(null, mapDispatchToProps)(Queue)
