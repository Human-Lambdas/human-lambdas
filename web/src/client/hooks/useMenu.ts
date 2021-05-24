import {useMemo, RefObject} from 'react'
import getBBox, {RectElement} from '../utils/getBBox'
import useMenuPortal from './useMenuPortal'
import usePortal, {PortalStatus, UsePortalOptions} from './usePortal'
import useCoords, {MenuPosition, UseCoordsOptions} from './useCoords'
import useLoadingDelay from './useLoadingDelay'

interface Options extends UsePortalOptions, UseCoordsOptions {
  loadingWidth?: number
  isDropdown?: boolean
  menuContentStyles?: any
  menuContentRef?: RefObject<HTMLDivElement>
}

export interface MenuProps {
  closePortal: () => void
  portalStatus: PortalStatus
  isDropdown: boolean
}

const useMenu = (preferredMenuPosition: MenuPosition, options: Options = {}) => {
  const {onOpen, onClose, id, parentId, originCoords, menuContentStyles, menuContentRef} = options
  const isDropdown = !!options.isDropdown
  const {targetRef, originRef, coords, menuPosition} = useCoords(preferredMenuPosition, {
    originCoords
  })
  if (originCoords) {
    ;(originRef as any).current = {getBoundingClientRect: () => originCoords} as RectElement
  }
  const {portal, closePortal, togglePortal, portalStatus, setPortalStatus, openPortal} = usePortal({
    id,
    onOpen,
    onClose,
    parentId
  })
  const loadingWidth = useMemo(() => {
    if (options.loadingWidth) return options.loadingWidth
    const bbox = getBBox(originRef.current)
    return Math.max(40, bbox ? bbox.width : 40)
  }, [originRef.current])
  const {loadingDelay, loadingDelayRef} = useLoadingDelay()
  const menuPortal = useMenuPortal(
    portal,
    targetRef,
    loadingWidth,
    coords,
    portalStatus,
    setPortalStatus,
    isDropdown,
    menuPosition,
    loadingDelayRef,
    menuContentStyles,
    menuContentRef
  )
  const menuProps = {portalStatus, closePortal, isDropdown}
  return {
    togglePortal,
    originRef,
    menuPortal,
    menuProps,
    loadingDelay,
    loadingWidth,
    portalStatus,
    openPortal
  }
}

export default useMenu
