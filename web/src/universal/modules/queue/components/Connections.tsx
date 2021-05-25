import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from '@emotion/styled'
import {withRouter} from 'react-router-dom'
import {parse} from 'json2csv'
import {PALETTE} from 'universal/styles/palette'
import {ICON_SIZE} from 'universal/styles/typography'
import {FONT_FAMILY} from 'universal/styles/typography'
import Icon from 'universal/components/Icon'
import {SUPPORTED_FILES, MAX_FILE_SIZE} from 'client/utils/constants'
import {IUser, IQueue} from 'universal/types/generic'
import {BLOCK_TYPE, SAMPLE_VALUES, FEATURE_TOGGLES} from 'universal/utils/constants'
import AddTasksSwitcher from './AddTasksSwitcher'
import APITaskUpload from './APITaskUpload'
import APITaskCompleted from './APITaskCompleted'
import DownloadCSV from './DownloadCSV'
import UpdateWebhook from './UpdateWebhook'
import PageHeader from 'universal/components/PageHeader'
import RootButton from 'client/components/RootButton'
import ZapierContainer from './ZapierContainer'
import CodeBox from './CodeBox'
import Menu from 'client/components/Menu'
import MenuItem from 'client/components/MenuItem'
import {MenuPosition} from 'client/hooks/useCoords'
import useMenu from 'client/hooks/useMenu'
import MenuButton from 'client/components/MenuButton'

interface Props {
  queueId: string
  error?: string | undefined
  file?: any
  onDropHandler: (acceptedFiles: any, rejectedFiles: any) => void
  history: any
  completed?: number | undefined
  backendProcessing: number
  user: IUser
  queue: IQueue
  apiKey?: null | string
}

const PageContainer = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: '#fff'
})

const MainContents = styled.div({
  display: 'flex',
  backgroundColor: '#fff',
  height: '100%',
  width: '100%',
  overflow: 'hidden'
})

const ContentBody = styled.div({
  padding: '0 50px',
  minWidth: 500,
  maxWidth: 800,
  overflow: 'auto',
  margin: '0 auto'
})

const StyledLabel = styled.span({
  fontSize: 24,
  fontWeight: 600,
  lineHeight: '30px'
})

const DropWrapper = styled.div({
  padding: '28px 25px 50px',
  backgroundColor: '#fff',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative'
})

const SelectedRegion = styled.div`
  float: left;
  font-weight: bold;
  font-size: 15px;
  & button {
    float: right;
    margin-left: 5px;
    margin-top: -3px;
  }
`

const RegionText = styled.div`
  float: left;
  margin-right: 5px;
  font-size: 15px;
  color: rgb(0, 0, 0, 0.5);
`

const RegionContainer = styled.div`
  margin: 0 25px;
  float: left;
  width: 100%;
`

const Zone = styled.div(({isDragActive, uploadComplete, error, backendProcessing}) => {
  let borderColor = isDragActive
    ? PALETTE.PRIMARY_MAIN
    : uploadComplete && !error && backendProcessing == 2
    ? PALETTE.PRIMARY_GREEN
    : PALETTE.BORDER_MAIN_GRAY

  if (error) {
    borderColor = PALETTE.ERROR_MAIN
  }
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20vh',
    border: `2px ${isDragActive ? 'solid' : 'dashed'} ${borderColor}`,
    outline: 'none',
    borderRadius: 4,
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.25s ease-in-out'
  }
})

const StyledIcon = styled(Icon)({
  display: 'block',
  fontSize: 84,
  color: PALETTE.TEXT_GRAY
})

const DropIcon = styled(Icon)<{successful?: boolean}>(({successful}) => {
  const color = successful ? PALETTE.PRIMARY_GREEN : PALETTE.TEXT_GRAY
  return {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: ICON_SIZE.MD24,
    color,
    marginRight: 5
  }
})

const StyledLine = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '0 20px'
})

const LinkContainer = styled.div({
  display: 'inline-box'
})

