import {useRef} from 'react'
import useModalPortal from './useModalPortal'
import usePortal, {UsePortalOptions} from './usePortal'
import useLoadingDelay from './useLoadingDelay'

interface Options extends UsePortalOptions {
  background?: string
  overflow?: string
}

const useModal = (options: Options = {}) => {
  const {noClose, background, onOpen, onClose, overflow} = options
  const targetRef = useRef<HTMLDivElement>(null)
  const {portal, closePortal, openPortal, togglePortal, portalStatus, setPortalStatus} = usePortal({
    onOpen,
    onClose
  })
  const {loadingDelay, loadingDelayRef} = useLoadingDelay()
  const modalPortal = useModalPortal(
    portal,
    targetRef,
    portalStatus,
    setPortalStatus,
    loadingDelayRef,
    noClose ? undefined : closePortal,
    background,
    overflow,
    'blur(1px)'
  )
  return {togglePortal, modalPortal, closePortal, loadingDelay, openPortal}
}

export default useModal
