import React, {memo, useState, useEffect} from 'react'
import styled from '@emotion/styled'
import {FieldArray, ArrayHelpers} from 'formik'
import BlockHeader from 'universal/components/BlockHeader'
import {IBlock, IQueue} from 'universal/types/generic'
import BasicTextArea from 'universal/components/BasicTextArea'
import {BLOCK_TYPE} from 'universal/utils/constants'
import PrimaryButton from 'universal/components/PrimaryButton'
import SecondaryButton from 'universal/components/SecondaryButton'
import InputField from 'universal/components/InputField'
import TaskRadio from 'universal/components/TaskRadio'
import TaskCheckbox from 'universal/components/TaskCheckbox'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Content from './Content'

interface Props {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  index: number
  onEdit?: () => void
  setFieldValue: any
  isAudits?: boolean
}

const ButtonBlock = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
  flex: '0 0 auto'
})

const Block = styled.div({
  padding: '5px 0'
})

const Wrapper = styled.div({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
})

const Item = styled.div({
  flex: 1
})

const assignNextAndBackVisibility = (
  currentIdx,
  currentType,
  nextBlockId,
  nextBlockIndex,
  value,
  data
) => {
  let isNextDisabled = false
  let isBackDisabled = false

  isBackDisabled = currentIdx === 0

  if (currentIdx === data.length - 1) {
    if (nextBlockIndex === -1) {
      isNextDisabled = true
    }
  } else {
    if (currentType === BLOCK_TYPE.SINGLE_SELECTION || currentType === BLOCK_TYPE.BINARY) {
      if (!value) isNextDisabled = true
    } else {
      if (value === '' || value === null) {
        isNextDisabled = true
      } else {
        isNextDisabled = false
      }
    }
  }

  if (!nextBlockId !== null && nextBlockId !== undefined) {
    isNextDisabled = false
  } else if (nextBlockId === null) {
    isNextDisabled = true
  }

  return {
    isNextDisabled,
    isBackDisabled
  }
}

