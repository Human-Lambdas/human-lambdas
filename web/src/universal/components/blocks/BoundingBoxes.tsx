import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import {IBlock, IQueue} from 'universal/types/generic'
import BlockHeader from 'universal/components/BlockHeader'
import Content from './Content'
import Label from './Label'
import HeaderContainer from './HeaderContainer'
import {BLOCK_TYPE} from 'universal/utils/constants'
import BodyContainer from './BodyContainer'
import TaggableListWrapper from 'universal/components/TaggableListWrapper'
import BBoxAnnotator, {EntryType} from '../bbox-annotator/BBoxAnnotator'
import {colorByIndex} from 'universal/utils/getColor'

interface BoundingBoxesProps {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  onEdit?: () => void
  setFieldValue?: () => void
  isEditing?: boolean
  isAudits?: boolean
  index: number
}

const ImageWrapper = styled('div')`
  flex-grow: 1;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  width: 100%;
`

const BoundingBoxes = React.memo((props: BoundingBoxesProps) => {
  const {block, onDelete, onEdit, isEditing, setFieldValue, index, isAudits} = props
  const {name} = block

  const {placeholder, options, value} = block[BLOCK_TYPE.BOUNDING_BOXES] || {}

  const [objects, setObjects] = useState<EntryType[]>(value?.objects || [])
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null)

  const renderValue = isEditing || value.image === '' ? placeholder || '' : value.image

  const [selectedLabel, setSelectedLabel] = useState({
    tag: options[0].id,
    color: colorByIndex(0)
  })

  useEffect(() => {
    setObjects(value?.objects)
  }, [block[BLOCK_TYPE.BOUNDING_BOXES]])

  useEffect(() => {
    setFieldValue(
      `data[${index}][${BLOCK_TYPE.BOUNDING_BOXES}].value.objects`,
      isEditing ? [] : value?.objects
    )
    setObjects(isEditing ? [] : value?.objects)
  }, [placeholder, options])

  useEffect(() => {
    let selectedIndex = 0
    options.forEach((option, idx) => {
      if (option.id === selectedLabel.tag) {
        selectedIndex = idx
      }
    })
    setSelectedLabel({
      tag: options[selectedIndex].id,
      color: colorByIndex(selectedIndex)
    })
  }, [options])

  return (
    <Content {...props} style={{display: 'block', maxWidth: '100%', minWidth: '100%'}}>
      <HeaderContainer>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.BOUNDING_BOXES}
        />
      </HeaderContainer>
      <BodyContainer row={true}>
        <ImageWrapper
          onMouseDown={(e) => {
            e.stopPropagation()
          }}
        >
          {renderValue && (
            <BBoxAnnotator
              url={renderValue}
              selectedLabel={selectedLabel}
              objects={objects}
              highlightIndex={highlightIndex}
              disabled={isAudits}
              onChange={(e: EntryType[]) => {
                setObjects(e)
                setFieldValue(`data[${index}][${BLOCK_TYPE.BOUNDING_BOXES}].value.objects`, e)
              }}
            />
          )}
        </ImageWrapper>
        <TaggableListWrapper
          options={options}
          objects={objects}
          disabled={isAudits}
          onSelect={(label) => {
            setSelectedLabel(label)
          }}
          onHover={(index) => {
            setHighlightIndex(index)
          }}
          onClick={(index) => {
            setObjects(objects.filter((_, i) => i !== index))
          }}
          selectedCategory={selectedLabel}
        />
      </BodyContainer>
    </Content>
  )
})

export default BoundingBoxes
