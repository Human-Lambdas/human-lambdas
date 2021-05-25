import styled from '@emotion/styled'
import {PALETTE} from 'styles/palette'

const ChartContainer = styled.div({
  padding: '0 15px 25px',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  borderRadius: 8,
  textAlign: 'center',
  boxShadow: '0 2px 0 0 rgba(0,0,0,.03)',
  marginBottom: 100
})

export default ChartContainer
