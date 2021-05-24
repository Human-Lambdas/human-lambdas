import React from 'react'
import styled from '@emotion/styled'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import HeaderContainer from './HeaderContainer'
import Label from './Label'
import ContentWrapper from './Content'
import {BLOCK_TYPE} from 'universal/utils/constants'
import BodyContainer from './BodyContainer'

interface PdfReaderProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  index: number
  onEdit?: () => void
  setFieldValue: any
  error?: any
  isAudits?: boolean
}

const IFrame = styled.iframe({
  width: '100%',
  height: '100%',
  border: 0
})

const PdfReader = (props: PdfReaderProps) => {
  const {block, onEdit, onDelete, isEditing, error, index} = props || {}
  const {pdf, name} = block
  const {value, placeholder} = pdf || {}

  let sourceUrl: string = isEditing ? placeholder : value

  if (error.data && error.data[index] && error.data.length) {
    sourceUrl = ''
  }

  return (
    <ContentWrapper {...props} overflow={`hidden`}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.PDF}
        />
      </HeaderContainer>
      <BodyContainer>
        <IFrame src={sourceUrl} />
      </BodyContainer>
    </ContentWrapper>
  )
}

export default PdfReader
