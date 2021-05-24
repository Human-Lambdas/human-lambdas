import React from 'react'
import styled from '@emotion/styled'
import {matchSorter} from 'match-sorter'
import InputField from './InputField'

interface Props {
  autoComplete?: string
  autoFocus?: boolean
  disabled?: boolean
  isOptional?: boolean
  isRequired?: boolean
  label?: string
  name?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value?: string
  error?: string | false | undefined
  style?: object
  spellCheck?: boolean
}

const Wrapper = styled.div`
  margin: 10px 0px;
`

const ListFilter = ({list, setList, keys}) => {
  const handleChange = (e) => {
    const term = e.target.value
    setList(matchSorter(list, term, {keys}))
  }
  return (
    <Wrapper>
      <InputField placeholder='Filter' onChange={handleChange} />
    </Wrapper>
  )
}

export default ListFilter
