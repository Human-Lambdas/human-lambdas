import React from 'react'
import styled from '@emotion/styled'
import StandardMenu from 'client/components/StandardMenu'
import useMenu from 'client/hooks/useMenu'
import {MenuPosition} from 'client/hooks/useCoords'
import {ContentBlock} from './NewBlockModal'
import {SmallLabel, StyledButton, StyledIcon} from './BinaryMenu'
import {IBlock} from 'universal/types/generic'

interface SequenceSelectionOptionsMenuProps {
  data: Array<IBlock>
  index: number
  type: string
  seqType: string
  seqIdx: number
  optIdx: number
  setFieldValue: any
}

const FieldWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '100px 1fr 10px',
  marginBottom: 2.5,
  marginTop: 2.5,
  alignItems: 'center'
})

const SequenceSelectionOptionsMenu = (props: SequenceSelectionOptionsMenuProps) => {
  const {data, index, type, seqType, seqIdx, optIdx, setFieldValue} = props
  const {togglePortal, originRef, menuPortal, menuProps} = useMenu(MenuPosition.UPPER_LEFT, {
    isDropdown: true,
    parentId: 'portal'
  })
  const selectedOption = data[index][type].data[seqIdx][seqType].options[optIdx]?.id
  const selectedValue = data[index][type].data[seqIdx]?.logic_jump
    ? data[index][type].data[seqIdx].logic_jump[selectedOption]
    : null
  const menuItems = data[index][type].data
    .filter(({id}) => id !== data[index][type].data[seqIdx].id)
    .map(({id, name}) => ({
      label: name,
      onClick: () =>
        setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.${selectedOption}`, id)
    }))
  menuItems.push(
    {
      label: 'Continue to next question',
      onClick: () =>
        setFieldValue(
          `data[${index}][${type}].data[${seqIdx}].logic_jump.${selectedOption}`,
          undefined
        )
    },
    {
      label: 'End',
      onClick: () =>
        setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.${selectedOption}`, null)
    }
  )
  const label =
    selectedValue === null ? 'End' : selectedValue ? selectedValue : 'Continue to next question'
  return (
    <ContentBlock>
      <FieldWrapper>
        <SmallLabel>Jump to</SmallLabel>
        <StyledButton ref={originRef} onClick={togglePortal}>
          <span>{selectedValue || label}</span>
          <StyledIcon>expand_more</StyledIcon>
        </StyledButton>
      </FieldWrapper>
      {menuPortal(<StandardMenu menuProps={menuProps} menuItems={menuItems} />)}
    </ContentBlock>
  )
}

export default SequenceSelectionOptionsMenu
