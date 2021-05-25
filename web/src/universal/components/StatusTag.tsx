import React from 'react'
import styled from '@emotion/styled'
import {STATUS_PALETTE} from 'universal/styles/palette'
import {QUEUE_STATUS} from 'universal/utils/constants'
import getQueueStatus from 'universal/utils/getQueueStatus'

interface IProps {
  status: string
  centered?: boolean
}

const StatusTag = ({status, centered}: IProps) => {
  let backgroundColor

  switch (status) {
    case QUEUE_STATUS.OPEN:
      backgroundColor = STATUS_PALETTE.OPEN
      break
    case QUEUE_STATUS.IN_PROGRESS:
      backgroundColor = STATUS_PALETTE.IN_PROGRESS
      break
    case QUEUE_STATUS.NEW:
      backgroundColor = STATUS_PALETTE.NEW
      break
    case QUEUE_STATUS.COMPLETED:
      backgroundColor = STATUS_PALETTE.COMPLETED
      break
    default:
      backgroundColor = STATUS_PALETTE.IN_PROGRESS
  }

  const Tag = styled.div({
    padding: '5px 15px',
    borderRadius: 5,
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#fff',
    userSelect: 'none',
    backgroundColor,
    ...(centered && {margin: '0px auto'})
  })

  return <Tag>{getQueueStatus(status)}</Tag>
}

export default StatusTag
