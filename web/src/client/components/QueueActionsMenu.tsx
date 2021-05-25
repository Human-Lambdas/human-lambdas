import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'
import Menu from './Menu'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'
import {PALETTE} from 'styles/palette'
import Icon from 'universal/components/Icon'
import useRouter from 'hooks/useRouter'
import {IQueue} from 'client/types/generic'

interface Props {
  queueId: string
  menuProps: MenuProps
  onDelete: () => void
  selectedQueue: IQueue
  onFlush: () => void
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
  padding: '5px 15px',
  color: PALETTE.TEXT_MAIN
})

const QueueActionsMenu = (props: Props) => {
  const {menuProps, queueId, onDelete, onFlush, selectedQueue} = props
  const {history} = useRouter() as any
  return (
    <MenuContainer>
      <Menu ariaLabel={'Add queue tasks'} {...menuProps}>
        <MenuItem
          label={
            <Label>
              <StyledIcon>edit</StyledIcon>
              <span>Edit queue</span>
            </Label>
          }
          onClick={() =>
            history.push({
              pathname: `/queues/${queueId}/edit`,
              state: {prevRoute: history.location.pathname}
            })
          }
        />
        <MenuItem
          label={
            <Label>
              <StyledIcon>content_copy</StyledIcon>
              <span>Clone queue</span>
            </Label>
          }
          onClick={() =>
            history.push({
              pathname: '/queues/new',
              state: {
                hasClone: true,
                clonedQueue: {
                  data: selectedQueue.data,
                  name: `${selectedQueue.name} Copy`,
                  id: selectedQueue.id
                }
              }
            })
          }
        />
        <MenuItem
          label={
            <Label>
              <StyledIcon>undo</StyledIcon>
              <span>Delete all tasks</span>
            </Label>
          }
          onClick={onFlush}
        />
        <MenuItem
          label={
            <Label>
              <StyledIcon>delete</StyledIcon>
              <span>Delete queue</span>
            </Label>
          }
          onClick={onDelete}
        />
      </Menu>
    </MenuContainer>
  )
}

const mapStateToProps = (state: any) => ({
  selectedQueue: state.queues.selectedQueue
})

export default connect(mapStateToProps, null)(QueueActionsMenu)
