import React, {ReactElement} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

interface Props {
  leftBarItems?: ReactElement[]
  rightBarItems?: ReactElement[]
  midBarItems?: ReactElement[]
}

const TopbarContainer = styled.header({
  width: '100%',
  position: 'relative',
  background: '#fff',
  minHeight: 45,
  display: 'flex',
  borderBottom: `1px solid ${PALETTE.BORDER_GRAY}`
})

const Topbar = styled.div({
  width: '100%',
  padding: '0 35px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const ActionBar = styled.div<any>(({barLength}) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${barLength}, auto)`,
  justifyContent: 'center',
  alignItems: 'center'
}))

const AppTopbar = (props: Props) => {
  const {leftBarItems = [], rightBarItems = [], midBarItems = []} = props
  return (
    <TopbarContainer>
      <Topbar>
        <ActionBar barLength={leftBarItems.length || 0}>
          {leftBarItems.map((el, idx) => (
            <React.Fragment key={idx}>{el}</React.Fragment>
          ))}
        </ActionBar>
        <ActionBar barLength={midBarItems.length || 0}>
          {midBarItems.map((el, idx) => (
            <React.Fragment key={idx}>{el}</React.Fragment>
          ))}
        </ActionBar>
        <ActionBar barLength={rightBarItems.length || 0}>
          {rightBarItems.map((el, idx) => (
            <React.Fragment key={idx}>{el}</React.Fragment>
          ))}
        </ActionBar>
      </Topbar>
    </TopbarContainer>
  )
}

export default AppTopbar
