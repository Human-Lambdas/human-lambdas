import React, {useCallback, useEffect, useState} from 'react'
import {AxiosRequestConfig} from 'axios'
import SettingsContainer from './containers/SettingsContainer'
import useNetworker from 'hooks/useNetworker'

interface Credentials {
  name: string
  email: string
}

const SettingsRoot = () => {
  const [user, setUser] = useState({})
  const networker = useNetworker()
  const {
    accessObj: {user_id: userId}
  } = networker

  useEffect(() => {
    async function getUser() {
      if (userId) {
        try {
          const {data} = await networker.httpHandler(`/users/${userId}`, {method: 'GET'})
          setUser(data)
        } catch (e) {
          console.error(e)
        }
      }
    }

    getUser()
  }, [])

  const handleProfileSubmit = useCallback(
    async (credentials: Credentials, actions: FormikHelpers<Credentials>) => {
      const reqBody = {
        method: 'PATCH',
        data: credentials
      } as AxiosRequestConfig

      try {
        const {data}: any = await networker.httpHandler(`/users/${userId}`, reqBody)
        setUser(data)
      } catch (e) {
        console.error(e)
      }
      actions.setSubmitting(false)
      actions.resetForm()
    },
    [user, setUser]
  )

  if (user && !user.id) return null
  return (
    <SettingsContainer
      orgId={String(user.current_organization_id)}
      user={user}
      handleProfileSubmit={handleProfileSubmit}
    />
  )
}

export default SettingsRoot
