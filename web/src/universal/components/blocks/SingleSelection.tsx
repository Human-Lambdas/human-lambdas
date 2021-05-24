import React, {memo, useState} from 'react'
import styled from '@emotion/styled'
import TaskRadio from 'universal/components/TaskRadio'
import BlockHeader from 'universal/components/BlockHeader'
import {IBlock, IQueue} from 'universal/types/generic'
import Content from './Content'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Label from './Label'
import {BLOCK_TYPE} from 'universal/utils/constants'
import ListFilter from 'client/components/ListFilter'

interface Props {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  index?: number
  onEdit?: () => void
  isAudits?: boolean
}

const Radio = styled.div({
  marginBottom: 10
})

const SingleSelection = memo((props: Props) => {
  const {block, onDelete, isAudits, handleChange, index, isEditing, onEdit} = props
  const {name, type} = block
  const {value} = block['single_selection'] || {}
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
          blockType={BLOCK_TYPE.SINGLE_SELECTION}
        />
      </HeaderContainer>
      {isTask && Array.isArray(block[type].options) && block[type].options.length > 10 && <ListFilter list={block[type].options} setList={setList} keys={['name']} />}
      <BodyContainer>
        {options.map((option, optionIndex: number) => (
          <Radio key={optionIndex}>
            <TaskRadio
              name={`data.${index}.single_selection.value`}
              id={`${index}-${optionIndex}`}
              value={option.id}
              label={option.name}
              onChange={handleChange}
              checked={option.id === value}
              disabled={isAudits}
            />
          </Radio>
        ))}
      </BodyContainer>
    </Content>
  )
})

export default SingleSelection
