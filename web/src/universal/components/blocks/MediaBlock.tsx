import React, {useEffect} from 'react'
import styled from '@emotion/styled'
import {IBlock, IQueue} from 'universal/types/generic'
import usePrevious from 'universal/hooks/usePrevious'
import BlockHeader from '../BlockHeader'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Label from './Label'
import Content from './Content'
import Plyr from 'plyr'

import 'plyr/dist/plyr.css'

interface MediaBlockProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  onEdit?: () => void
  isAudits?: boolean
}

const options = {
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
}

const VideoPlayer = styled.div<{show: boolean; hideOverflow: boolean}>(({show, hideOverflow}) => ({
  display: show === false ? 'none' : 'block',
  overflow: hideOverflow ? 'hidden' : 'visible',
  zIndex: 1
}))

const MediaBlock = (props: MediaBlockProps) => {
  const {block, onDelete, onEdit, isEditing} = props
  const {name, type, id} = block
  const {value, placeholder} = block[type] || {}
  const sourceUrl = isEditing ? value || placeholder : value

  const prevSourceUrl = usePrevious(sourceUrl)

  const sources = {
    type: type,
    sources: [{src: sourceUrl}]
  }

  useEffect(() => {
    if (prevSourceUrl !== sourceUrl) {
      const el = document.getElementById(`plyr-${id}`)
      // @ts-ignore
      const player = new Plyr(el, options)
      // @ts-ignore
      player.source = sources

      return () => player.destroy()
    }
    return
  }, [sourceUrl])

  return (
    <Content {...props}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader onDelete={onDelete} onEdit={onEdit} isEditing={isEditing} blockType={type} />
      </HeaderContainer>
      <BodyContainer>
        <VideoPlayer show={sourceUrl !== '' && sourceUrl !== undefined} hideOverflow={type === 'video'}>
          <video id={`plyr-${id}`} />
        </VideoPlayer>
      </BodyContainer>
    </Content>
  )
}

export default MediaBlock
