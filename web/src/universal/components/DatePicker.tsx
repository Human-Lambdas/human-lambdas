import React, {memo} from 'react'
import styled from '@emotion/styled'
import {useField} from 'formik'
import {isValid} from 'date-fns'
import DatePicker, {ReactDatePickerProps} from 'react-datepicker'
import InputField from 'universal/components/InputField'
import BodyContainer from './blocks/BodyContainer'
import {getDisplayFormat} from 'client/utils/dateHelpers'

import 'react-datepicker/dist/react-datepicker.css'
import 'universal/styles/css/datepicker-override.css'

interface DatePickerProps {
  isRequired?: boolean
  label?: string
  name: string
  placeholder?: string | any
  value: string | any
  style?: object
  error?: string | undefined
  disabled?: boolean
  readOnly?: boolean | any
  setFieldValue?: any
  isTaskMenu?: boolean
}

const StyledDatePicker = styled(DatePicker)`
  height: 100%;
  font-family: inherit !important;
`

const DateInput = React.forwardRef((props: any, ref: any) => {
  return <InputField hideErrorMessage={true} ref={ref} {...props} />
})

const CustomDatePicker = memo((props: DatePickerProps) => {
  const {name, placeholder, readOnly, value, isTaskMenu, error} = props
  const [, , {setValue}] = useField(name)

  const containerStyle = {
    width: '100%',
    ...(isTaskMenu && {padding: '0px'})
  }

  const handleChangeRaw = (event): void => {
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/
    if (!validChars.test(event.target.value)) {
      event.preventDefault()
    }

    if (isValid(new Date(value))) {
      setValue(value)
    }
  }

  const handleChange: ReactDatePickerProps['onChange'] = (date) => {
    if (date && isValid(date)) {
      setValue(date)
    } else {
      setValue('')
    }
  }

  return (
    <BodyContainer style={containerStyle}>
      <StyledDatePicker
        name={name}
        autoComplete='off'
        customInput={<DateInput error={error} />}
        selected={value && new Date(value)}
        onChange={handleChange}
        calendarClassName='hl-calendar'
        dayClassName={() => 'hl-day'}
        shouldCloseOnSelect={false}
        onChangeRaw={handleChangeRaw}
        placeholderText={getDisplayFormat(placeholder)}
        dateFormat='dd/MM/yyyy'
        disabled={readOnly}
        disabledKeyboardNavigation
      />
    </BodyContainer>
  )
})

export default CustomDatePicker
