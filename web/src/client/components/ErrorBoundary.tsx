import * as Sentry from '@sentry/browser'
import React, {ErrorInfo, ReactNode, Component} from 'react'
import ErrorComponent from './ErrorComponent'

interface Props {
  children: ReactNode
}

interface State {
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: undefined,
    errorInfo: undefined
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error, errorInfo})
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key])
      })
      scope.setLevel(Sentry.Severity.Fatal)
      Sentry.captureException(error)
    })
  }
  render() {
    const {error} = this.state
    const {children} = this.props

    if (error)
      return (
        <ErrorComponent
          error={error}
          title={'Something went wrong!'}
          message={'We‘ve alerted the engineers. Try reloading the page.'}
        />
      )
    // If no errors render children
    return children
  }
}

export default ErrorBoundary
