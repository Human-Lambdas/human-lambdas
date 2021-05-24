import styled from '@emotion/styled'
import {ICON_SIZE} from '../styles/typography'

const Icon = styled.i({
  fontFamily: 'Material Icons',
  fontWeight: 'normal',
  fontStyle: 'normal',
  // Default icon size (24px)
  fontSize: ICON_SIZE.MD24,
  display: 'inline-block',
  lineHeight: 1,
  textTransform: 'none',
  letterSpacing: 'normal',
  wordWrap: 'normal',
  whiteSpace: 'nowrap',
  direction: 'ltr',
  // Support for all WebKit browsers
  WebkitFontSmoothing: 'antialiased',
  // Support for Safari and Chrome
  textRendering: 'optimizeLegibility',
  // Support for Firefox
  mozOsxFontSmoothing: 'grayscale',
  // Support for IE
  fontFeatureSettings: 'liga'
})

export default Icon
