import React from 'react'
import CodeBox from './CodeBox'
import {IQueue} from 'universal/types/generic'

interface Props {
  orgId: string
  apiKey: string
  queue: IQueue
}

const APITaskCompleted = (props: Props) => {
  const {apiKey, orgId, queue} = props
  const {id: queueId} = queue
  const API_HOST = `${__APP_URL__}/orgs/${orgId}/queues/${queueId}/tasks/completed`

  const codeString = `curl -v ${API_HOST} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Token ${apiKey}"
  `

  return (
    <CodeBox
      isApi
      queue={queue}
      instructions="To fetch all of this queue's completed tasks, run the following POST request"
      codeString={codeString}
    />
  )
}

export default APITaskCompleted
