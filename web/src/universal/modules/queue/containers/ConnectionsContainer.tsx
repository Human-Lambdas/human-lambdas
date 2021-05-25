import React, {useEffect, useCallback, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import * as Sentry from '@sentry/browser'
import papa from 'papaparse'
import Connections from '../components/Connections'
import useNetworker from 'client/hooks/useNetworker'
import useRouter from 'client/hooks/useRouter'
import {IUser} from 'universal/types/generic'

const CSV_ROW_LIMIT = 1000
const CONTACT_EMAIL = 'contact@humanlambdas.com'

interface Props {
  dispatch: any
  user: IUser
}

const ConnectionsContainer = (props: Props) => {
  const {user} = props
  const {current_organization_id: orgId} = user || {}
  const networker = useNetworker()
  const {history} = useRouter() as any
  const {queueId} = useParams()
  const [queue, setQueue] = useState({})
  const [error, setError] = useState('')
  const [completed, setCompleted] = useState(0)
  const [backendProcessing, setBackendProcessing] = useState(0)
  const [file, setFile] = useState(null)
  const [apiKey, setAPIKey] = useState<string>('')
  const [region, setRegion] = useState('Default')

  useEffect(() => {
    async function fetchQueue() {
      try {
        const {data: queue} = await networker.httpHandler(
          `/orgs/${orgId}/queues/${queueId}`,
          {
            method: 'GET'
          }
        )
        const {data: apiKey} = await networker.httpHandler(`/users/api-token`, {method: 'GET'})
        setQueue(queue)
        setAPIKey(apiKey.token)
      } catch (error) {
        setError('Unable to fetch queue!')
        console.error(JSON.stringify(error))
        history.push(`/queue`)
      }
    }
    fetchQueue()
  }, [queueId])

  const handleFileUpload = useCallback(
    (data) => {
      async function uploadFile() {
        setBackendProcessing(0)
        setCompleted(0)

        const config = {
          data,
          method: 'POST',
          contentType: 'multipart/form-data',
          onUploadProgress: (e) => {
            const progress = Math.round((e.loaded * 100) / e.total)
            setCompleted(progress)
            if (progress === 100) {
              setBackendProcessing(1)
            }
          }
        }

        let uploadPath = `/orgs/${orgId}/queues/${queueId}/upload`

        if (region == 'US' || region == "AU") {
          uploadPath = `/orgs/${orgId}/queues/${queueId}/upload?region=${region}`
        }

        const res = await networker.httpHandler(
          uploadPath,
          config
        )
        setBackendProcessing(2)

        if (res.errors) {
          res.errors.forEach((error) => {
            Sentry.withScope((scope) => {
              scope.setLevel(Sentry.Severity.Error)
              Sentry.captureException(error.message)
            })
            setError(error.message)
          })
        }
      }

      uploadFile()
    },
    [networker, file, region]
  )

  const onDropHandler = useCallback(
    (acceptedFiles, rejectedFiles) => {
      rejectedFiles.forEach((_file) => {
        setError('This filetype is currently not supported!')
      })

      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onload = async () => {
          if (queueId) {
            setFile(file)

            const data = new FormData()
            data.append('file', file)

            papa.parse(file, {
              header: true,
              newline: '\r\n',
              skipEmptyLines: false,
              error: (error) => {
                if (error) {
                  setError('File not formatted corectly')
                }
              },
              complete: (papaData) => {
                if (papaData.data.length > CSV_ROW_LIMIT) {
                  setError(
                    `You cannot upload more than ${CSV_ROW_LIMIT} tasks. Please contact ${CONTACT_EMAIL} to increase this limit`
                  )
                }
                return handleFileUpload(data)
              }
            })
          } else {
            setError('')
          }
        }

        setError('')

        reader.onabort = () => setError('File upload has been aborted!')

        reader.onerror = () => {
          setError('Error processing file!')
        }

        reader.readAsBinaryString(file)
      })
    },
    [networker, completed, queueId, queue, region]
  )

  return (
    <Connections
      apiKey={apiKey}
      onDropHandler={onDropHandler}
      error={error}
      history={history}
      completed={completed}
      file={file}
      queueId={queueId}
      user={props.user}
      queue={queue}
      backendProcessing={backendProcessing}
      region={region}
      setRegion={setRegion}
    />
  )
}

export default connect()(ConnectionsContainer)
