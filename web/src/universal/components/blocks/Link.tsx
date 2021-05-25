import React from 'react'
import styled from '@emotion/styled'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Content from './Content'
import {PALETTE} from 'universal/styles/palette'
import InputField from 'universal/components/InputField'
import {BLOCK_TYPE} from 'universal/utils/constants'

interface TextProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  index?: number
  onEdit?: () => void
  error?: any
  isAudits?: boolean
}

export const StyledLink = styled.a({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 400,
  color: PALETTE.LINK,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word'
})

export default function Link(props: TextProps) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    isEditing,
    index,
    error,
    handleBlur,
    handleChange
  } = props
  const {link, name} = block
  const {placeholder, read_only: readOnly, value = ''} = link || {}
  const renderValue = isEditing ? placeholder : value

  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.LINK}
        />
      </HeaderContainer>
      <BodyContainer>
        {!readOnly && !isAudits ? (
          <InputField
            type='text'
            name={`data.${index}.link.value`}
            value={renderValue || ""}
            hideErrorMessage={true}
            error={error?.value}
            autoFocus={false}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly={readOnly}
          />
        ) : (
          <StyledLink href={`${renderValue}`} target='_blank'>
            {renderValue}
          </StyledLink>
        )}
      </BodyContainer>
    </Content>
  )
}
