import React from 'react'
import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from 'components/PlainButton'
import {PALETTE} from 'styles/palette'
import {ICON_SIZE} from 'styles/typography'
import Icon from 'universal/components/Icon'

interface Props {
  icon: string
  onClick?: any
  type?: string | undefined
}

const BtnWrapper = styled(PlainButton)<PlainButtonProps>({
  color: PALETTE.TEXT_GRAY,
  fontSize: 18,
  height: 30,
  width: 30,
  borderRadius: 100,
  border: `1px solid ${PALETTE.TEXT_GRAY}`,
  padding: '0 5px',
  transition: 'all 0.25s ease-in-out',
  ':hover': {
    border: `1px solid ${PALETTE.TEXT_MAIN}`,
    color: PALETTE.TEXT_MAIN
  }
})

const StyledIcon = styled(Icon)({
  fontSize: ICON_SIZE.MD18,
  color: 'inherit'
})

const IconButton = ({icon, onClick, type}: Props) => {
  return (
    <BtnWrapper onClick={onClick} type={type}>
      <StyledIcon>{icon}</StyledIcon>
    </BtnWrapper>
  )
}

export default IconButton
