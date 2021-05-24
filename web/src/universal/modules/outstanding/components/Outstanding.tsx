import React from 'react'
import {useHistory} from 'react-router-dom'
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

interface OutstandingProps {
  count: number
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
  gridTemplateColumns: '80px 100px 1fr 180px 150px',
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

const Outstanding = (props: OutstandingProps) => {
  const {
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
    onClick: () => setQueueId((prev) => (prev === w.id ? undefined : w.id))
  }))
  if (queueId) {
    wMenuItems.unshift(separator)
    wMenuItems.unshift({label: 'Clear filter', onClick: () => setQueueId(undefined)})
  }

  const cbMenuItems = users.map((u) => ({
    label: userId === u.id ? <StyledEl>{u.name}</StyledEl> : u.name,
    onClick: () => setUserId((prev) => (prev === u.id ? undefined : u.id))
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
      <ListTitle>Queue ID</ListTitle>
      <ListTitle>Org ID</ListTitle>
      <ListTitle>
        <>
          <Spacer>Queue Name</Spacer>
          <IconButtonWrapper ref={originRefQueue} onClick={togglePortalQueue} type='button'>
            <FilterIcon color={queueId ? PALETTE.TEXT_MAIN : PALETTE.TEXT_GRAY} />
          </IconButtonWrapper>
        </>
      </ListTitle>
      <ListTitle align='center'>Created At</ListTitle>
      <ListTitle align='center'>Pending Tasks</ListTitle>
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

  const itemList = queues.map(({id, created_at, org_id, n_tasks, name}) => {
    return (
      <ColumnContainer
        key={id}
        onClick={() =>
          history.push(`/queues/${id}`)
        }
      >
        <LineItem>{id}</LineItem>
        <LineItem>{org_id}</LineItem>
        <LineItem>{name}</LineItem>
        <LineItem>
          <AvatarBlock>
            <Avatar initials={getInitials(name)} color={colorFromString(name)} />
            <Label>{created_at}</Label>
          </AvatarBlock>
        </LineItem>
        <LineItem
          style={{
            display: 'flex',
            justifySelf: 'center',
            color: PALETTE.TEXT_GRAY
          }}
        >
          {n_tasks}
        </LineItem>
      </ColumnContainer>
    )
  })

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

export default Outstanding
