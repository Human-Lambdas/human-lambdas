import React, {memo, useState} from 'react'
import styled from '@emotion/styled'
import TaskCheckbox from 'universal/components/TaskCheckbox'
import BlockHeader from 'universal/components/BlockHeader'
import {IBlock, IQueue} from 'universal/types/generic'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Label from './Label'
import Content from './Content'
import {BLOCK_TYPE} from 'universal/utils/constants'
import ListFilter from 'client/components/ListFilter'

interface Props {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  readOnly?: boolean
  isEditing?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  index: number
  onEdit?: () => void
  isAudits?: boolean
}

const Checkbox = styled.div({
  marginBottom: 10
})

const MultiClass = memo((props: Props) => {
  const {isAudits, block, onDelete, handleChange, index, isEditing, onEdit} = props
  const {name, type} = block
  const {value} = block['multiple_selection'] || {}
  const isTask = !isEditing && !isAudits
  const [list, setList] = useState(block[type].options)
  const options = isEditing ? block[type].options : list

  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.MULTIPLE_SELECTION}
        />
      </HeaderContainer>
      {isTask && Array.isArray(block[type].options) && block[type].options.length > 10 && <ListFilter list={block[type].options} setList={setList} keys={['name']} />}
      <BodyContainer>
        {options.map((option, optionIndex) => (
          <Checkbox key={optionIndex}>
            <TaskCheckbox
              name={`data.${index}.multiple_selection.value`}
              id={`${index}-${optionIndex}`}
              value={option.id}
              label={option.name}
              onChange={handleChange}
              checked={value && value.includes(option.id)}
              disabled={isAudits}
            />
          </Checkbox>
        ))}
      </BodyContainer>
    </Content>
  )
})

export default MultiClass
