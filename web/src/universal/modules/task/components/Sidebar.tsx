import React, {useState} from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import Linkify from 'react-linkify'
import {PALETTE} from '../../../styles/palette'
import {ITask, IUser, IQueue} from 'universal/types/generic'
import textOverflow from 'universal/styles/helpers/textOverflow'
import getInitials from 'universal/utils/getInitials'
import Avatar from 'universal/components/Avatar'
import Icon from 'universal/components/Icon'
import useMenu from 'client/hooks/useMenu'
import {MenuPosition} from 'client/hooks/useCoords'
import AssignTaskMenu from 'universal/components/AssignTaskMenu'
import {colorFromString} from 'universal/utils/getColor'
import TextArea from 'client/components/TextArea'
import PrimaryButton from 'universal/components/PrimaryButton'
import useNetworker from 'client/hooks/useNetworker'
import dayjs from 'dayjs'
import StatusTag from 'universal/components/StatusTag'
import {STATUS_PALETTE} from 'universal/styles/palette'

const SIDEBAR_WIDTH = 370

interface SidebarProps {
  isAudits?: boolean
  task: ITask
  users: Array<IUser>
  onAssign: (userId: number | null, prevUserId: number | null) => void
  orgId: number
  activity: any[]
  onPost: (comment: string) => void
  onDelete: (deleteId: number) => void
  isStaff: boolean
  queue: IQueue
}

interface IActivityPoint {
  id: number
  action: string
  comment?: string
  source?: string
  assignee?: number
  created_by_name?: string
  assignee_name?: string
  created_at?: string
  created_by?: number
  correct?: boolean
}

const Container = styled.div({
  backgroundColor: PALETTE.BACKGROUND_MAIN,
  borderRight: `1px solid ${PALETTE.BORDER_GRAY}`,
  paddingTop: '35px',
  width: SIDEBAR_WIDTH,
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  overflow: 'hidden'
})

const Block = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '0px 25px',
  marginBottom: 25
})

const Label = styled.div({
  fontSize: 14,
  fontWeight: 600,
  minWidth: 100,
  color: PALETTE.TEXT_DARKER_GRAY
})

const StyledName = styled.div({
  ...textOverflow,
  marginLeft: 5,
  fontWeight: 600,
  maxWidth: 85
})

const StyledAvatarName = styled.div({
  ...textOverflow,
  marginLeft: 5,
  fontWeight: 600,
  maxWidth: SIDEBAR_WIDTH - 150
})

const MenuBlock = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 135,
  justifyContent: 'center'
})

const StyledIcon = styled(Icon)({
  cursor: 'pointer',
  color: PALETTE.TEXT_MAIN
})

export const AuditDecisionIcon = styled(Icon)`
  margin: 0 auto;
  color: ${({color}) => color};
`

const ActivityBlock = styled.div<{isStaff?: boolean}>(({isStaff}) => ({
  borderTop: `1px solid ${PALETTE.BORDER_GRAY}`,
  display: 'flex',
  flexFlow: 'column',
  height: 'auto',
  overflow: 'auto'
}))

const ButtonContainer = styled.div({
  marginTop: 12,
  display: 'flex',
  flexDirection: 'row-reverse'
})

const Activity = styled.div({
  color: PALETTE.TEXT_DARKER_GRAY,
  fontWeight: 600,
  fontSize: 22,
  margin: '20px 0px'
})

const TimeStamp = styled.div({
  color: PALETTE.TEXT_LIGHT_GRAY,
  fontSize: 12
})

const Info = styled.div({
  color: PALETTE.TEXT_DARK_GRAY,
  margin: '4px 0',
  fontSize: 14,
  fontWeight: 500,
  whiteSpace: 'pre-line'
})

const Notification = styled.div({
  padding: '10px 0px'
})

const Comment = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  fontWeight: 500,
  color: PALETTE.TEXT_DARK_GRAY
})

const Description = styled.div({
  lineBreak: 'anywhere',
  whiteSpace: 'pre-wrap',
  fontSize: 14,
  fontWeight: 500,
  color: PALETTE.TEXT_DARK_GRAY
})

const Bold = styled.span({
  fontWeight: 700
})

const Delete = styled.span({
  cursor: 'pointer',
  textDecoration: 'underline'
})