const Link = styled(RootButton)({
  padding: 0,
  marginRight: 10,
  fontSize: 24,
  maxWidth: 350,
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: 600,
  color: PALETTE.PRIMARY_MAIN,
  textDecoration: 'underline',
  textTransform: 'capitalize'
})

const StyledText = styled.div<{
  isDragActive?: boolean
  successful?: boolean
  error?: boolean
}>(({isDragActive, successful, error}) => {
  let color = isDragActive
    ? PALETTE.PRIMARY_MAIN
    : successful
    ? PALETTE.PRIMARY_GREEN
    : PALETTE.TEXT_MAIN

  if (error) {
    color = PALETTE.ERROR_MAIN
  }
  return {
    fontFamily: FONT_FAMILY.SANS_SERIF,
    color,
    fontSize: 18,
    fontWeight: 500
  }
})

const getValue = (block) => {
  const type = block.type
  let value
  switch (type) {
    case BLOCK_TYPE.SINGLE_SELECTION:
      value = block[type]?.options[0]['id']
      break
    case BLOCK_TYPE.MULTIPLE_SELECTION:
      value = `["${block[type]?.options[0]['id']}"]`
      break
    case BLOCK_TYPE.BOUNDING_BOXES:
      const bbImage = block[type]?.placeholder || SAMPLE_VALUES['image']
      const bbValue = `{'image': '${bbImage}', 'objects': []}`
      value = JSON.stringify(bbValue)
      break
    case BLOCK_TYPE.NAMED_ENTITY_RECOGNITION:
      const nerText = block[type]?.placeholder || SAMPLE_VALUES['text']
      const nerValue = `{'text': '${nerText}', 'entities': []}`
      value = JSON.stringify(nerValue)
      break
    case BLOCK_TYPE.FORM_SEQUENCE:
      const formSequenceString = block[type].data.reduce((acc, blk, index, blocks) => {
        const val = getValue(blk) || SAMPLE_VALUES[blk.type]
        const sep = typeof val === 'string' ? "'" : ''
        if (index < blocks.length - 1) {
          return `${acc}'${blk.id}': ${sep}${val}${sep}, `
        } else {
          return `${acc}'${blk.id}': ${sep}${val}${sep}}`
        }
      }, '{')
      value = JSON.stringify(formSequenceString)
      break
    case BLOCK_TYPE.TEXT_SEQUENCE:
      const textSequenceValue =
        block[type]?.placeholder.length > 0 ? block[type]?.placeholder : SAMPLE_VALUES[type]
      value = '"[' + textSequenceValue.map((a) => `'${a}'`) + ']"'
      break
    default:
      value = block[type]?.placeholder ? block[type]?.placeholder : SAMPLE_VALUES[type]
  }
  return value
}

