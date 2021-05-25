import React from 'react'
import DatePicker from 'universal/components/DatePicker'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import Content from './Content'
import {BLOCK_TYPE} from 'universal/utils/constants'
import BodyContainer from './BodyContainer'
import {getDisplayFormat} from 'client/utils/dateHelpers'

interface DateProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  index?: number
  onEdit?: () => void
  isAudits?: boolean
  setFieldValue?: any
}

const DateBlock = (props: DateProps) => {
  const {isAudits, block, onEdit, onDelete, setFieldValue, isEditing, index} = props
  const {date, name} = block
  const {placeholder, read_only: readOnly, value = ''} = date || {}

  const renderValue = isEditing ? value || placeholder : value

  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.DATE}
        />
      </HeaderContainer>
      <BodyContainer>
        {readOnly || isAudits ? (
          <div>{getDisplayFormat(renderValue)}</div>
        ) : (
          <DatePicker
            name={`data.${index}.date.value`}
            value={renderValue}
            readOnly={readOnly || isAudits}
            placeholder={placeholder}
            setFieldValue={setFieldValue}
          />
        )}
      </BodyContainer>
    </Content>
  )
}

export default DateBlock
