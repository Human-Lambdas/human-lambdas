/*
 * https://github.com/JohannesKlauss/react-hotkeys-hook/blob/master/src/index.ts
 */
import {useCallback, useEffect} from 'react'
import hotkeys, {HotkeysEvent} from 'hotkeys-js'

type CallbackFn = (event: KeyboardEvent, handler: HotkeysEvent) => void

const useHotkey = (keys: string, callback: CallbackFn, deps: any[] = [], options: {} = {}) => {
  const memoisedCallback = useCallback(callback, deps)

  useEffect(() => {
    /*
     * https://github.com/JohannesKlauss/react-hotkeys-hook/issues/127
     */
    if (options.filter) {
      hotkeys.filter = () => {
        return true
      }
    }
    hotkeys(keys, memoisedCallback)

    return () => hotkeys.unbind(keys, memoisedCallback)
  }, [memoisedCallback])
}

export default useHotkey
