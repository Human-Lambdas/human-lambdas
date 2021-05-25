import React from 'react'
import styled from '@emotion/styled'
import StandardMenu from 'client/components/StandardMenu'
import useMenu from 'client/hooks/useMenu'
import {MenuPosition} from 'client/hooks/useCoords'
import {IBlock} from 'universal/types/generic'
import {PALETTE} from 'universal/styles/palette'
import PlainButton from 'client/components/PlainButton'
import Icon from 'universal/components/Icon'

interface BinaryMenuProps {
  data: Array<IBlock>
  index: number
  type: string
  seqIdx: number
  setFieldValue: any
}

export const SmallLabel = styled.b({
  fontSize: 10,
  color: PALETTE.TEXT_MAIN
})

const FieldWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '100px 1fr 10px',
  marginBottom: 2.5,
  marginTop: 2.5,
  alignItems: 'center'
})

export const StyledButton = styled(PlainButton)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: 13,
  fontWeight: 400,
  border: `1px solid ${PALETTE.BORDER_GRAY_NEW}`
})

export const StyledIcon = styled(Icon)({
  color: PALETTE.BORDER_GRAY_NEW
})

const BinaryMenu = (props: BinaryMenuProps) => {
  const {data, index, type, seqIdx, setFieldValue} = props
  const {
    togglePortal: togglePortalYes,
    originRef: originRefYes,
    menuPortal: menuPortalYes,
    menuProps: menuPropsYes
  } = useMenu(MenuPosition.UPPER_LEFT, {
    isDropdown: true,
    parentId: 'portal'
  })
  const {
    togglePortal: togglePortalNo,
    originRef: originRefNo,
    menuPortal: menuPortalNo,
    menuProps: menuPropsNo
  } = useMenu(MenuPosition.UPPER_LEFT, {
    isDropdown: true,
    parentId: 'portal'
  })
  const menuItemsTrue = data[index][type].data
    .filter(({id, name}) => id !== data[index][type].data[seqIdx].id && id !== '' && name !== '')
    .map(({id, name}) => ({
      label: name,
      onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.true`, id)
    }))
  menuItemsTrue.push(
    {
      label: 'Continue to next question',
      onClick: () =>
        setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.true`, undefined)
    },
    {
      label: 'End',
      onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.true`, null)
    }
  )
  const menuItemsFalse = data[index][type].data
    .filter(({id, name}) => id !== data[index][type].data[seqIdx].id && id !== '' && name !== '')
    .map(({id, name}) => ({
      label: name,
      onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.false`, id)
    }))
  menuItemsFalse.push(
    {
      label: 'Continue to next question',
      onClick: () =>
        setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.false`, undefined)
    },
    {
      label: 'End',
      onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.false`, null)
    }
  )

  const trueValue = data[index][type].data[seqIdx]?.logic_jump?.true
  const falseValue = data[index][type].data[seqIdx]?.logic_jump?.false
  const trueLabel = trueValue === null ? 'End' : trueValue ? trueValue : 'Continue to next question'
  const falseLabel =
    falseValue === null ? 'End' : falseValue ? falseValue : 'Continue to next question'
  return (
    <>
      <FieldWrapper>
        <SmallLabel>If YES</SmallLabel>
        <StyledButton ref={originRefYes} onClick={togglePortalYes}>
          <span>{trueLabel}</span>
          <StyledIcon>expand_more</StyledIcon>
        </StyledButton>
      </FieldWrapper>
      <FieldWrapper>
        <SmallLabel>If NO</SmallLabel>
        <StyledButton ref={originRefNo} onClick={togglePortalNo}>
          <span>{falseLabel}</span>
          <StyledIcon>expand_more</StyledIcon>
        </StyledButton>
      </FieldWrapper>
      {menuPortalYes(<StandardMenu menuProps={menuPropsYes} menuItems={menuItemsTrue} />)}
      {menuPortalNo(<StandardMenu menuProps={menuPropsNo} menuItems={menuItemsFalse} />)}
    </>
  )
}

export default BinaryMenu