const FormSequence = memo((props: Props) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const {isAudits, block, onDelete, handleChange, index, isEditing, onEdit, setFieldValue} = props
  const {name, type, _id} = block || {}
  const {data, history = []} = block[type]

  const currentBlock = data[currentIdx]

  useEffect(() => {
    if (isAudits) return
    if (currentBlock && history?.length > 0) {
      const lastBlockId = history.pop()
      const lastBlockIdx = data.findIndex(({id}) => id === lastBlockId)
      setCurrentIdx(lastBlockIdx + 1)
    }
  }, [])

  if (!currentBlock) return null

  const {type: currentType, name: currentBlockName} = currentBlock
  const {value = ''} = currentBlock[currentType]
  const nextBlockId = currentBlock?.logic_jump ? currentBlock.logic_jump[value] : undefined
  const nextBlockIndex = data.findIndex((block) => block.id === nextBlockId)
  const logicBlocks = [BLOCK_TYPE.BINARY, BLOCK_TYPE.SINGLE_SELECTION]

  const handleNext = (arrayHelpers: ArrayHelpers) => {
    if (logicBlocks.includes(currentType)) {
      if (!nextBlockId) {
        arrayHelpers.push(currentBlock.id)
        setCurrentIdx(currentIdx + 1)
      } else {
        if (nextBlockIndex !== -1) {
          arrayHelpers.push(currentBlock.id)
          setCurrentIdx(nextBlockIndex)
        } else {
          console.error('Error: unable to find next block ID')
        }
      }
    } else {
      // pop current index into history
      arrayHelpers.push(currentBlock.id)
      setCurrentIdx(currentIdx + 1)
    }
  }

  const handleBack = () => {
    if (history?.length <= 0) {
      setCurrentIdx(0)
    } else {
      const stackedId = history.pop()
      const nextBlockIndex = data.findIndex((block) => block.id === stackedId)
      if (nextBlockIndex !== -1) {
        setCurrentIdx(nextBlockIndex)
      } else {
        setCurrentIdx(0)
      }
    }
  }

  const {isNextDisabled, isBackDisabled} = assignNextAndBackVisibility(
    currentIdx,
    currentType,
    nextBlockId,
    nextBlockIndex,
    value,
    data
  )

  return (
    <FieldArray
      name={`data.${index}.${type}.history`}
      render={(arrayHelpers) => (
        <Content {...props}>
          <Wrapper>
            <HeaderContainer>
              {name && <Label>{name}</Label>}
              <BlockHeader
                onDelete={onDelete}
                onEdit={onEdit}
                isEditing={isEditing}
                blockType={BLOCK_TYPE.FORM_SEQUENCE}
              />
            </HeaderContainer>
            <BodyContainer>
              <ButtonBlock>
                <PrimaryButton
                  type='button'
                  disabled={isBackDisabled}
                  onClick={() => handleBack(arrayHelpers)}
                >
                  Back
                </PrimaryButton>
                <SecondaryButton
                  type='button'
                  disabled={isNextDisabled}
                  onClick={() => handleNext(arrayHelpers)}
                >
                  Next
                </SecondaryButton>
              </ButtonBlock>
              {currentBlockName && <Label>{currentBlockName}</Label>}
              {currentType === BLOCK_TYPE.TEXT && (
                <BasicTextArea
                  name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                  onChange={handleChange}
                  autoFocus={false}
                  value={value}
                  style={{flex: 1}}
                  disabled={isAudits}
                  key={currentBlock?.id}
                />
              )}
              {currentType === BLOCK_TYPE.NUMBER && (
                <Item>
                  <InputField
                    name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                    onChange={handleChange}
                    type='number'
                    autoFocus={false}
                    value={value}
                    disabled={isAudits}
                  />
                </Item>
              )}
              {currentType === BLOCK_TYPE.EMAIL && (
                <Item>
                  <InputField
                    name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                    onChange={handleChange}
                    type='email'
                    autoFocus={false}
                    value={value}
                    disabled={isAudits}
                  />
                </Item>
              )}
              {currentType === BLOCK_TYPE.LINK && (
                <Item>
                  <InputField
                    name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                    onChange={handleChange}
                    type='text'
                    autoFocus={false}
                    value={value}
                    disabled={isAudits}
                  />
                </Item>
              )}
              {currentType === BLOCK_TYPE.BINARY && (
                <Item>
                  <Block>
                    <TaskRadio
                      name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                      id={`${_id}-${currentIdx}-true`}
                      value='true'
                      label='Yes'
                      onChange={() =>
                        setFieldValue(
                          `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
                          true
                        )
                      }
                      checked={value === true}
                      disabled={isAudits}
                    />
                  </Block>
                  <Block>
                    <TaskRadio
                      name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                      id={`${_id}-${currentIdx}-false`}
                      value='false'
                      label='No'
                      onChange={() =>
                        setFieldValue(
                          `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
                          false
                        )
                      }
                      checked={value === false}
                      disabled={isAudits}
                    />
                  </Block>
                </Item>
              )}
              {currentType === BLOCK_TYPE.SINGLE_SELECTION && (
                <Item>
                  {currentBlock[currentType].options.map((option, optionIndex) => (
                    <Block key={optionIndex}>
                      <TaskRadio
                        name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                        id={`${index}-${optionIndex}`}
                        value={option.id}
                        label={option.name}
                        onChange={handleChange}
                        checked={option.id === value}
                        disabled={isAudits}
                      />
                    </Block>
                  ))}
                </Item>
              )}
              {currentType === BLOCK_TYPE.MULTIPLE_SELECTION && (
                <Item>
                  {currentBlock[currentType].options.map((option, optionIndex) => (
                    <Block key={optionIndex}>
                      <TaskCheckbox
                        name={`data.${index}.${type}.data.${currentIdx}.${currentType}.value`}
                        id={`${index}-${optionIndex}`}
                        value={option.id}
                        label={option.name}
                        onChange={handleChange}
                        checked={value && value.includes(option.id)}
                        disabled={isAudits}
                      />
                    </Block>
                  ))}
                </Item>
              )}
            </BodyContainer>
          </Wrapper>
        </Content>
      )}
    />
  )
})

export default FormSequence
