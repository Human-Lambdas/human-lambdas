import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import {IQueue} from 'universal/types/generic'
import IconButton from 'universal/components/IconButton'
import Icon from 'universal/components/Icon'
import {PALETTE} from 'client/styles/palette'
import {BLOCKS, BLOCK_TYPE} from 'universal/utils/constants'

interface BlockHeaderProps {
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  onEdit?: () => void
  isEditing?: boolean
  blockType: BLOCK_TYPE
}

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '25px 25px',
  visibility: 'hidden',
  opacity: 0,
  transition: 'visibility 0s, opacity 0.250s linear',
  position: 'absolute',
  right: '-5px',
  backgroundColor: '#fff'
})

const StyledIcon = styled(Icon)({
  textAlign: 'center',
  display: 'block',
  fontSize: 18,
  color: PALETTE.PRIMARY_MAIN
})

const TypeIcon = styled(StyledIcon)({
  color: PALETTE.BACKGROUND_GRAY_MID,
  cursor: 'default'
})

const BlockHeader = (props: BlockHeaderProps) => {
  const {onDelete, onEdit, isEditing, blockType} = props
  return (
    <Fragment>
      {isEditing && (
        <Container>
          <IconButton type='button' onClick={onEdit}>
            <StyledIcon>settings</StyledIcon>
          </IconButton>
          <IconButton type='button' onClick={onDelete}>
            <StyledIcon>delete</StyledIcon>
          </IconButton>
        </Container>
      )}
      <TypeIcon>{BLOCKS.find(b => b.type === blockType)?.icon}</TypeIcon>
    </Fragment>
  )
}

export default BlockHeader
