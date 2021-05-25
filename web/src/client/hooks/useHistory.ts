import {useEffect} from 'react'
import useRouter from './useRouter'
import useNetworker from './useNetworker'

const useHistory = () => {
  const {history, location} = useRouter() as any
  const networker = useNetworker()

  useEffect(() => {
    networker.router = {history, location}
  }, [history, location, networker])
}

export default useHistory
