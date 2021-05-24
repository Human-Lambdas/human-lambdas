import React from 'react'
import styled from '@emotion/styled'

interface Props {
  color: string
  text: string
}

const Label = (props: Props) => {
  const {text, color} = props
  const LabelContainer = styled.div({
    backgroundColor: color,
    borderRadius: '5px',
    color: 'white',
    padding: '4px 10px',
    width: 92,
    textAlign: 'center',
    fontSize: '10px',
    height: 20,
    fontWeight: 'bold'
  })
  return <LabelContainer>{text.toUpperCase()}</LabelContainer>
}

export default Label
