import styled from '@emotion/styled'
import {BoxShadow, Radius} from 'utils/constants'
import {MenuPosition} from './useCoords'
import {PortalStatus} from './usePortal'

interface BackgroundProps {
  menuPosition: MenuPosition
  portalStatus: PortalStatus
  isDropdown: boolean
}

const transformOrigins = {
  [MenuPosition.UPPER_RIGHT]: 'top right',
  [MenuPosition.UPPER_LEFT]: 'top left',
  [MenuPosition.LOWER_LEFT]: 'bottom left',
  [MenuPosition.LOWER_RIGHT]: 'bottom right'
}

const backgroundStyles = (portalStatus: PortalStatus, isDropdown: boolean) => {
  switch (portalStatus) {
    case PortalStatus.Entering:
    case PortalStatus.Entered:
      return {
        opacity: 1,
        transform: isDropdown ? 'scaleY(1)' : 'scale(1)',
        transition: `all 188ms cubic-bezier(0, 0, .2, 1)`
      }
    case PortalStatus.Exiting:
      return {
        opacity: 0,
        transition: `all 120ms cubic-bezier(0, 0, .2, 1)`
      }
    case PortalStatus.Mounted:
      return {
        transform: isDropdown ? 'scaleY(0)' : 'scale(0)'
      }
    default:
      return {}
  }
}

const MenuBackground = styled('div')<BackgroundProps>(
  ({menuPosition, portalStatus, isDropdown}) => ({
    background: '#fff',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: Radius.MENU,
    boxShadow: BoxShadow.MENU,
    position: 'absolute',
    zIndex: -1,
    transformOrigin: transformOrigins[menuPosition],
    ...backgroundStyles(portalStatus, isDropdown)
  })
)

export default MenuBackground
