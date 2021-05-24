import React, {useCallback, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import useNetworker from 'hooks/useNetworker'
import useDocumentTitle from 'hooks/useDocumentTitle'
import Users from '../components/Users'
import {IUser} from 'types/generic'
import {segmentTrack} from 'utils/segmentIo'
import {
  addFailureNotification,
  addSuccessNotification
} from '../../notificationSystem/ducks/notificationSystemDuck'
import LoadingPage from 'client/components/LoadingPage'

interface Props {
  user: IUser
  dispatch: any
}

const UsersRoot = (props: Props) => {
  const {user, dispatch} = props || {}
  const {current_organization_id: orgId, email} = user || {}
  const networker = useNetworker()
  const {userId} = networker || {}
  const [usersList, setUserList] = useState([] as IUser[])
  const [usersLoading, setUsersLoading] = useState(false)

  useEffect(() => {
    async function fetchUserList() {
      setUsersLoading(true)
      const {
        data: {invited_users: inviteData},
        errors: inviteErrors
      } = await networker.httpHandler(`/orgs/${orgId}/invite`, {method: 'GET'})
      const {
        data: userData,
        errors: userErrors
      } = await networker.httpHandler(`/orgs/${orgId}/users`, {method: 'GET'})

      if (inviteErrors || userErrors) {
        console.error(
          'Error fetching users!',
          JSON.stringify(inviteErrors),
          JSON.stringify(userErrors)
        )
      } else {
        setUserList([...userData, ...inviteData])
      }
      setUsersLoading(false)
    }
    fetchUserList()
  }, [user])

  const resendUserInvite = useCallback(
    async (email: string) => {
      if (email) {
        const {errors} = await networker.httpHandler(`/orgs/${orgId}/invite`, {
          method: 'POST',
          data: {emails: email}
        })

        if (errors) {
          errors.forEach((error) => dispatch(addFailureNotification(error.message)))
          console.log(`Error resending invite ${JSON.stringify(errors)}`)
        } else {
          dispatch(addSuccessNotification('Invite was re-sent succesfully'))
        }
      } else {
        console.error('Error resending user invite')
        dispatch(addFailureNotification('Error resending invite!'))
      }
    },
    [usersList]
  )

  const changeUserRole = async (user: IUser, isAdmin: boolean) => {
    const {id: userId, name, email} = user
    if (userId) {
      const {errors} = await networker.httpHandler(`/orgs/${orgId}/users/${userId}`, {
        method: 'PATCH',
        data: {...user, ...{admin: isAdmin}}
      })

      if (errors) {
        errors.forEach((error) => dispatch(addFailureNotification(error.message)))
        segmentTrack('User Role Update Failed', {
          orgId,
          email,
          userId: user.user_id
        })
      } else {
        dispatch(addSuccessNotification(`${name}'s role successfully changed!`))
        segmentTrack('User Role Update Successful', {
          orgId,
          email,
          userId: user.user_id
        })
      }
    } else {
      const {errors} = await networker.httpHandler(`/orgs/${orgId}/invite`, {
        method: 'PATCH',
        data: {email, admin: isAdmin}
      })

      if (errors) {
        errors.forEach((error) => dispatch(addFailureNotification(error.message)))
        segmentTrack('Invite Role Update Failed', {
          orgId,
          email,
          userId: user.user_id
        })
      } else {
        dispatch(addSuccessNotification(`${email}'s user role has been updated!`))
        segmentTrack('Invite Role Update Successful', {
          orgId,
          email,
          userId: user.user_id
        })
      }
    }
    setUserList((list) =>
      list.map((user) => (user.id === userId ? {...user, is_admin: isAdmin} : user))
    )
  }

  const deleteUserOrInvite = useCallback(
    async (user: IUser) => {
      let deleteErrors = []
      if (user.id) {
        const {errors}: any = await networker.httpHandler(`/orgs/${orgId}/users/${user.id}`, {
          method: 'DELETE'
        })
        deleteErrors = errors
      } else {
        const {errors}: any = await networker.httpHandler(`/orgs/${orgId}/invite`, {
          method: 'DELETE',
          data: {email: user.email}
        })
        deleteErrors = errors
      }
      if (deleteErrors) {
        segmentTrack('Failed To Remove User', {
          orgId,
          email: user.email,
          inviteeUserId: userId,
          inviteeEmail: email,
          userId: user.user_id
        })
        deleteErrors.forEach((error: any) => dispatch(addFailureNotification(error.message)))
      } else {
        let successMsg
        const newUsers = usersList.filter((i) => i.email !== user.email)
        setUserList(newUsers)
        if (user.id) {
          segmentTrack('User Removed', {
            orgId,
            email: user.email,
            inviteeUserId: userId,
            inviteeEmail: email,
            userId: user.user_id
          })
          successMsg = `Successfully removed ${user.name}!`
        } else {
          segmentTrack('Invite Removed', {
            orgId,
            email: user.email,
            inviteeUserId: userId,
            inviteeEmail: email,
            userId: user.user_id
          })
          successMsg = 'Successfully removed user invite!'
        }
        dispatch(addSuccessNotification(successMsg))
      }
    },
    [usersList]
  )

  const handleUsersInvite = useCallback(
    async (values) => {
      const payload = {
        method: 'POST',
        data: values
      }

      const res = await networker.httpHandler(
        `/orgs/${user.current_organization_id}/invite`,
        payload
      )
      const {errors} = res

      if (errors) {
        errors.forEach((e) => dispatch(addFailureNotification(e.message)))
        segmentTrack('Invite Failed', {
          orgId,
          email: user.email,
          inviteeUserId: userId,
          inviteeEmail: email,
          userId: user.user_id
        })
      } else {
        const emails = values.emails.split(',').map((item) => item.trim())
        const newInvites = emails.map((email) => ({
          email,
          pending: true,
          is_admin: false,
          current_organization_id: orgId
        }))
        const userEmails = new Set(usersList.map((u) => u.email))
        setUserList(usersList.concat(newInvites.filter((u) => !userEmails.has(u.email))))
        segmentTrack('Invite Successful', {
          orgId,
          email: user.email,
          inviteeUserId: userId,
          inviteeEmail: email,
          userId: user.user_id
        })
        const successMsg =
          values.emails.length > 1 ? 'Users succesfully invited!' : 'User succesfully invited!'
        dispatch(addSuccessNotification(successMsg))
      }
    },
    [usersList]
  )

  useDocumentTitle('User Management | Human Lambdas')

  if (usersLoading) return <LoadingPage />

  return (
    <Users
      usersList={usersList}
      user={user}
      userId={userId}
      resendUserInvite={resendUserInvite}
      handleUsersInvite={handleUsersInvite}
      changeUserRole={changeUserRole}
      deleteUserOrInvite={deleteUserOrInvite}
    />
  )
}

export default connect()(UsersRoot)
