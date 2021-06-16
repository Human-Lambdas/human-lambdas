import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'
import {IQueue, ITemplate} from 'universal/types/generic'
import ActionButton from 'client/components/ActionButton'
import useRouter from 'client/hooks/useRouter'
import formatCommas from 'client/utils/formatCommas'
import {segmentTrack} from 'client/utils/segmentIo'
import {IUserReq} from 'universal/types/generic'
import useDocumentTitle from 'client/hooks/useDocumentTitle'
import {PALETTE} from 'client/styles/palette'
import Avatar from 'universal/components/Avatar'
import {colorFromString} from 'universal/utils/getColor'
import EmptyPage from 'client/components/EmptyPage'
import EmptyQueuesSVG from 'client/components/Icons/EmptyQueuesSVG'
import useModal from 'client/hooks/useModal'
import TemplatesModal from './TemplatesModal'

interface Props {
  queues: IQueue[]
  templates: ITemplate[]
  error?: undefined | string
  loading?: boolean
  user: IUserReq
}

const Page = styled.div({
  background: '#fff',
  overflowY: 'auto',
  minWidth: 800,
  padding: '0 10%',
  height: '100%'
})

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '96px 0 28px 0',
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: '32px'
})

const ItemListContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  paddingTop: '32px'
})

const ListItem = styled.div({
  lineHeight: '40px',
  height: 136,
  maxWidth: '100%',
  marginBottom: 32,
  border: `1px solid ${PALETTE.BORDER_GRAY}`,
  borderRadius: '16px',
  padding: '24px 40px 24px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  ':hover': {
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.02)'
  }
})

const QueueTitle = styled(Link)({
  color: `${PALETTE.PRIMARY_MAIN}`,
  fontWeight: 600,
  fontSize: '22px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const SubInfo = styled.span({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr'
})

const PendingTasksContainer = styled.span({
  width: 184
})

const PendingTasks = styled.span({
  color: `${PALETTE.PRIMARY_MAIN}`,
  fontWeight: 600
})

const NewQueueButton = styled(ActionButton)({
  height: 30
})

const Assigned = styled.span({
  paddingLeft: 4
})

const Queues = (props: Props) => {
  const {
    user: {is_admin: isAdmin}
  } = props
  const {history} = useRouter() as any
  const {queues = [], templates = []} = props

  useDocumentTitle('Queues Home | Human Lambdas')
  const {modalPortal, togglePortal, closePortal} = useModal({noClose: false})

  const showTemplatesModal = () => {
    segmentTrack('1 - Template Modal Clicked - [QUEUE FUNNEL]', {})
    togglePortal()
  }

  return (
    <Page>
      {queues.length > 0 ? (
        <>
          <Header>
            <div>Queues</div>
            {isAdmin && (
              <div>
                <NewQueueButton key={'add_queue'} onClick={showTemplatesModal}>
                  New queue
                </NewQueueButton>
              </div>
            )}
          </Header>
          <ItemListContainer>
            {queues.map((queue) => (
              <ListItem key={queue.id}>
                <QueueTitle to={`/queues/${queue.id}`}>{queue.name}</QueueTitle>
                <SubInfo>
                  <span>
                    Currently assigned:
                    <Assigned>
                      {queue.active_users &&
                        queue.active_users.map((user, index, list) => {
                          const items = list.length
                          if (index > 3) return null
                          if (items > 4 && index === 3) {
                            return (
                              <Avatar
                                color={colorFromString(user)}
                                initials={`+${items - 3}`}
                                trim={false}
                                key={index}
                              />
                            )
                          }
                          return (
                            <Avatar
                              color={colorFromString(user)}
                              initials={user.charAt(0).toUpperCase()}
                              key={index}
                            />
                          )
                        })}
                    </Assigned>
                  </span>
                  <PendingTasksContainer>
                    Pending Tasks: <PendingTasks>{formatCommas(queue.n_tasks)}</PendingTasks>
                  </PendingTasksContainer>
                </SubInfo>
              </ListItem>
            ))}
          </ItemListContainer>
        </>
      ) : (
        <>
          <EmptyPage
            svg={<EmptyQueuesSVG />}
            header={"Looks like there aren't any queues yet."}
            subHeader={
              isAdmin ? (
                <div>
                  Create your first queue, or read our{' '}
                  <a
                    href='https://humanlambdas.gitbook.io/quickstart/creating-a-queue'
                    target='_blank'
                    rel='noreferrer'
                  >
                    documentation
                  </a>{' '}
                  to learn more.
                </div>
              ) : (
                'Before you can access queues, you will need to be added to one.'
              )
            }
            button={
              <div>
                {isAdmin && (
                  <NewQueueButton key={'add_queue'} onClick={showTemplatesModal}>
                    New queue
                  </NewQueueButton>
                )}
              </div>
            }
          />
        </>
      )}
      {modalPortal(<TemplatesModal templates={templates} />)}
    </Page>
  )
}

export default Queues
