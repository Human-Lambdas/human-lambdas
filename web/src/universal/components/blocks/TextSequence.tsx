import React from 'react'
import styled from '@emotion/styled'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Content from './Content'
import {BLOCK_TYPE} from 'universal/utils/constants'
import Sequence from 'universal/components/TextSequence'

interface TextSequenceProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  index?: number
  onEdit?: () => void
  isAudits?: boolean
  setFieldValue?: any
}

const Block = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
  flex: '0 0 auto'
})

export default function TextSequence(props: TextSequenceProps) {
  const {isAudits, block, onEdit, onDelete, handleChange, isEditing, index, setFieldValue} = props
  const {name, type} = block || {}
  const data = isEditing ? block[type].placeholder : block[type].value
  const {
    delete_disabled: deleteDisabled,
    edit_disabled: editDisabled,
    ordering_disabled: orderingDisabled
  } = block[type]
  const settings = {
    deleteDisabled,
    editDisabled,
    orderingDisabled
  }

  const targetName = isEditing
    ? `data[${index}][${type}].placeholder`
    : `data[${index}][${type}].value`

  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.TEXT}
        />
      </HeaderContainer>
      <BodyContainer>
        <Block>
          <Sequence
            name={targetName}
            targetName={targetName}
            data={data}
            type={type}
            setFieldValue={setFieldValue}
            index={index}
            handleChange={handleChange}
            isEditing={isEditing}
            isAudits={isAudits}
            placeholder={block[type]?.placeholder || []}
            settings={settings}
          />
        </Block>
      </BodyContainer>
    </Content>
  )
}
