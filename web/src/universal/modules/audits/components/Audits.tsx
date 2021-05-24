import React from 'react'
import {useHistory} from 'react-router-dom'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import {PALETTE} from 'client/styles/palette'
import ListPage from 'client/components/ListPage/ListPage'
import PlainButton, {PlainButtonProps} from 'client/components/PlainButton'
import ArrowLeftIcon from 'client/components/Icons/ArrowLeftSVG'
import ArrowRightIcon from 'client/components/Icons/ArrowRightSVG'
import Avatar from 'universal/components/Avatar'
import getInitials from 'universal/utils/getInitials'
import textOverflow from 'universal/styles/helpers/textOverflow'
import useMenu from 'client/hooks/useMenu'
import {MenuPosition} from 'client/hooks/useCoords'
import ListTitle from 'client/components/ListPage/ListTitle'
import StandardMenu from 'client/components/StandardMenu'
import FilterIcon from 'client/components/Icons/FilterSVG'
import EmptyPage from 'client/components/EmptyPage'
import EmptyAuditsIcon from 'client/components/Icons/EmptyAuditsSVG'
import IconButtonWrapper from 'client/components/IconButtonWrapper'
import {IUser, IQueue} from 'universal/types/generic'
import {colorFromString} from 'universal/utils/getColor'
import {AuditDecisionIcon} from 'universal/modules/task/components/Sidebar'
import {STATUS_PALETTE} from 'universal/styles/palette'
import Icon from 'universal/components/Icon'

interface AuditsProps {
  count: number
  tasks: any
  onNext: any
  onBack: any
  limit: number
  offset: number
  users: IUser[]
  userId: string
  queueId: string
  queues: IQueue[]
  setQueueId: any
  setUserId: any
  handleDownloadCSV: any
}

const ColumnContainer = styled.div({
  lineHeight: '40px',
  height: 40,
  display: 'grid',
  gridTemplateColumns: '100px 1fr 180px 100px 100px 80px 100px',
  gridColumnGap: 15
})

