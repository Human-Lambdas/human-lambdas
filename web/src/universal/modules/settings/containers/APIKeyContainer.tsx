import React, {useEffect, useState} from 'react'
import APIKey from '../components/APIKey'
import useNetworker from 'client/hooks/useNetworker'

const APIKeyContainer = () => {
  const networker = useNetworker()
  const [apiKey, setAPIKey] = useState('')

  useEffect(() => {
    async function getAPIKey() {
      try {
        const {data} = await networker.httpHandler(`/users/api-token`, {method: 'GET'})
        setAPIKey(data)
      } catch (e) {
        console.error(e)
      }
    }

    getAPIKey()
  }, [])

  return <APIKey apiKey={apiKey} />
}

export default APIKeyContainer
