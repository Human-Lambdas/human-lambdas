import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'

const Instructions = styled.div({
  marginBottom: 25,
  lineHeight: 1.4,
  color: PALETTE.TEXT_DARK_GRAY,
  fontSize: 15,
  textAlign: 'left',
  '> p': {
    paddingTop: 10
  },
  '> p > a': {
    color: PALETTE.PRIMARY_MAIN
  }
})

export default Instructions
