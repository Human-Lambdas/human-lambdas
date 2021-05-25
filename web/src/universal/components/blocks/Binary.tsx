import React from 'react'
import styled from '@emotion/styled'
import TaskRadio from 'universal/components/TaskRadio'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Label from './Label'
import Content from './Content'
import {BLOCK_TYPE} from 'universal/utils/constants'

interface BinaryProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  index: number
  onEdit?: () => void
  setFieldValue: any
  isAudits?: boolean
}

const Block = styled.div({
  marginBottom: 10
})

const Binary = (props: BinaryProps) => {
  const {isAudits, block, onEdit, onDelete, isEditing, setFieldValue, index} = props || {}
  const {binary, name, id, _id} = block
  const {value} = binary || {}
  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.BINARY}
        />
      </HeaderContainer>
      <BodyContainer>
        <Block>
          <TaskRadio
            autoFocus={false}
            name={`data.${index}.binary.value`}
            id={`${_id}-true`}
            value='true'
            label='Yes'
            onChange={() => setFieldValue(`data.${index}.binary.value`, true)}
            checked={value === true}
            disabled={isAudits}
          />
        </Block>
        <Block>
          <TaskRadio
            autoFocus={false}
            name={`data.${index}.binary.value`}
            id={`${_id}-false`}
            value='false'
            label='No'
            onChange={() => setFieldValue(`data.${index}.binary.value`, false)}
            checked={value === false}
            disabled={isAudits}
          />
        </Block>
      </BodyContainer>
    </Content>
  )
}

export default Binary
