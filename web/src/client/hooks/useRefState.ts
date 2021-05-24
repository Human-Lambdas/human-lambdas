import {Dispatch, MutableRefObject, SetStateAction, useCallback, useRef, useState} from 'react'

const useRefState = <S>(
  initialState: S | (() => S)
): [MutableRefObject<S>, Dispatch<SetStateAction<S>>] => {
  const [firstState, _setState] = useState<S>(initialState)
  const latestState = useRef<S>(firstState)
  const setState = useCallback((nextState) => {
    latestState.current = nextState
    _setState(nextState)
  }, [])
  return [latestState, setState]
}

export default useRefState
