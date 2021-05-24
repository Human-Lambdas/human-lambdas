import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

const ListTitle = styled.div<{align?: string; padLeft?: number}>(({align, padLeft}) => ({
  paddingLeft: padLeft ? padLeft : 'none',
  display: 'flex',
  justifyContent: align ? align : 'left',
  alignItems: 'center',
  color: PALETTE.TEXT_MAIN,
  fontSize: 15,
  fontWeight: 500,
  userSelect: 'none',
  '&:last-child': {
    borderRight: 0
  }
}))

export default ListTitle
