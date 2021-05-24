/**
 * TODO
 * 1) Create theme from palette
 */
import React, {useState} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {base16AteliersulphurpoolLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {FONT_FAMILY} from 'universal/styles/typography'
import {IQueue} from 'universal/types/generic'
import {CopyToClipboard} from 'react-copy-to-clipboard'

interface Props {
  instructions?: string
  codeString?: string
  apiKey?: string
  orgId?: number
  queue: IQueue
  padding?: number | string
  language: string
  isApi: boolean
}

export const StyledContainer = styled.div(({isApi}) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: 25,
  position: 'relative',
  '> pre': {
    padding: '20px 20px 30px 20px !important',
    borderRadius: 8,
    ...(isApi && {
      '> code > span': {
        color: 'rgb(34, 162, 201) !important'
      }
    })
  }
}))

const StyledText = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 17px;
  right: 12px;
  font-size: 9pt;
  margin: 25px;
  color: #6648ee;
  font-weight: 500;
`

export const Instructions = styled.div({
  marginBottom: 25,
  lineHeight: 1.4,
  color: PALETTE.TEXT_DARK_GRAY,
  fontSize: 15,
  textAlign: 'left'
})

export const style = {
  fontFamily: FONT_FAMILY.MONOSPACE,
  fontSize: 13
}

const APITaskUpload = (props: Props) => {
  const {instructions, codeString, padding, language, isApi} = props
  const [buttonText, setButtonText] = useState('Copy to clipboard')

  return (
    <StyledContainer isApi={isApi}>
      <Instructions>{instructions}</Instructions>
      <SyntaxHighlighter
        language={language}
        style={base16AteliersulphurpoolLight}
        codeTagProps={{style}}
        wrapLines={true}
        customStyle={{padding: padding || '20px'}}
      >
        {codeString}
      </SyntaxHighlighter>
      <CopyToClipboard
        text={codeString}
        onCopy={() => {
          setButtonText('Copied')
        }}
      >
        <StyledText>{buttonText}</StyledText>
      </CopyToClipboard>
    </StyledContainer>
  )
}

APITaskUpload.defaultProps = {
  language: 'bash'
}

export default APITaskUpload
