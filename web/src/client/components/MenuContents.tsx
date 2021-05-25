import styled from '@emotion/styled'
import {Radius} from 'utils/constants'
import {PortalStatus} from '../hooks/usePortal'

const animations = (portalStatus) => {
  switch (portalStatus) {
    case PortalStatus.Mounted:
      return {
        opacity: 0
      }
    case PortalStatus.Entering:
    case PortalStatus.Entered:
      return {
        opacity: 1,
        transition: `opacity 188ms cubic-bezier(0, 0, .2, 1)`
      }
    case PortalStatus.Exiting:
      return {
        opacity: 0,
        transition: `opacity 120ms cubic-bezier(0, 0, .2, 1)`
      }
    default:
      return {}
  }
}

export interface MenuContentsProps {
  minWidth?: number
  menuContentStyles?: any
  portalStatus: PortalStatus
}

const MenuContents = styled('div')<MenuContentsProps>(
  ({minWidth, menuContentStyles = {}, portalStatus}) => ({
    borderRadius: Radius.MENU,
    outline: 0,
    overflowY: portalStatus >= PortalStatus.Entered ? 'auto' : 'hidden',
    paddingBottom: 8,
    paddingTop: 8,
    textAlign: 'left',
    width: '100%',
    opacity: 0,
    transition: `opacity 100ms cubic-bezier(0, 0, .2, 1)`,
    minWidth,
    ...animations(portalStatus),
    ...menuContentStyles
  })
)

export default MenuContents
