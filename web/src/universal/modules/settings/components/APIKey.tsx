import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {PALETTE} from 'universal/styles/palette'
import InputField from 'universal/components/InputField'
import PageWrapper from './PageWrapper'
import Title from './Title'
import CopyFieldLine from './CopyFieldLine'
import Icon from 'universal/components/Icon'
import IconButton from 'universal/components/IconButton'

interface Token {
  token: string
}

interface Props {
  apiKey: Token
}

const Text = styled.div({
  color: PALETTE.TEXT_GRAY,
  fontSize: 15,
  fontWeight: 400,
  marginBottom: 15
})

const Note = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontSize: 13,
  fontWeight: 400,
  marginBottom: 5
})

const APIKey = ({apiKey}: Props) => {
  const [copied, setCopied] = useState<boolean>(false)
  const handleKeyCopy = useCallback(() => {
    setInterval(() => {
      setCopied(false)
    }, 1000)
    setCopied(true)
  }, [copied, apiKey])

  return (
    <PageWrapper>
      <Title>API</Title>
      <Text>
        Human Lambdas provides an easy to use API interface to create and access your organization’s
        tasks.
      </Text>
      <Text>Your secret API key is:</Text>
      <Note>Remember, this key is secret and should be kept hidden from public view.</Note>
      <CopyFieldLine>
        <InputField
          onChange={() => null}
          disabled={true}
          value={apiKey.token || ''}
          spellCheck={false}
          type='text'
        />
        <CopyToClipboard
          text={apiKey.token || ''}
          onCopy={() => handleKeyCopy()}
          style={{position: 'relative', top: 0, right: 30}}
        >
          <IconButton type='button' onClick={() => null}>
            <Icon
              style={{
                fontSize: 15,
                color: copied ? PALETTE.PRIMARY_GREEN : PALETTE.TEXT_DARK_GRAY
              }}
            >
              content_copy
            </Icon>
          </IconButton>
        </CopyToClipboard>
      </CopyFieldLine>
    </PageWrapper>
  )
}

export default APIKey
