import React, {memo, ReactElement} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

interface Props {
  itemList: ReactElement[]
}

const List = styled.div({
  boxSizing: 'border-box',
  borderBottom: `1px solid ${PALETTE.BORDER_GRAY}`,
  borderLeft: '2px solid transparent',
  paddingLeft: 35,
  ':hover': {
    backgroundColor: PALETTE.BACKGROUND_MAIN,
    borderLeft: `2px solid ${PALETTE.PRIMARY_MAIN}`
  }
})

const ListPageContent = memo(
  (props): Props => {
    const {itemList = []} = props
    return (
      <>
        {itemList.map((el, i) => (
          <List key={i}>{el}</List>
        ))}
      </>
    )
  }
)

export default ListPageContent
