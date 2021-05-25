import React from 'react'
import TextEditor from 'universal/components/TextEditor'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import Content from './Content'
import {BLOCK_TYPE} from 'universal/utils/constants'

interface RichTextEditorProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  index?: number
  onEdit?: () => void
  isAudits?: boolean
  setFieldValue?: any
}

const RichTextEditor = (props: RichTextEditorProps) => {
  const {isAudits, block, onEdit, onDelete, setFieldValue, isEditing, index} = props
  const {rich_text: richText, name} = block
  const {placeholder, read_only: readOnly, value = '', format} = richText || {}
  const renderValue = isEditing ? placeholder : value

  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.RICH_TEXT}
        />
      </HeaderContainer>

      <TextEditor
        name={`data.${index}.rich_text.value`}
        value={renderValue}
        readOnly={readOnly || isAudits}
        placeholder={placeholder}
        setFieldValue={setFieldValue}
        format={format}
      />
    </Content>
  )
}

export default RichTextEditor
