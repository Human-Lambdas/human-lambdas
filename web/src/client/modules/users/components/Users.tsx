import React from 'react'
import styled from '@emotion/styled'
import AppTopbar from 'components/AppTopbar'
import useModal from 'hooks/useModal'
import {ICON_SIZE} from 'styles/typography'
import InvitationModal from 'components/InvitationModal'
import ActionButton from 'components/ActionButton'
import ListPage from 'components/ListPage/ListPage'
import Icon from 'universal/components/Icon'
import UserRole from './UserRole/UserRole'
import {IUser} from 'types/generic'
import ListTitle from 'components/ListPage/ListTitle'

interface Props {
  userId: string
  usersList: IUser[]
  resendUserInvite: (email: string) => void
  changeUserRole: (user: IUser, isAdmin: boolean) => void
  handleUsersInvite: (email: string) => void
  deleteUserOrInvite: (user: IUser) => void
}

const PageHeader = styled.div({
  lineHeight: '40px',
  height: 40,
  display: 'grid',
  gridTemplateColumns: '1fr 200px 150px 150px 150px'
})

const StyledIcon = styled(Icon)({
  color: '#fff',
  fontSize: ICON_SIZE.MD16,
  marginRight: 2
})

const Users = (props: Props) => {
  const {
    usersList,
    userId,
    handleUsersInvite,
    resendUserInvite,
    changeUserRole,
    deleteUserOrInvite
  } = props
  const {modalPortal, togglePortal, closePortal} = useModal()

  const leftBarItems = [
    <ActionButton key='invite' type='button' onClick={() => togglePortal()}>
      <StyledIcon>add</StyledIcon>
      <span>Invite</span>
    </ActionButton>
  ]

  const pageHeader = (
    <PageHeader>
      <ListTitle>Name</ListTitle>
      <ListTitle>Email</ListTitle>
      <ListTitle align={'center'}>Pending</ListTitle>
      <ListTitle padLeft={15}>Role</ListTitle>
      <ListTitle align={'center'}>Action</ListTitle>
    </PageHeader>
  )

  const itemList = usersList.map((user) => (
    <UserRole
      key={user.email}
      userId={userId}
      user={user}
      resendUserInvite={resendUserInvite}
      changeUserRole={changeUserRole}
      deleteUserOrInvite={deleteUserOrInvite}
    />
  ))

  return (
    <>
      <AppTopbar leftBarItems={leftBarItems} />
      <ListPage pageHeader={pageHeader} itemList={itemList} />
      {modalPortal(
        <InvitationModal closePortal={closePortal} handleUsersInvite={handleUsersInvite} />
      )}
    </>
  )
}

export default Users
