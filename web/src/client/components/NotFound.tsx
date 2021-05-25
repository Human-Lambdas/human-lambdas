import * as React from 'react'
import ErrorComponent from './ErrorComponent'

const NotFound = () => (
  <ErrorComponent
    title={'404.'}
    message={'This page might have been removed, or is temporarily unavailable.'}
  />
)

export default NotFound
