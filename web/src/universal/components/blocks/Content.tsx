import React from 'react'
import styled from '@emotion/styled'
import {Container} from '../../components/BlockHeader'
import Icon from 'universal/components/Icon'
interface ContentWrapperProps {
  children: React.ReactNode
  isEditing?: boolean
  overflow?: string
}

const Content = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: ${({overflow}) => (overflow ? overflow : 'auto')};
  &:hover ${Container} {
    visibility: visible;
    opacity: 1;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const DragHandle = styled(Icon)`
  height: 30px;
  width: 30px;
  position: fixed;
  left: 50%;
  z-index: 10;
  top: -15px;
  cursor: ${({isEditing}) => (isEditing ? 'grab' : 'inherit')};
  display: none !important;
  display: ${({isEditing}) => (isEditing ? 'block' : 'none')};
  ${ContentContainer}:hover & {
    display: ${({isEditing}) => (isEditing ? 'block' : 'none')} !important;
  }
  &.dragging {
    cursor: grabbing;
  }
`

export default function ContentWrapper({children, isEditing, overflow}: ContentWrapperProps) {
  const addDraggingStyles = (e) => {
    e.target.classList.add('dragging')
  }

  const removeDraggingStyles = (e) => {
    e.target.classList.remove('dragging')
  }
  return (
    <ContentContainer>
      <DragHandle
        className='drag-handle'
        isEditing={isEditing}
        style={{
          fontSize: 18,
          color: '#686869'
        }}
        onMouseOut={removeDraggingStyles}
        onMouseDown={addDraggingStyles}
        onMouseUp={removeDraggingStyles}
      >
        drag_handle
      </DragHandle>
      <Content isEditing={isEditing} overflow={overflow}>
        {children}
      </Content>
    </ContentContainer>
  )
}
