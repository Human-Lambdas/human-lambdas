import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from '../../client/components/PlainButton'
import {PALETTE} from 'universal/styles/palette'

const SecondaryButton = styled(PlainButton)((props: PlainButtonProps) => {
  const {disabled, waiting, hideFocus} = props
  const isDisabled = disabled || waiting
  return {
    disabled: isDisabled,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    width: 'fit-content',
    backgroundColor: 'white',
    color: `${PALETTE.PRIMARY_MAIN}`,
    border: `1px solid ${PALETTE.PRIMARY_MAIN}`,
    fontSize: '14px',
    fontWeight: 500,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    outline: 0,
    transition: 'all 0.25s ease-in-out',
    padding: '0 10px',
    ':hover': {
      backgroundColor: PALETTE.BACKGROUND_HOVER_LIGHT,
      border: `1px solid ${PALETTE.PRIMARY_MAIN_DARK}`,
      color: PALETTE.PRIMARY_MAIN_DARK
    },
    ...(!hideFocus && {
      ':focus, :active': {
        backgroundColor: PALETTE.BACKGROUND_HOVER_LIGHT,
        border: `1px solid ${PALETTE.PRIMARY_MAIN_DARK}`,
        color: PALETTE.PRIMARY_MAIN_DARK
      }
    })
  }
})

export default SecondaryButton