const Connections = (props: Props) => {
  const {
    apiKey,
    onDropHandler,
    queueId,
    history,
    completed,
    file,
    user,
    queue,
    backendProcessing,
    error,
    region,
    setRegion
  } = props
  const {current_organization_id: orgId} = user
  const [apiView, setApiView] = useState('sources/api')
  const [csvString, setCSV] = useState('')
  const {name} = queue || {}

  const {menuPortal, togglePortal, originRef, menuProps} = useMenu(MenuPosition.UPPER_RIGHT, {
    isDropdown: true
  })

  useEffect(() => {
    const generateSampleCsv = (queue) => {
      const {data = []} = queue
      let headers = ''
      let values = ''
      let EOL = ','
      const mappedValues = {}
      data.forEach((block, i) => {
        EOL = i < data.length - 1 ? EOL : ''
        headers = headers + block.id + EOL
        values = values + getValue(block) + EOL
        mappedValues[block.id] = getValue(block)
      })

      const opts = {
        quote: '',
        escapedQuote: ''
      }
      try {
        const csv = parse([mappedValues], opts)
        setCSV(csv)
      } catch (err) {
        console.error(err)
        setCSV('')
      }
    }
    generateSampleCsv(queue)
  }, [queue])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: onDropHandler,
    maxSize: MAX_FILE_SIZE,
    accept: SUPPORTED_FILES
  })
  const uploadComplete = file && file.name && completed === 100
  const isUploading = file && file.name && completed !== undefined && completed < 100

  const renderIcon = () => {
    if (uploadComplete && !error) {
      return <DropIcon successful>cloud_done</DropIcon>
    } else {
      return <div>{isUploading ? <DropIcon>cloud_queue</DropIcon> : <DropIcon>add</DropIcon>}</div>
    }
  }

  const renderUserMessage = () => {
    if (uploadComplete && backendProcessing === 2 && !error) {
      return <StyledText successful>{`${file.name} successfully uploaded!`}</StyledText>
    } else if (error) {
      return <StyledText>{`There was an error with processing ${file.name}: ${error}`}</StyledText>
    } else if (isUploading || backendProcessing) {
      return (
        <StyledText>{`${completed}%${
          backendProcessing === 1 ? ' uploaded, processing on server ...' : ''
        }`}</StyledText>
      )
    } else {
      return (
        <StyledText isDragActive={isDragActive}>
          Click or Drop a CSV file here to create tasks
        </StyledText>
      )
    }
  }

  return (
    <PageContainer>
      <PageHeader
        leftBarItems={
          <LinkContainer>
            <Link onClick={() => history.push(`/queues/${queueId}`)}>{name}</Link>
            <StyledLabel>/ Connections</StyledLabel>
          </LinkContainer>
        }
      />
      <MainContents>
        <AddTasksSwitcher setApiView={setApiView} apiView={apiView} />
        <ContentBody>
          {apiView === 'sources/api' ? (
            <APITaskUpload orgId={orgId} queueId={queueId} queue={queue} apiKey={apiKey} />
          ) : apiView === 'sources/csv' ? (
            <>
              <CodeBox
                queue={queue}
                codeString={csvString}
                language='text'
                instructions={`
                  To add tasks on this workflow you will need to create a CSV (comma-separated values) file.
                  To create your first task use the copy the format in the text below into a .csv file and upload to the drag area.
                  `}
              />

              {FEATURE_TOGGLES.UPLOAD_CSV_REGION_ORGS.includes(orgId) && (
                <RegionContainer>
                  <RegionText>Upload to a specific region: </RegionText>
                  <SelectedRegion>
                    {region} <MenuButton type='button' onClick={togglePortal} ref={originRef} />
                  </SelectedRegion>

                  {menuPortal(
                    <Menu ariaLabel={'Filter range'} {...menuProps}>
                      <MenuItem label={'Default'} onClick={() => setRegion('Default')} />
                      <MenuItem label={'EU'} onClick={() => setRegion('EU')} />
                      <MenuItem label={'US'} onClick={() => setRegion('US')} />
                      <MenuItem label={'Australia'} onClick={() => setRegion('AU')} />
                    </Menu>
                  )}
                </RegionContainer>
              )}

              <DropWrapper>
                <Zone
                  {...getRootProps()}
                  isDragActive={isDragActive}
                  uploadComplete={uploadComplete}
                  error={error}
                  backendProcessing={backendProcessing}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <StyledIcon>cloud_upload</StyledIcon>
                  ) : (
                    <StyledLine>
                      {renderIcon()}
                      {renderUserMessage()}
                    </StyledLine>
                  )}
                </Zone>
              </DropWrapper>
            </>
          ) : apiView === 'sources/zapier' ? (
            <ZapierContainer type='source' />
          ) : apiView === 'destinations/webhooks' ? (
            <UpdateWebhook orgId={orgId} queue={queue} />
          ) : apiView === 'destinations/api' ? (
            <APITaskCompleted orgId={orgId} queueId={queueId} apiKey={apiKey} queue={queue} />
          ) : apiView === 'destinations/csv' ? (
            <DownloadCSV orgId={orgId} queue={queue} />
          ) : apiView === 'destinations/zapier' ? (
            <ZapierContainer type='destination' />
          ) : (
            <h1>connection not found</h1>
          )}
        </ContentBody>
      </MainContents>
    </PageContainer>
  )
}

export default withRouter(Connections)
