import React, {useCallback, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import TextArea from 'client/components/TextArea'
import {PALETTE} from 'universal/styles/palette'
import csv from 'csvtojson'

const Label = styled.label(() => ({
  color: PALETTE.TEXT_GRAY,
  background: '#fff',
  cursor: 'text',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: 12,
  position: 'relative',
  transition: '.3s ease all',
  width: '100%',
  marginTop: '5px'
}))

interface Props {
  label?: string
  setCanImport?: any
  setOptions?: any
  initialValue: string
}

const CSVInput = ({label, setCanImport, setOptions, initialValue}: Props) => {
  const [text, setText] = useState(initialValue)
  const [error, setError] = useState(false)

  const setCsvRow = (value) => {
    csv({
      noheader: true,
      output: 'csv',
      ignoreEmpty: true
    })
      .fromString(value)
      .then((csvRow) => {
        const hasInvalidValues = csvRow.length > 1
        if (hasInvalidValues) {
          setCanImport(false)
          setError(true)
        } else {
          setError(false)
          setCanImport(true)
          setOptions(csvRow[0])
        }
      })
  }

  useEffect(() => {
    setCsvRow(text)
  }, [text])

  const handleChange = useCallback(
    (e) => {
      const {value} = e.target
      setText(value)
      setCsvRow(value)
    },
    [text]
  )
  return (
    <>
      <TextArea minRows={3} maxRows={9} onChange={handleChange} error={error} value={text} />
      {label && <Label>{label}</Label>}
    </>
  )
}

CSVInput.defaultProps = {
  options: []
}

export default CSVInput
