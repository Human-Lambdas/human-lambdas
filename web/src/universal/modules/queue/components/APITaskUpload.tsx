import React from 'react'
import styled from '@emotion/styled'
import {PALETTE} from 'universal/styles/palette'
import {FONT_FAMILY} from 'universal/styles/typography'
import {IQueue} from 'universal/types/generic'
import CodeBox from './CodeBox'
import {BLOCK_TYPE} from 'universal/utils/constants'

interface Props {
  orgId: string
  queueId: string
  queue: IQueue
  apiKey: string
}

export const StyledContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: 25,
  '> pre': {
    borderRadius: 8
  }
})

export const Instructions = styled.div({
  marginBottom: 25,
  lineHeight: 1.4,
  color: PALETTE.TEXT_GRAY,
  fontSize: 15,
  textAlign: 'left'
})

export const customStyle = {
  fontFamily: FONT_FAMILY.MONOSPACE,
  fontSize: 13,
  whiteSpace: 'pre-wrap'
}

const sampleValues = {
  text: `"This is some random text"`,
  image: `"https://example.com/random-picture.jpg"`,
  audio: `"https://example.com/random-song.mp3"`,
  video: `"https://example.com/random-video.mp4"`,
  email: `"alice@example.com"`,
  link: `"https://example.com"`,
  number: 42,
  date: `"MM/DD/YYYY"`,
  binary: `true`,
  single_selection: `"<id-1>"`,
  multiple_selection: `[<id-1>, <id-2>]`,
  form_sequence: `{<q1-id>: <q1-value>, <q2-id>: <q2-value>}`,
  embed: `"https://example.com"`,
  pdf: `"https://example.com/file.pdf"`,
  bounding_boxes: `"https://example.com/random-picture.jpg"`,
  named_entity_recognition: `{"text": "This is some random text", "entities": []}`,
  rich_text: `"Tell a story"`,
  text_sequence: ['foo', 'bar']
}

function generateValue(input, spaces) {
  const type = input.type
  let value
  switch (type) {
    case BLOCK_TYPE.NUMBER:
      value = input[type]?.placeholder
      break
    case BLOCK_TYPE.SINGLE_SELECTION:
      value = `"${input[type]?.options[0]['id']}"`
      break
    case BLOCK_TYPE.MULTIPLE_SELECTION:
      value = `["${input[type]?.options[0]['id']}"]`
      break
    case BLOCK_TYPE.FORM_SEQUENCE:
      let sequence_data = '{\n'
      let EOL = ',\n'
      const inputs = input[type].data
      for (let i = 0; i < inputs.length; i++) {
        const el = inputs[i]
        EOL = i < inputs.length - 1 ? EOL : '\n'
        sequence_data = sequence_data + generateRow(el, spaces + '  ') + EOL
      }
      value = sequence_data + spaces + '}'
      break
    case BLOCK_TYPE.NAMED_ENTITY_RECOGNITION:
      const ner_text_value =
        input[type]?.placeholder && input[type]?.placeholder.length > 0
          ? input[type].placeholder
          : 'This is some random text'
      value = `{"text": ${JSON.stringify(ner_text_value)}, "entities": []}`
      break
    case BLOCK_TYPE.BOUNDING_BOXES:
      const bb_text_value =
        input[type]?.placeholder && input[type]?.placeholder.length > 0
          ? input[type].placeholder
          : sampleValues.bounding_boxes
      value = `{"value": {"image": ${bb_text_value}}, "objects": []}`
      break
    case BLOCK_TYPE.TEXT_SEQUENCE:
      value =
        input[type]?.placeholder.length > 0
          ? JSON.stringify(input[type]?.placeholder)
          : JSON.stringify(sampleValues[type])
      break
    default:
      value = input[type]?.placeholder ? JSON.stringify(input[type]?.placeholder) : null
  }
  return value
}

function generateRow(input, spaces) {
  const type = input.type
  const value = generateValue(input, spaces)

  const payloadSampleText = `${value || sampleValues[type]}`

  return `${spaces}"${input.id}": ${payloadSampleText}`
}

function generateDataSample(inputs) {
  let payloadString = ''
  let EOL = ',\n'

  for (let i = 0; i < inputs.length; i++) {
    EOL = i < inputs.length - 1 ? EOL : ''
    payloadString = payloadString + generateRow(inputs[i], '      ') + EOL
  }
  return payloadString
}

const APITaskUpload = (props: Props) => {
  const {apiKey, orgId, queueId, queue} = props
  const {data = []} = queue

  const API_HOST = `${__APP_URL__}/orgs/${orgId}/queues/${queueId}/tasks/create`
  const dataObj = generateDataSample(data)

  const codeString = `curl -v ${API_HOST} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Token ${apiKey}" \\
  -d '{"data":
    {
${[dataObj]}
    }
  }'
`

  return (
    <CodeBox
      isApi
      queue={queue}
      codeString={codeString}
      instructions={`
        To enable workers to work tasks on this queue you will need to add some tasks. The
        fastest way to add tasks is by utilizing the Human Lambdas API. To create your first task
        run the following POST request:
        `}
    />
  )
}

export default APITaskUpload
