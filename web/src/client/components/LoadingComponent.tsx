import React, {forwardRef, useEffect} from 'react'
import styled from '@emotion/styled'
import {LoadingDelayRef} from 'hooks/useLoadingDelay'
import useTimeout from 'hooks/useTimeout'
import hlLoading from 'styles/theme/images/hlLoading.svg'

interface WrapperProps {
  height?: string | number
  width?: string | number
}

const LoadingWrapper = styled('div')<WrapperProps>(
  ({height = 'fill-available', width = 'fill-available'}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width
  })
)

interface Props {
  delay?: number
  height?: number | string
  width?: number | string
  loadingDelayRef?: LoadingDelayRef
  showAfter?: number
}

const LoadingComponent = forwardRef((props: Props, ref: any) => {
  const {delay, height, loadingDelayRef, width, showAfter = 300} = props
  const minDelay = useTimeout(showAfter)
  useEffect(() => {
    if (loadingDelayRef) {
      loadingDelayRef.current.start = Date.now()
    }
    const loadingDelay = loadingDelayRef && loadingDelayRef.current
    return () => {
      if (loadingDelay) {
        loadingDelay.stop = Date.now()
        loadingDelay.forceUpdate()
      }
    }
  }, [loadingDelayRef])
  if (showAfter && !minDelay) return null
  return (
    <LoadingWrapper ref={ref} height={height} width={width}>
      <img src={hlLoading} />
    </LoadingWrapper>
  )
})

export default LoadingComponent
