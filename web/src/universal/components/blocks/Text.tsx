import React, {useCallback} from 'react'
import styled from '@emotion/styled'
import Linkify from 'react-linkify'
import {IBlock, IQueue} from 'universal/types/generic'
import BasicTextArea from 'universal/components/BasicTextArea'
import BlockHeader from 'universal/components/BlockHeader'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Content from './Content'
import {PALETTE} from 'universal/styles/palette'
import {BLOCK_TYPE} from 'universal/utils/constants'

interface TextProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  index?: number
  onEdit?: () => void
  isAudits?: boolean
}

export const StyledText = styled.p({
  fontSize: 16,
  lineHeight: 1.35,
  fontWeight: 400,
  color: PALETTE.TEXT_MAIN,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
  cursor: 'text'
})

export default function Text(props: TextProps) {
  const {isAudits, block, onEdit, onDelete, handleChange, isEditing, index} = props
  const {text, name} = block
  const {placeholder, read_only: readOnly, value = ''} = text || {}
  const renderValue = isEditing ? placeholder : value

  const decorator = useCallback(
    (href, text, key) => {
      return (
        <a
          href={href}
          key={key}
          target='_blank'
          rel='noopener noreferrer'
          style={{color: PALETTE.LINK /* textDecoration: 'underline' */}}
        >
          {text}
        </a>
      )
    },
    [renderValue]
  )

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
        {!readOnly && !isAudits ? (
          <BasicTextArea
            name={`data.${index}.text.value`}
            onChange={handleChange}
            autoFocus={false}
            style={{
              height: '100%'
            }}
            value={renderValue || value}
            readOnly={readOnly}
          />
        ) : (
          <Linkify componentDecorator={decorator}>
            <StyledText>{renderValue}</StyledText>
          </Linkify>
        )}
      </BodyContainer>
    </Content>
  )
}
