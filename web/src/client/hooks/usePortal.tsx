import React, {KeyboardEvent, ReactElement, useEffect, useCallback, useRef} from 'react'
import {createPortal} from 'react-dom'
import useEventCallback from './useEventCallback'
import useRefState from './useRefState'

export const enum PortalStatus {
  Mounted, // node appended to DOM
  Entering, // commence animations
  Entered, // animation complete
  Exiting, // closePortal was called
  Exited // initial state
}

export interface UsePortalOptions {
  onOpen?: (el: HTMLElement) => void
  onClose?: () => void
  id?: string
  noClose?: boolean
  allowScroll?: boolean
  parentId?: string
}

const getParent = (parentId: string | undefined) => {
  const parent = parentId ? document.getElementById(parentId) : document.body
  if (!parent) throw new Error('Could not find parent ' + parentId)
  return parent
}

const requestDoubleAnimationFrame = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb))

const usePortal = (options: UsePortalOptions = {}) => {
  const portalRef = useRef<HTMLDivElement>()
  const originRef = useRef<HTMLElement>()
  const timeoutRef = useRef<number | null>(null)
  const [portalStatusRef, setPortalStatus] = useRefState(PortalStatus.Exited)

  const terminatePortal = useEventCallback(() => {
    if (!portalRef.current) return
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('mousedown', handleDocumentClick)
    setPortalStatus(PortalStatus.Exited)
    try {
      getParent(options.parentId).removeChild(portalRef.current)
    } catch (e) {
      /* portal already removed (possible when parent is not document.body) */
    }
    portalRef.current = undefined
    timeoutRef.current = null
  })

  // terminate portal on unmount
  useEffect(() => terminatePortal, [terminatePortal])

  const terminateAfterTransition = useEventCallback(() => {
    /**
     * setTimeout because the portal should terminate
     * only after all other transitionend events had time to fire
     */
    timeoutRef.current = setTimeout(terminatePortal)
  })

  const closePortal = useEventCallback(() => {
    if (portalStatusRef.current >= PortalStatus.Exiting) return
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('mousedown', handleDocumentClick)
    if (portalRef.current) {
      portalRef.current.addEventListener('transitionend', terminateAfterTransition)
    }
    setPortalStatus(PortalStatus.Exiting)
    options.onClose && options.onClose()
  })

  const handleKeydown = useEventCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (originRef.current) {
        originRef.current.focus()
      }
      closePortal()
    }
  })

  const handleDocumentClick = useEventCallback((e: React.MouseEvent) => {
    if (!portalRef.current) return
    const target = e.target as Node
    if (!portalRef.current.contains(target)) {
      // Ignore clicks on toggle otherwise long clicks on mouseup after close will
      // reopen.
      if (!originRef.current || !originRef.current.contains(target)) {
        closePortal()
      }
    }
  })

  const openPortal = useEventCallback((e?: React.MouseEvent) => {
    const {current: portalStatus} = portalStatusRef
    if (portalStatus <= PortalStatus.Entered) return

    if (!options.noClose) {
      document.addEventListener('keydown', handleKeydown)
      document.addEventListener('mousedown', handleDocumentClick)
    }

    if (portalStatus === PortalStatus.Exiting) {
      if (portalRef.current) {
        portalRef.current.removeEventListener('transitionend', terminateAfterTransition)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setPortalStatus(PortalStatus.Entered)
    } else if (portalStatus === PortalStatus.Exited) {
      setPortalStatus(PortalStatus.Mounted)
      requestDoubleAnimationFrame(() => {
        setPortalStatus(PortalStatus.Entering)
      })

      portalRef.current = document.createElement('div')
      portalRef.current.id = options.id || 'portal'
      getParent(options.parentId).appendChild(portalRef.current)
      if (e && e.currentTarget) {
        originRef.current = e.currentTarget as HTMLElement
      }
      options.onOpen && options.onOpen(portalRef.current)
    }
  })

  const togglePortal = useEventCallback((e?: React.MouseEvent) => {
    portalRef.current ? closePortal() : openPortal(e)
  })

  const portal = useCallback(
    (reactEl: ReactElement) => {
      const targetEl = portalRef.current
      return !targetEl || portalStatusRef.current === PortalStatus.Exited
        ? null
        : createPortal(reactEl, targetEl)
    },
    [portalRef, portalStatusRef]
  )

  return {
    openPortal,
    closePortal,
    terminatePortal,
    togglePortal,
    portal,
    portalStatus: portalStatusRef.current,
    setPortalStatus
  }
}

export default usePortal
