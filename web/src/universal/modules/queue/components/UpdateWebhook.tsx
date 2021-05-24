import React, {useState} from 'react'
import useNetworker from 'client/hooks/useNetworker'
import styled from '@emotion/styled'
import ActionButton from 'client/components/ActionButton'
import {AxiosRequestConfig} from 'axios'
import {Instructions} from './APITaskUpload'
import {IQueue} from 'universal/types/generic'
import InputField from 'client/components/InputField'
import {
  addFailureNotification,
  addSuccessNotification
} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import {connect} from 'react-redux'

interface Props {
  orgId: number
  queue: IQueue
  addFailureNotification: () => void
  addSuccessNotification: () => void
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  alignItems: 'center',
  paddingTop: 96
})

const Form = styled.div({
  display: 'flex',
  width: 700
})

const Text = styled(Instructions)({
  width: '100%',
  textAlign: 'center'
})

const DownloadButton = styled(ActionButton)({
  width: 96,
  height: 32,
  marginLeft: 8
})

const UpdateWebhook = (props: Props) => {
  const {orgId, queue} = props
  const [newWebhook, setNewWebhook] = useState(
    queue.webhook !== undefined && queue.webhook.target !== undefined
      ? queue.webhook.target
      : ''
  )
  const networker = useNetworker()

  const onChange = (e) => {
    setNewWebhook(e.target.value)
  }

  const handleSubmit = async () => {
    const reqBody = {
      method: 'PATCH',
      data: {target: newWebhook}
    } as AxiosRequestConfig

    const response = await networker.httpHandler(
      `/orgs/${orgId}/queues/${queue.id}/webhook`,
      reqBody
    )

    if (response.errors) {
      response.errors.forEach((e) => {
        props.addFailureNotification(e.message)
      })
    } else {
      props.addSuccessNotification('Webhook URL successfully updated!')
    }
  }

  return (
    <Container>
      <Text>Update this queue's webhook URL</Text>
      <Form>
        <InputField onChange={onChange} placeholder={'New Webhook URL'} value={newWebhook} />
        <DownloadButton
          onClick={() => {
            handleSubmit()
          }}
        >
          Submit
        </DownloadButton>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(UpdateWebhook)
