import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import Menu from './Menu'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'
import {PALETTE} from 'styles/palette'
import Icon from 'universal/components/Icon'
import {IQueue} from 'client/types/generic'
import {BLOCKS, FILTER_BLOCK_TYPES} from 'universal/utils/constants'

interface Props {
  queue: IQueue
  menuProps: MenuProps
  activeBlockName: string
  setPinnedBlock: () => void
}

const MenuContainer = styled.div({
  width: 200
})

const StyledIcon = styled(Icon)({
  display: 'block',
  color: PALETTE.TEXT_GRAY,
  marginRight: 15,
  fontSize: 18
})

const Label = styled.div({
  display: 'flex',
  flexDirection: 'row',
  fontSize: 15,
  fontWeight: 400,
  padding: '5px 5px',
  color: PALETTE.TEXT_MAIN
})

const LabelText = styled.span({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const QueueFilterColumnMenu = (props: Props) => {
  const {menuProps, queue, setPinnedBlock, activeBlockName} = props

  if (!queue || !Array.isArray(queue.data)) {
    return null
  }

  return (
    <MenuContainer>
      <Menu ariaLabel={'Filter queue tasks'} {...menuProps}>
        {queue.data.map((block, id) => {
          if (!FILTER_BLOCK_TYPES.includes(block.type)) {
            return null
          } else
            return (
              <MenuItem
                key={id}
                isActive={activeBlockName === block.name}
                label={
                  <Label>
                    <StyledIcon>{BLOCKS.find((b) => b.type === block.type)?.icon}</StyledIcon>
                    <LabelText>{block.name}</LabelText>
                  </Label>
                }
                onClick={() => {
                  setPinnedBlock(block.id)
                }}
              />
            )
        })}
        {activeBlockName != '' &&
          activeBlockName != null &&
          activeBlockName != 'ID' &&
          typeof activeBlockName !== 'undefined' && (
            <MenuItem
              extraSpace={true}
              label={
                <Label>
                  <StyledIcon>refresh</StyledIcon>
                  <span>Reset to ID</span>
                </Label>
              }
              onClick={() => {
                setPinnedBlock(null)
              }}
            />
          )}
      </Menu>
    </MenuContainer>
  )
}

const mapStateToProps = (state: any) => ({
  selectedQueue: state.queues.selectedQueue
})

export default connect(mapStateToProps, null)(QueueFilterColumnMenu)
