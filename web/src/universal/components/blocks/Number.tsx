import * as React from 'react'
import {IBlock, IQueue} from 'universal/types/generic'
import InputField from 'universal/components/InputField'
import BlockHeader from 'universal/components/BlockHeader'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Label from './Label'
import Content from './Content'
import {BLOCK_TYPE} from 'universal/utils/constants'

interface NumberBlockProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  index: number
  onEdit?: () => void
  isAudits?: boolean
}

export default function NumberBlock(props: NumberBlockProps) {
  const {block, onDelete, handleChange, index, isAudits, isEditing, onEdit} = props
  const {number, name} = block
  const {placeholder, read_only: readOnly, value = ''} = number || {}
  const renderValue = isEditing ? value || placeholder : value

  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.NUMBER}
        />
      </HeaderContainer>
      <BodyContainer>
        {readOnly || isAudits ? (
          <div>{renderValue}</div>
        ) : (
          <InputField
            name={`data.${index}.number.value`}
            onChange={handleChange}
            type='number'
            autoFocus={false}
            value={renderValue || ""}
          />
        )}
      </BodyContainer>
    </Content>
  )
}
