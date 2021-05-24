/**
 * TODO add ErrorBoundary component
 */
import React, {Suspense, useEffect, ReactElement, Ref, ReactPortal} from 'react'
import styled from '@emotion/styled'
import {LoadingDelayRef} from './useLoadingDelay'
import usePortal, {PortalStatus} from './usePortal'
import {ZIndex} from 'utils/constants'
import LoadingComponent from 'components/LoadingComponent'

const ModalBlock = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  left: 0,
  top: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: ZIndex.MODAL
})

const backdropStyles = {
  [PortalStatus.Entering]: {
    opacity: 1,
    transition: 'opacity 200ms cubic-bezier(0, 0, .2, 1)'
  },
  [PortalStatus.Exiting]: {
    opacity: 0,
    transition: 'opacity 120ms cubic-bezier(0, 0, .2, 1)'
  },
  [PortalStatus.Mounted]: {
    opacity: 0
  }
}

const modalStyles = {
  [PortalStatus.Mounted]: {
    opacity: 0,
    transform: 'translateY(30px)'
  },
  [PortalStatus.Entering]: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: `all 200ms cubic-bezier(0, 0, .2, 1)`
  },
  [PortalStatus.Entered]: {},
  [PortalStatus.Exiting]: {
    opacity: 0,
    transform: 'translateY(-32px)',
    transition: `all 200ms cubic-bezier(0, 0, .2, 1)`
  }
}

const Scrim = styled('div')<{
  background: string
  portalStatus: PortalStatus
}>(({background, portalStatus}) => ({
  background,
  height: '100%',
  position: 'fixed',
  width: '100%',
  ...backdropStyles[portalStatus]
}))

const BlurredScrim = styled('div')<{backdropFilter?: string}>(({backdropFilter}) => ({
  height: '100%',
  position: 'fixed',
  width: '100%',
  backdropFilter
}))

const ModalContents = styled('div')<{portalStatus: PortalStatus}>(({portalStatus}) => ({
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'column',
  position: 'relative',
  maxHeight: '100vh',
  ...modalStyles[portalStatus]
}))

const ContentWrapper = styled('div')<{overflow?: string | undefined}>(({overflow}) => ({
  borderRadius: 10,
  ...(overflow && {overflow: overflow})
}))

const useModalPortal = (
  portal: (el: ReactElement) => ReactPortal | null,
  targetRef: Ref<HTMLDivElement>,
  portalStatus: PortalStatus,
  setPortalStatus: ReturnType<typeof usePortal>['setPortalStatus'],
  loadingDelayRef: LoadingDelayRef,
  closePortal: undefined | (() => void),
  background: string | undefined,
  overflow: string | undefined,
  backdropFilter?: string | undefined
) => {
  useEffect(() => {
    let isMounted = true
    if (portalStatus === PortalStatus.Entering) {
      setTimeout(() => {
        if (isMounted) {
          setPortalStatus(PortalStatus.Entered)
        }
      }, 200)
    }
    return () => {
      isMounted = false
    }
  }, [portalStatus, setPortalStatus])
  return (reactEl) => {
    return portal(
      <ModalBlock ref={targetRef as any}>
        <BlurredScrim backdropFilter={backdropFilter}>
          <Scrim
            onClick={closePortal}
            background={background || 'rgba(255, 255, 255, 0.45)'}
            portalStatus={portalStatus}
          />
        </BlurredScrim>
        <ModalContents portalStatus={portalStatus}>
          <Suspense loadingDelayRef={loadingDelayRef} fallback={<LoadingComponent showAfter={0} />}>
            <ContentWrapper overflow={overflow}>{reactEl}</ContentWrapper>
          </Suspense>
        </ModalContents>
      </ModalBlock>
    )
  }
}

export default useModalPortal
