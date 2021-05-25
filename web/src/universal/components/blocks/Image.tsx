import * as React from 'react'
import styled from '@emotion/styled'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import Content from './Content'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import {BLOCK_TYPE} from 'universal/utils/constants'
import BodyContainer from './BodyContainer'

interface ImageProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  onEdit?: () => void
  isEditing?: boolean
  isAudits?: boolean
}

const StyledImg = styled.img({
  objectFit: 'contain',
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'auto',
  height: 'auto'
})

const Image = React.memo((props: ImageProps) => {
  const {block, onDelete, onEdit, isEditing} = props
  const {name, type, id, image} = block
  const {value, placeholder} = image || {}
  const renderValue = isEditing ? value || placeholder : value

  return (
    <Content {...props} style={{display: 'block', maxWidth: '100%', minWidth: '100%'}}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.IMAGE}
        />
      </HeaderContainer>
      <BodyContainer>
        {renderValue && (
          <StyledImg
            src={renderValue}
            alt={name || type}
            title={name || type}
            onDragStart={(e) => e.preventDefault()}
          />
        )}
      </BodyContainer>
    </Content>
  )
})

export default Image
