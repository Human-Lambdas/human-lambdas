import React, {RefObject, ReactPortal, ReactElement, useEffect} from 'react'
import styled from '@emotion/styled'
import {PortalStatus} from './usePortal'
import {Duration, ZIndex} from 'utils/constants'
import MenuBackground from './MenuBackground'
import MenuContents from '../components/MenuContents'
import ErrorBoundary from 'components/ErrorBoundary'
import {MenuPosition, UseCoordsValue} from './useCoords'
import {LoadingDelayRef} from './useLoadingDelay'
import LoadingComponent from 'components/LoadingComponent'

const MenuBlock = styled.div({
  position: 'absolute',
  zIndex: ZIndex.MENU
})

const useMenuPortal = (
  portal: (el: ReactElement) => ReactPortal | null,
  targetRef: RefObject<HTMLDivElement>,
  minWidth: number,
  coords: UseCoordsValue,
  portalStatus: PortalStatus,
  setPortalStatus: any,
  isDropdown: boolean,
  menuPosition: MenuPosition,
  loadingDelayRef: LoadingDelayRef,
  menuContentStyles: any = {},
  menuContentRef: RefObject<HTMLDivElement> | undefined
) => {
  useEffect(() => {
    let isMounted = true
    if (portalStatus === PortalStatus.Entering) {
      setTimeout(() => {
        if (isMounted) {
          setPortalStatus(PortalStatus.Entered)
        }
      }, Duration.MENU_OPEN_MAX)
    }
    return () => {
      isMounted = false
    }
  }, [portalStatus, setPortalStatus])
  return (reactEl) => {
    return portal(
      <MenuBlock ref={targetRef} style={{...coords}}>
        <MenuBackground
          menuPosition={menuPosition}
          portalStatus={portalStatus}
          isDropdown={isDropdown}
        />
        <ErrorBoundary>
          <MenuContents
            minWidth={minWidth}
            portalStatus={portalStatus}
            menuContentStyles={menuContentStyles}
            ref={menuContentRef}
          >
            <React.Suspense
              fallback={
                <LoadingComponent
                  loadingDelayRef={loadingDelayRef}
                  width={minWidth}
                  showAfter={0}
                />
              }
            >
              {reactEl}
            </React.Suspense>
          </MenuContents>
        </ErrorBoundary>
      </MenuBlock>
    )
  }
}

export default useMenuPortal