const Footer = styled.div({
  height: 45,
  display: 'grid',
  maxWidth: '80%',
  gridTemplateColumns: '200px 200px',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const Paginator = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

const Label = styled.span({
  marginLeft: 7,
  width: '100%',
  ...textOverflow
})

const Spacer = styled.div({
  marginRight: 7,
  display: 'flex',
  alignItems: 'center'
})

const LineItem = styled.div({
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer !important',
  display: 'block',
  ...textOverflow
})

const SmallText = styled.span({
  textAlign: 'left',
  color: PALETTE.TEXT_MAIN,
  fontSize: 14,
  userSelect: 'none'
})

const AvatarBlock = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const PageCount = styled(PlainButton)<PlainButtonProps>({
  color: PALETTE.TEXT_MAIN,
  fontSize: 14,
  fontWeight: 400,
  userSelect: 'none',
  backgroundColor: PALETTE.BACKGROUND_HOVER,
  marginLeft: 2,
  marginRight: 2,
  width: 'auto',
  borderRadius: 0,
  height: 25,
  lineHeight: '25px'
})

const PaginateBtn = styled(PlainButton)<{left?: boolean}>(({left}) => {
  return {
    height: 25,
    lineHeight: '25px',
    width: 30,
    padding: 0,
    margin: 0,
    background: PALETTE.BACKGROUND_HOVER,
    borderTopRightRadius: left ? 0 : 4,
    borderBottomRightRadius: left ? 0 : 4,
    borderBottomLeftRadius: left ? 4 : 0,
    borderTopLeftRadius: left ? 4 : 0
  }
})

const StyledEl = styled.div({
  margin: '0 15px',
  padding: '7px 0',
  fontWeight: 500,
  maxWidth: 350,
  ...textOverflow
})

const HR = styled.div({
  height: 1,
  width: '100%',
  backgroundColor: PALETTE.BORDER_MAIN_GRAY
})

const StyledCommentsIcon = styled(Icon)({
  display: 'block',
  color: PALETTE.TEXT_GRAY,
  marginRight: 15,
  marginLeft: 4,
  fontSize: 17
})

const Audits = (props: AuditsProps) => {
  const {
    tasks,
    count,
    onNext,
    onBack,
    limit,
    offset,
    queues,
    setQueueId,
    setUserId,
    queueId,
    userId,
    users
  } = props
  const history = useHistory()

  const separator = {label: <HR />}

  const wMenuItems = queues.map((w) => ({
    label: queueId === w.id ? <StyledEl>{w.name}</StyledEl> : w.name,
    onClick: () => setQueueId(w.id)
  }))
  if (queueId) {
    wMenuItems.unshift(separator)
    wMenuItems.unshift({label: 'Clear filter', onClick: () => setQueueId(undefined)})
  }

  const cbMenuItems = users.map((u) => ({
    label: userId === u.id ? <StyledEl>{u.name}</StyledEl> : u.name,
    onClick: () => setUserId(u.id)
  }))
  if (userId) {
    cbMenuItems.unshift(separator)
    cbMenuItems.unshift({label: 'Clear filter', onClick: () => setUserId(undefined)})
  }

  const {
    menuPortal: menuPortalQueue,
    originRef: originRefQueue,
    menuProps: menuPropsQueue,
    togglePortal: togglePortalQueue
  } = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {width: 350}
  })

  const {
    menuPortal: menuPortalCb,
    originRef: originRefCb,
    menuProps: menuPropsCb,
    togglePortal: togglePortalCb
  } = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {width: 350}
  })

  const pageHeader = (
    <ColumnContainer>
      <ListTitle>Task ID</ListTitle>
      <ListTitle>
        <>
          <Spacer>Queue Name</Spacer>
          <IconButtonWrapper ref={originRefQueue} onClick={togglePortalQueue} type='button'>
            <FilterIcon color={queueId ? PALETTE.TEXT_MAIN : PALETTE.TEXT_GRAY} />
          </IconButtonWrapper>
        </>
      </ListTitle>
      <ListTitle align='left'>
        <>
          <Spacer>Completed By</Spacer>
          <IconButtonWrapper ref={originRefCb} onClick={togglePortalCb} type='button'>
            <FilterIcon color={userId ? PALETTE.TEXT_MAIN : PALETTE.TEXT_GRAY} />
          </IconButtonWrapper>
        </>
      </ListTitle>
      <ListTitle>Completed At</ListTitle>
      <ListTitle align='center'>Source</ListTitle>
      <ListTitle align='center'>Comments</ListTitle>
      <ListTitle>Audit</ListTitle>
    </ColumnContainer>
  )

  const pageFooter = (
    <Footer>
      <SmallText>{count} Completed tasks</SmallText>
      {count > limit && (
        <Paginator>
          <PaginateBtn left={true} onClick={onBack} disabled={offset < limit}>
            <ArrowLeftIcon />
          </PaginateBtn>
          <PageCount>{`${(offset / limit + 1).toFixed()} / ${Math.ceil(count / limit)}`}</PageCount>
          <PaginateBtn onClick={onNext} disabled={offset >= Math.abs(count - limit)}>
            <ArrowRightIcon />
          </PaginateBtn>
        </Paginator>
      )}
    </Footer>
  )

  const auditDecisionIcon = {
    null: null,
    false: <AuditDecisionIcon color={STATUS_PALETTE.IN_PROGRESS}>cancel</AuditDecisionIcon>,
    true: <AuditDecisionIcon color={STATUS_PALETTE.COMPLETED}>check_circle</AuditDecisionIcon>
  }

  const itemList = tasks.map(
    ({
      id: taskId,
      completed_by: completedBy,
      completed_at: completedAt,
      correct,
      queue: name,
      source,
      n_comments
    }) => {
      let sourceTextStyle = 'none'
      sourceTextStyle = ['manual', 'zapier'].includes(source) ? 'capitalize' : sourceTextStyle
      sourceTextStyle = ['api'].includes(source) ? 'uppercase' : sourceTextStyle
      return (
        <ColumnContainer
          key={taskId}
          onClick={() =>
            history.push({
              pathname: `/queues/tasks/${taskId}/audit`,
              state: {isAudits: true}
            })
          }
        >
          <LineItem>{taskId}</LineItem>
          <LineItem>{name}</LineItem>
          <LineItem>
            <AvatarBlock>
              <Avatar initials={getInitials(completedBy)} color={colorFromString(completedBy)} />
              <Label>{completedBy}</Label>
            </AvatarBlock>
          </LineItem>
          <LineItem>{dayjs(completedAt).format('DD-MM-YYYY')}</LineItem>
          <LineItem
            style={{
              textTransform: sourceTextStyle,
              display: 'inline-block',
              justifySelf: 'center',
              width: '100%'
            }}
          >
            {source}
          </LineItem>
          <LineItem
            style={{
              display: 'flex',
              justifySelf: 'center',
              color: PALETTE.TEXT_GRAY
            }}
          >
            {n_comments > 0 && (
              <>
                {n_comments}
                <StyledCommentsIcon>comment</StyledCommentsIcon>
              </>
            )}
          </LineItem>
          <LineItem
            style={{
              display: 'flex',
              justifySelf: 'flex-start'
            }}
          >
            {auditDecisionIcon[correct]}
          </LineItem>
        </ColumnContainer>
      )
    }
  )

  return (
    <>
      <ListPage
        pageHeader={pageHeader}
        itemList={itemList}
        pageFooter={pageFooter}
        emptyList={
          <EmptyPage
            svg={<EmptyAuditsIcon />}
            header={'No tasks here…'}
            subHeader={'Try using different filters.'}
          />
        }
      />
      {menuPortalQueue(<StandardMenu menuProps={menuPropsQueue} menuItems={wMenuItems} />)}
      {menuPortalCb(<StandardMenu menuProps={menuPropsCb} menuItems={cbMenuItems} />)}
    </>
  )
}

export default Audits
