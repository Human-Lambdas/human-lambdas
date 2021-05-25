import React, {memo} from 'react'
import {BLOCK_TYPE} from 'universal/utils/constants'
import {IBlock, IQueue} from 'universal/types/generic'
import Image from 'universal/components/blocks/Image'
import Number from 'universal/components/blocks/Number'
import Text from 'universal/components/blocks/Text'
import Email from 'universal/components/blocks/Email'
import Link from 'universal/components/blocks/Link'
import MediaBlock from 'universal/components/blocks/MediaBlock'
import Binary from 'universal/components/blocks/Binary'
import Embed from 'universal/components/blocks/Embed'
import PdfReader from 'universal/components/blocks/PdfReader'
import SingleSelection from 'universal/components/blocks/SingleSelection'
import NamedEntityRecognition from 'universal/components/blocks/NamedEntityRecognition'
import MultipleSelection from 'universal/components/blocks/MultipleSelection'
import FormSequence from 'universal/components/blocks/FormSequence'
import RichTextEditor from 'universal/components/blocks/RichTextEditor'
import BoundingBoxes from 'universal/components/blocks/BoundingBoxes'
import TextSequence from 'universal/components/blocks/TextSequence'
import Date from 'universal/components/blocks/Date'

interface BlockComponentProps {
  isAudits?: boolean
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
  isEditing?: boolean
  index: number
  errors?: any | undefined
  setFieldValue?: any
  onEdit: () => void
}

const BlockComponent = memo((props: BlockComponentProps) => {
  const {
    isAudits,
    setFieldValue,
    isEditing,
    index,
    block,
    onDelete,
    handleChange,
    handleBlur,
    onEdit,
    errors
  } = props || {}
  let renderCmp

  switch (block.type) {
    case BLOCK_TYPE.TEXT:
      renderCmp = (
        <Text
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
          handleChange={handleChange}
        />
      )
      break
    case BLOCK_TYPE.EMAIL:
      renderCmp = (
        <Email
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          error={errors?.email}
          onDelete={onDelete}
          onEdit={onEdit}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      )
      break
    case BLOCK_TYPE.NUMBER:
      renderCmp = (
        <Number
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
          handleChange={handleChange}
        />
      )
      break
    case BLOCK_TYPE.LINK:
      renderCmp = (
        <Link
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          error={errors?.link}
          onDelete={onDelete}
          onEdit={onEdit}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      )
      break
    case BLOCK_TYPE.IMAGE:
      renderCmp = (
        <Image
          isAudits={isAudits}
          isEditing={isEditing}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )
      break
    case BLOCK_TYPE.AUDIO:
      renderCmp = (
        <MediaBlock
          isAudits={isAudits}
          isEditing={isEditing}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )
      break
    case BLOCK_TYPE.VIDEO:
      renderCmp = (
        <MediaBlock
          isAudits={isAudits}
          isEditing={isEditing}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )
      break
    case BLOCK_TYPE.BINARY:
      renderCmp = (
        <Binary
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onEdit={onEdit}
          onDelete={onDelete}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.NAMED_ENTITY_RECOGNITION:
      renderCmp = (
        <NamedEntityRecognition
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onEdit={onEdit}
          error={errors}
          onDelete={onDelete}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.BOUNDING_BOXES:
      renderCmp = (
        <BoundingBoxes
          isAudits={isAudits}
          isEditing={isEditing}
          block={block}
          index={index}
          onDelete={onDelete}
          onEdit={onEdit}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.EMBED:
      renderCmp = (
        <Embed
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onEdit={onEdit}
          error={errors}
          onDelete={onDelete}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.PDF:
      renderCmp = (
        <PdfReader
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onEdit={onEdit}
          error={errors}
          onDelete={onDelete}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.SINGLE_SELECTION:
      renderCmp = (
        <SingleSelection
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onEdit={onEdit}
          onDelete={onDelete}
          handleChange={handleChange}
        />
      )
      break
    case BLOCK_TYPE.MULTIPLE_SELECTION:
      renderCmp = (
        <MultipleSelection
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onEdit={onEdit}
          onDelete={onDelete}
          handleChange={handleChange}
        />
      )
      break
    case BLOCK_TYPE.FORM_SEQUENCE:
      renderCmp = (
        <FormSequence
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onEdit={onEdit}
          onDelete={onDelete}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.RICH_TEXT:
      renderCmp = (
        <RichTextEditor
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.TEXT_SEQUENCE:
      renderCmp = (
        <TextSequence
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    case BLOCK_TYPE.DATE:
      renderCmp = (
        <Date
          isAudits={isAudits}
          isEditing={isEditing}
          index={index}
          block={block}
          onDelete={onDelete}
          onEdit={onEdit}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
      break
    default:
      renderCmp = null
  }
  return renderCmp
})

export default BlockComponent