const Notifications = styled.div({
  flexDirection: 'column',
  display: 'flex',
  overflow: 'auto',
  padding: '0px 25px',
  wordWrap: 'break-word'
})

const ActivityInfo = styled.div({
  padding: '0px 25px 8px 25px',
  color: PALETTE.TEXT_DARKER_GRAY
})

const AvatarName = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const CommentAvatar = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const Section = styled.div<{isStaff?: boolean}>(({isStaff}) => ({
  ...(isStaff && {
    overflowY: 'auto',
    height: 'auto',
    maxHeight: '45%'
  })
}))

export const avatarStyle = {
  height: '20px',
  width: '20px',
  minWidth: '20px',
  fontSize: '11px',
  fontWeight: 700,
  borderRadius: '100'
}

function generateActivityMessage(activityPoint) {
  return activityPoint.action === 'saved' ? (
    <>
      Task Saved by <Bold>{activityPoint.created_by_name}</Bold>
    </>
  ) : activityPoint.action === 'created' ? (
    activityPoint.source === 'manual' ? (
      <>
        Task Created Manually by <Bold>{activityPoint.created_by_name}</Bold>
      </>
    ) : activityPoint.source === 'api' ? (
      <>
        Task Created via API by <Bold>{activityPoint.created_by_name}</Bold>
      </>
    ) : activityPoint.source === 'zapier' ? (
      `Task Created via Zapier`
    ) : (
      <>
        Task Created via CSV by <Bold>{activityPoint.created_by_name}</Bold>
      </>
    )
  ) : activityPoint.action === 'completed' ? (
    <>
      Task Completed by <Bold>{activityPoint.created_by_name}</Bold>
    </>
  ) : activityPoint.action === 'comment' ? (
    activityPoint.comment
  ) : activityPoint.action === 'assigned' ? (
    activityPoint.assignee_name === null ? (
      'Task has been Unassigned'
    ) : (
      <>
        Task Assigned to <Bold>{activityPoint.assignee_name}</Bold>
      </>
    )
  ) : activityPoint.action === 'audited_correct' ? (
    <>
      Task Approved by <Bold>{activityPoint.created_by_name}</Bold> in Audit
    </>
  ) : activityPoint.action === 'audited_incorrect' ? (
    <>
      Task Rejected by <Bold>{activityPoint.created_by_name}</Bold> in Audit
    </>
  ) : activityPoint.action === 'audited_empty' ? (
    <>
      Audit Decision Reverted by <Bold>{activityPoint.created_by_name}</Bold>
    </>
  ) : (
    ''
  )
}

