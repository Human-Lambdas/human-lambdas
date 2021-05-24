import React, {useCallback, useState} from 'react'
import {AxiosRequestConfig} from 'axios'
import {FormikHelpers} from 'formik'
import {connect} from 'react-redux'
import Profile from '../components/Profile'
import {addFailureNotification} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import useNetworker from 'client/hooks/useNetworker'
import {IUser} from 'universal/types/generic'

interface Props {
  user: IUser
  dispatch: any
}

interface Credentials {
  name: string
  email: string
}

const ProfileContainer = (props: Props) => {
  const [saved, setSaved] = useState('Save')
  const [isLoading, setIsLoading] = useState(false)
  const networker = useNetworker()
  const {userId} = networker || {}
  const {dispatch} = props
  const [user, setUser] = useState(props.user)

  const handleSubmit = useCallback(
    async (credentials: Credentials, actions: FormikHelpers<Credentials>) => {
      setIsLoading(true)
      const reqBody = {
        method: 'PATCH',
        data: credentials
      } as AxiosRequestConfig

      const {data, errors}: any = await networker.httpHandler(`/users/${userId}`, reqBody)
      if (errors) {
        errors.forEach((error) => {
          dispatch(addFailureNotification(error.message))
        })
      } else {
        await setUser(data)
      }
      actions.setSubmitting(false)
      actions.resetForm()
      setTimeout(() => {
        setSaved('Saved!')
        setIsLoading(false)
      }, 1000)
    },
    [user]
  )

  setTimeout(() => {
    setSaved('Save')
  }, 2000)

  return user && !user.id ? null : (
    <Profile user={user} handleSubmit={handleSubmit} saved={saved} isLoading={isLoading} />
  )
}

export default connect()(ProfileContainer)
