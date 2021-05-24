import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import {addFailureNotification} from 'client/modules/notificationSystem/ducks/notificationSystemDuck'
import textOverflow from 'universal/styles/helpers/textOverflow'
import useNetworker from 'client/hooks/useNetworker'
import Checkbox from 'universal/components/Checkbox'
import {connect} from 'react-redux'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'

interface IQueueNotification {
  enabled: boolean
  queue_id: number
  queue_name: string
}

interface INotificationData {
  enabled: boolean
  queue_notifications: IQueueNotification[]
}

interface IProps {
  addFailureNotification: (arg: string) => void
}

const Subtitle = styled.div({
  color: PALETTE.TEXT_GRAY,
  fontSize: 15,
  fontWeight: 400,
  marginBottom: 35
})

const NotificationRow = styled.div({
  marginBottom: 4,
  display: 'flex',
  justifyContent: 'space-between',
  height: 46,
  fontSize: 16
})

const NotificationHeaderRow = styled.div({
  marginBottom: 24,
  display: 'flex',
  justifyContent: 'space-between',
  height: 46,
  fontSize: 16,
  width: '100%'
})

const QueueName = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  ...textOverflow
})

const CheckboxContainer = styled.div({
  alignItems: 'center',
  display: 'flex'
})

const NotificationsContainer = (props: IProps) => {
  const [notificationData, setNotificationData] = useState({} as INotificationData)
  const networker = useNetworker()

  useEffect(() => {
    async function fetchNotificationData() {
      const payload = {
        method: 'GET'
      }
      const res = await networker.httpHandler(`/users/notifications`, payload)
      const {errors, data} = res || {}
      if (errors) {
        console.error('Error fetching notification data!', JSON.stringify(errors))
      } else {
        setNotificationData(data)
      }
    }

    fetchNotificationData()
  }, [])

  async function updateBE(notificationInfo) {
    const payload = {
      method: 'PATCH',
      data: notificationInfo
    }
    const res = await networker.httpHandler(`/users/notifications`, payload)
    if (res.errors) {
      res.errors.array.forEach((error) => {
        props.addFailureNotification(error.message)
      })
    }
  }

  return (
    <PageWrapper>
      <Title>Notifications</Title>
      <Subtitle>Email me every time a new task is created.</Subtitle>
      <NotificationHeaderRow>
        <QueueName>All queues</QueueName>
        <CheckboxContainer>
          <Checkbox
            onChange={() => {
              updateBE({
                enabled: !notificationData.enabled,
                queue_notifications: notificationData.queue_notifications
              })

              setNotificationData({
                enabled: !notificationData.enabled,
                queue_notifications: notificationData.queue_notifications
              })
            }}
            id='globalNotifications'
            name='globalNotifications'
            label=''
            checked={notificationData.enabled !== undefined && notificationData.enabled}
            value={'globalNotifications'}
          />
        </CheckboxContainer>
      </NotificationHeaderRow>
      {notificationData.queue_notifications && !notificationData.enabled && (
        <div>
          {notificationData.queue_notifications.map((notification) => {
            return (
              <NotificationRow key={notification.queue_id}>
                <QueueName>{notification.queue_name}</QueueName>
                <CheckboxContainer>
                  <Checkbox
                    onChange={() => {
                      let newNotificationDataArray = [...notificationData.queue_notifications]

                      newNotificationDataArray[
                        newNotificationDataArray.findIndex(
                          (element) => element.queue_id === notification.queue_id
                        )
                      ].enabled = !notification.enabled

                      updateBE({
                        enabled: notificationData.enabled,
                        queue_notifications: newNotificationDataArray
                      })

                      setNotificationData({
                        enabled: notificationData.enabled,
                        queue_notifications: newNotificationDataArray
                      })
                    }}
                    id={notification.queue_id}
                    name={notification.queue_name}
                    label=''
                    checked={notification.enabled}
                    value={notification.queue_name}
                  />
                </CheckboxContainer>
              </NotificationRow>
            )
          })}
        </div>
      )}
    </PageWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(NotificationsContainer)