const Sidebar = (props: SidebarProps) => {
  const {
    task,
    onDelete,
    onPost,
    isAudits,
    users,
    onAssign,
    orgId,
    assignedTo,
    activity,
    correct,
    isStaff,
    queue
  } = props

  let description, guidelinesUrl, isRunning

  if (queue) {
    description = queue.task_description
    guidelinesUrl = queue.guidelines_url
    isRunning = queue.is_running
  }

  const {assigned_to, status} = task
  const assignedUser = assignedTo
  const user = users.filter((user) => user.id === assignedUser)[0]
  const [comment, setComment] = useState('')

  let name = ''

  if (user && user.name) {
    name = user.name
  } else if (task.completed_by) {
    // when the task is assigned to a user outside of your org (e.g. when staff handle a users ticket) then we directly
    // access the name of the worker, as user is unavailable
    // note: `completed_by` is set for all assigned tasks, even non-complete ones
    name = task.completed_by
  }

  const initials = getInitials(name)
  const networker = useNetworker()

  const {userId: loggedInUser} = networker || {}

  const {menuPortal, togglePortal, originRef, menuProps} = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true
  })

  const auditDecisionIcon = {
    null: null,
    false: <AuditDecisionIcon color={STATUS_PALETTE.IN_PROGRESS}>cancel</AuditDecisionIcon>,
    true: <AuditDecisionIcon color={STATUS_PALETTE.COMPLETED}>check_circle</AuditDecisionIcon>
  }

  return (
    <Container>
      <Section isStaff={isStaff}>
        <Block>
          <Label>Status</Label>
          <StatusTag status={status} centered />
        </Block>
        <Block>
          <Label>Assigned to</Label>
          {assignedUser ? (
            <MenuBlock>
              <AvatarName>
                <Avatar initials={initials} color={colorFromString(name)} />
                <StyledName>{name}</StyledName>
              </AvatarName>
              {!isAudits && (
                <StyledIcon ref={originRef} onClick={togglePortal}>
                  more_horiz
                </StyledIcon>
              )}
            </MenuBlock>
          ) : (
            <MenuBlock>
              <StyledName>Unassigned</StyledName>
              {!isAudits && (
                <StyledIcon ref={originRef} onClick={togglePortal}>
                  more_horiz
                </StyledIcon>
              )}
            </MenuBlock>
          )}
        </Block>
        {status === 'completed' && (
          <Block>
            <Label>Audit</Label>
            {auditDecisionIcon[correct]}
          </Block>
        )}
        {isStaff && (
          <>
            {guidelinesUrl && (
              <>
                <Block>
                  <Linkify
                    componentDecorator={(href, text, key) => {
                      return (
                        <a
                          href={href}
                          key={key}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{color: PALETTE.LINK}}
                        >
                          guidelines
                        </a>
                      )
                    }}
                  >
                    <Info>See {guidelinesUrl} for more.</Info>
                  </Linkify>
                </Block>
              </>
            )}
            {description && (
              <>
                <Block>
                  <Label>Task Description</Label>
                </Block>
                <Block>
                  <Linkify
                    componentDecorator={(href, text, key) => {
                      return (
                        <a
                          href={href}
                          key={key}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{color: PALETTE.LINK}}
                        >
                          {text}
                        </a>
                      )
                    }}
                  >
                    <Description>{description}</Description>
                  </Linkify>
                </Block>
              </>
            )}
          </>
        )}
      </Section>

      <ActivityBlock isStaff={isStaff}>
        <ActivityInfo>
          <Activity>Activity</Activity>
          <TextArea
            minRows={3}
            maxRows={9}
            onChange={(event) => {
              setComment(event.target.value)
            }}
            value={comment}
            placeholder={'Write a comment'}
          />
          <ButtonContainer>
            <PrimaryButton
              disabled={comment.length === 0}
              onClick={() => {
                onPost(comment)
                setComment('')
              }}
              type='button'
            >
              Send
            </PrimaryButton>
          </ButtonContainer>
        </ActivityInfo>
        <Notifications>
          {activity.map((activityPoint: IActivityPoint) => {
            return (
              <Notification key={activityPoint.id}>
                {activityPoint.action === 'comment' && (
                  <Comment>
                    <CommentAvatar>
                      <Avatar
                        initials={getInitials(activityPoint.created_by_name)}
                        color={colorFromString(activityPoint.created_by_name)}
                      />
                      <StyledAvatarName>{activityPoint.created_by_name}</StyledAvatarName>
                    </CommentAvatar>
                  </Comment>
                )}
                <Linkify
                  componentDecorator={(href, text, key) => {
                    return (
                      <a
                        href={href}
                        key={key}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{color: PALETTE.LINK}}
                      >
                        {text}
                      </a>
                    )
                  }}
                >
                  <Info>{generateActivityMessage(activityPoint)}</Info>
                </Linkify>
                <TimeStamp>
                  {`${dayjs(activityPoint.created_at).format('DD/MM/YYYY')} at ${dayjs(
                    activityPoint.created_at
                  ).format('HH:mm')}`}
                  {activityPoint.action === 'comment' && loggedInUser === activityPoint.created_by && (
                    <>
                      {' '}
                      · <Delete onClick={() => onDelete(activityPoint.id)}>Delete</Delete>
                    </>
                  )}
                </TimeStamp>
              </Notification>
            )
          })}
        </Notifications>
      </ActivityBlock>
      {menuPortal(
        <AssignTaskMenu
          menuProps={menuProps}
          users={users.filter((user) => user.id !== assignedUser)}
          onAssign={onAssign}
          assignedUser={assignedUser}
        />
      )}
    </Container>
  )
}

const mapStateToProps = (state: any) => ({
  isStaff: state.currentUser.isStaff,
  queue: state.queues.selectedQueue
})

export default connect(mapStateToProps, null)(Sidebar)
