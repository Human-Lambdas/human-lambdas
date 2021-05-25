import React, {useCallback} from 'react'
import styled from '@emotion/styled'
import useRouter from 'client/hooks/useRouter'
import {segmentTrack} from 'client/utils/segmentIo'
import {PALETTE} from 'universal/styles/palette'
import {BoxShadow} from '../../../../client/utils/constants'
import {ITemplate} from 'universal/types/generic'

interface TemplatesModalProps {
  templates: ITemplate[]
}

const ModalRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 550,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${PALETTE.BORDER_MAIN_GRAY}`,
  boxShadow: BoxShadow.MODAL,
  paddingTop: 35,
  paddingBottom: 15,
  maxHeight: 'calc(100vh - 100px)'
})
const Overlay = styled.div({
  position: 'absolute',
  bottom: '0px',
  display: 'block',
  overflow: 'overlay',
  opacity: 1,
  height: '50px',
  width: '100%',
  borderRadius: '0px 0px 10px 10px',
  background: 'linear-gradient(to bottom, transparent, white)'
})

const ModalWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  overflow: 'auto',
  paddingBottom: '20px'
})

const ModalTitle = styled.div({
  marginBottom: 25,
  paddingLeft: 35
})

const ModalHeader = styled.div({
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '27px',
  marginBottom: '15px'
})

const TemplatesArea = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%'
})

const ItemWrapper = styled.div({
  backgroundColor: '#fff',
  padding: '10px 25px'
})

const TemplateItem = styled.div({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '10px',
  cursor: 'pointer',
  ':hover': {
    cursor: 'pointer'
  }
})

const ThumbnailWrapper = styled.div`
  border-radius: 9px;
  margin-right: 35px;
  ${TemplateItem}:hover & {
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);
  }
`

const StyledThumbnail = styled.img({
  display: 'block',
  fontSize: 38,
  color: '#fff',
  objectFit: 'contain',
  maxWidth: '100px',
  maxHeight: '100px',
  borderRadius: 9
})

const EmptyThumbnail = styled.div({
  display: 'block',
  fontSize: 38,
  color: '#fff',
  objectFit: 'contain',
  height: '100px',
  width: '100px',
  border: `1px dashed ${PALETTE.BORDER_GRAY_NEW}`,
  borderRadius: 9
})

const TemplateInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left'
})

const TemplateName = styled.b({
  fontSize: 16
})

const Summary = styled.span<{fontSize?: number; fontWeight?: number}>(({fontSize, fontWeight}) => ({
  color: PALETTE.TEXT_DARKER_GRAY,
  fontSize: fontSize || 14,
  fontWeight: fontWeight || 400,
  marginTop: 5,
  paddingRight: 10,
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2
}))

const TemplatesModal = (props: TemplatesModalProps) => {
  const {templates} = props
  const {history} = useRouter() as any
  const emptyTemplate = {
    id: null,
    name: 'Blank',
    summary: 'Start with an empty canvas and build exactly what you need.',
    thumbnail: null
  }

  const allTemplates = [emptyTemplate, ...templates]

  const handleClick = useCallback((id, name) => {
    segmentTrack(`2 - Queue Creation from Template - [QUEUE FUNNEL]`, {
      templateName: name
    })
    if (!id) return history.push(`/queues/new`)
    return history.push({
      pathname: '/queues/new',
      state: {templateId: id}
    })
  }, [])

  return (
    <ModalRoot id='parentId'>
      <ModalTitle>
        <ModalHeader>New Queue</ModalHeader>
        <Summary fontSize={16} fontWeight={500}>
          Start from scratch or choose from one of the templates below
        </Summary>
      </ModalTitle>
      <ModalWrapper>
        <TemplatesArea>
          {allTemplates.map(({id, name, summary, thumbnail}) => {
            return (
              <ItemWrapper key={id} onClick={() => handleClick(id, name)}>
                <TemplateItem>
                  <ThumbnailWrapper>
                    {thumbnail ? <StyledThumbnail src={thumbnail} /> : <EmptyThumbnail />}
                  </ThumbnailWrapper>
                  <TemplateInfo>
                    <TemplateName>{name}</TemplateName>
                    <Summary>{summary}</Summary>
                  </TemplateInfo>
                </TemplateItem>
              </ItemWrapper>
            )
          })}
        </TemplatesArea>
      </ModalWrapper>
      <Overlay />
    </ModalRoot>
  )
}

export default TemplatesModal
