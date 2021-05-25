import React, {ReactNode, DragEvent} from 'react'
import styled from '@emotion/styled'
import {Responsive, WidthProvider, Layout} from 'react-grid-layout'
import {IBlock} from 'universal/types/generic'

import 'universal/styles/css/react-grid-layout.css'
import 'universal/styles/css/react-resizable.css'
import 'universal/styles/css/rgl-overide.css'

const RGLWidthProvider = WidthProvider(Responsive)
export const RGL_COLUMNS = 20
export const RGL_ROWS = 40

interface RGLProps {
  children: ReactNode
  isDraggable?: boolean
  isDroppable?: boolean
  isResizable?: boolean
  onDragStart?: React.EventHandler<DragEvent>
  onDragStop?: React.EventHandler<DragEvent>
  onDrop?: React.EventHandler<DragEvent>
  onLayoutChange: (layout: Layout) => void
  layouts: Array<IBlock>
  droppingItem: Layout
}

const RGLContainer = styled(RGLWidthProvider)({
  width: '100%',
  minHeight: 'calc(100vh - 50px)',
  backgroundColor: '#f8f8fa'
})

const RGLWrapper = styled.div({
  height: '100%',
  width: '100%',
  overflow: 'scroll'
})

const RGL = (props: RGLProps) => {
  const {
    children,
    isDraggable,
    isDroppable,
    isResizable,
    onDragStart,
    onDragStop,
    onDrop,
    onLayoutChange,
    layouts,
    droppingItem
  } = props
  return (
    <RGLWrapper>
      <RGLContainer
        {...props}
        autoSize={true}
        breakpoints={{all: RGL_COLUMNS}}
        cols={{all: RGL_COLUMNS}}
        compactType={'vertical'}
        isDraggable={isDraggable}
        isDroppable={isDroppable}
        isBounded
        droppingItem={droppingItem}
        isResizable={isResizable}
        layouts={{all: layouts}}
        measureBeforeMount={true}
        useCSSTransforms={true}
        preventCollision={false}
        containerPadding={[10, 10]}
        margin={[10, 10]}
        onDragStart={onDragStart}
        onDragStop={onDragStop}
        onDrop={onDrop}
        rowHeight={RGL_ROWS}
        onLayoutChange={onLayoutChange}
        draggableHandle='.drag-handle'
      >
        {children}
      </RGLContainer>
    </RGLWrapper>
  )
}

export default RGL
