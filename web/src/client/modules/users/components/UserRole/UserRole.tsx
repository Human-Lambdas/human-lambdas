import React from 'react'
import styled from '@emotion/styled'
import {IUser} from 'types/generic'
import {PALETTE} from 'styles/palette'
import useMenu from 'hooks/useMenu'
import {MenuPosition} from 'hooks/useCoords'
import UserRoleMenu from 'components/UserRoleMenu'
import Avatar from 'universal/components/Avatar'
import {colorFromString} from 'universal/utils/getColor'
import getInitials from 'universal/utils/getInitials'
import useModal from 'hooks/useModal'
import ConfirmationModal from 'components/ConfirmationModal'
import PlainButton, {PlainButtonProps} from 'components/PlainButton'
import MenuButton from 'components/MenuButton'
import textOverflow from 'universal/styles/helpers/textOverflow'

interface Props {
  user: IUser
  userId: string
  resendUserInvite: (email: string) => void
  changeUserRole: (user: IUser, isAdmin: boolean) => void
  deleteUserOrInvite: (user: IUser) => void
}

const Actions = styled(PlainButton)<PlainButtonProps>(({color}) => ({
  color,
  fontSize: 13,
  width: 'auto',
  lineHeight: '32px',
  height: 32,
  padding: '0 15px',
  margin: 0,
  ':hover': {
    backgroundColor: PALETTE.BACKGROUND_HOVER
  }
}))

const AvatarBlock = styled.div({
  marginRight: 10
})

const Label = styled.div({
  fontSize: 15,
  color: PALETTE.TEXT_MAIN,
  fontWeight: 400,
  ...textOverflow
})

const ListItems = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 200px 150px 150px 150px',
  justifyContent: 'space-between'
})

const ListItem = styled.div<{
  clickable?: boolean
  align?: any
  padLeft?: number
}>(({clickable, align, padLeft}) => ({
  cursor: clickable ? 'pointer' : 'default',
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: align ? align : 'left',
  paddingLeft: padLeft ? padLeft : 'none',
  paddingTop: 5,
  paddingBottom: 5,
  '&:last-child': {
    borderRight: 0
  }
}))

const Row = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const Inactive = styled.div({
  color: PALETTE.TEXT_GRAY
})

const DeleteName = styled.span({
  color: PALETTE.TEXT_MAIN,
  fontWeight: 500,
  fontSize: 15
})

const StyledMsg = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontWeight: 400,
  fontSize: 14
})

const UserRole = (props: Props) => {
  const {menuPortal, originRef, menuProps, togglePortal} = useMenu(MenuPosition.UPPER_CENTER, {
    isDropdown: true
  })
  const {togglePortal: toggleModalPortal, closePortal: closeModalPortal, modalPortal} = useModal()
  const {user, userId, changeUserRole, resendUserInvite, deleteUserOrInvite} = props

  const message = (
    <StyledMsg>
      This will permanently remove{' '}
      {user.pending ? (
        <span>
          <DeleteName>
            {user.email.length > 15 ? user.email.substr(0, 15) + '...' : user.email}'s
          </DeleteName>{' '}
          invitation from this organization
        </span>
      ) : (
        <span>
          <DeleteName>
            {user.name.length > 15 ? user.name.substr(0, 15) + '...' : user.name}
          </DeleteName>{' '}
          from this organization
        </span>
      )}
      . This action can not be undone. Are you sure you want to continue?
    </StyledMsg>
  )

  return (
    <>
      <ListItems>
        <ListItem>
          <Row>
            <AvatarBlock>
              <Avatar
                initials={getInitials(user?.name || user.email.charAt(0) || '')}
                color={colorFromString(user.name || user.email)}
              />
            </AvatarBlock>
            {user.name && <Label>{user.name}</Label>}
          </Row>
        </ListItem>
        <ListItem>{user.email && <Label>{user.email}</Label>}</ListItem>
        <ListItem align={'center'}>
          <Row>
            {user.pending && !__OSS__ && (
              <Actions
                type='button'
                color={PALETTE.PRIMARY_GREEN_DARK}
                onClick={() => resendUserInvite(user.email)}
              >
                Resend
              </Actions>
            )}
          </Row>
        </ListItem>
        <ListItem padLeft={15} clickable={true}>
          {userId === user.id ? (
            <Inactive>{user.is_admin ? 'Admin' : 'Worker'}</Inactive>
          ) : (
            <>
              <Label>{user.is_admin ? 'Admin' : 'Worker'}</Label>
              <MenuButton onClick={togglePortal} ref={originRef} />
            </>
          )}
        </ListItem>
        <ListItem align={'center'}>
          {userId !== user.id && (
            <Actions type='button' onClick={toggleModalPortal} color={PALETTE.ERROR_MAIN}>
              {'Delete'}
            </Actions>
          )}
        </ListItem>
      </ListItems>
      {menuPortal(
        <UserRoleMenu menuProps={menuProps} user={user} changeUserRole={changeUserRole} />
      )}
      {modalPortal(
        <ConfirmationModal
          label={'Delete'}
          closePortal={closeModalPortal}
          message={message}
          onConfirm={() => deleteUserOrInvite(user)}
        />
      )}
    </>
  )
}

export default UserRole
