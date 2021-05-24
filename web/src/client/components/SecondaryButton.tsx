import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from './PlainButton'
import {PALETTE} from 'styles/palette'

const SecondaryButton = styled(PlainButton)((props: PlainButtonProps) => {
  const {disabled, waiting} = props
  const isDisabled = disabled || waiting
  return {
    disabled: isDisabled,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    borderRadius: 4,
    color: PALETTE.TEXT_MAIN,
    fontSize: 15,
    outline: 0,
    // backgroundColor: PALETTE.BACKGROUND_MAIN,
    backgroundColor: '#dfe1e6',
    paddingBottom: 2,
    borderBottom: '2px solid #c8cacf',
    ':active': {
      borderBottom: 0
    }
  }
})

export default SecondaryButton
