import {useContext} from 'react'
import {NetworkerContext} from '../components/NetworkerProvider'

const useNetworker = () => {
  return useContext(NetworkerContext)
}

export default useNetworker
