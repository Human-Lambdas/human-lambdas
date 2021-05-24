import {PALETTE} from '../palette'
import {FONT_FAMILY} from '../typography'
import fontLoader from './fontLoader'

const fontFaceDefinitions = fontLoader
  .map(
    (fontFace) => `
    @font-face {
      font-family: "${fontFace.fontFamily}";
      src: ${fontFace.src};
      font-style: ${fontFace.fontStyle};
      font-weight: ${fontFace.fontWeight};
      font-stretch: ${fontFace.fontStretch};
      font-display: ${fontFace.fontDisplay};
    }
  `
  )
  .join('\n')

export default `
  html {
    overflow: hidden;
    height: 100%;
    font-size: 15px;
  }

  body {
    color: ${PALETTE.TEXT_MAIN};
    font-family: ${FONT_FAMILY.SANS_SERIF};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "calt", "tnum", "case" 0, "ss01" 1;
    font-kerning: normal;
    text-rendering: geometricprecision;
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    padding: 0;
    overflow: auto;
    height: 100%;
  }

  :root {
    --plyr-color-main: ${PALETTE.PRIMARY_MAIN};
    --plyr-control-spacing: 9px;
  }

  .plyr-holder {
    height: 100%;
  }

  #root {
    margin: 0;
    height: 100vh;
    padding: 0;
    width: 100%;
    background: ${PALETTE.BACKGROUND_MAIN};
  }

  a {
    color: ${PALETTE.TEXT_MAIN};
    text-decoration: none;
  }

  a:hover; a:focus {
    color: ${PALETTE.PRIMARY_MAIN};
    text-decoration: none;
  }

  input {
    font-family: ${FONT_FAMILY.SANS_SERIF};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  textarea {
    font-family: ${FONT_FAMILY.SANS_SERIF};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  *::before, *::after {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  p {
    margin: 0;
  }

  ::placeholder {
    color: ${PALETTE.PLACEHOLDER};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${PALETTE.PLACEHOLDER};
  }

  ::-ms-input-placeholder {
    color: ${PALETTE.PLACEHOLDER};
  }

  ::-webkit-input-placeholder {
    color: ${PALETTE.PLACEHOLDER};
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color:  ${PALETTE.PLACEHOLDER};
  }

  :-moz-placeholder { /* Firefox 18- */
    color: ${PALETTE.PLACEHOLDER};
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  ${fontFaceDefinitions}
`
