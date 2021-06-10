import React, {useCallback, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import HumanLambdas from 'components/HumanLambdas'
import NetworkerProvider from 'components/NetworkerProvider'
import ConfirmationModal from 'components/ConfirmationModal'
import useModal from 'hooks/useModal'

interface Props {
  store: any
  persistor: any
}

const Root = (props: Props) => {
  const [message, setMessage] = useState<string>('')
  const [cb, setCb] = useState<any>(undefined)
  const {store, persistor} = props
  const {togglePortal, closePortal, modalPortal} = useModal()

  const userConfirmation = useCallback((message, callback) => {
    setMessage(message)
    setCb(() => () => callback(true))
    togglePortal()
  }, [])

  return (
    <NetworkerProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router getUserConfirmation={userConfirmation}>
            <HumanLambdas />
          </Router>
        </PersistGate>
      </Provider>
      {modalPortal(
        <ConfirmationModal
          label={'Continue'}
          closePortal={closePortal}
          message={message}
          onConfirm={cb}
        />
      )}
    </NetworkerProvider>
  )
}

export default Root
