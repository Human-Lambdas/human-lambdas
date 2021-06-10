import React, {memo, useState, useEffect, useRef, useCallback} from 'react'
import styled from '@emotion/styled'
import BlockHeader from 'universal/components/BlockHeader'
import TextArea from 'client/components/TextArea'
import {IBlock, IQueue} from 'universal/types/generic'
import Content from './Content'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import Label from './Label'
import PrimaryButton from 'universal/components/PrimaryButton'
import SecondaryButton from 'universal/components/SecondaryButton'
import TaggableListWrapper from 'universal/components/TaggableListWrapper'
import {BLOCK_TYPE} from 'universal/utils/constants'
import TextAnnotator from 'universal/components/text-annotator/TextAnnotator'
import {colorByIndex} from 'universal/utils/getColor'

interface Props {
  block: IBlock
  onDelete?: (queue: IQueue, id: string, setFieldValue: any) => void
  isEditing?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  setFieldValue: any
  index?: number
  onEdit?: () => void
  isAudits?: boolean
  isStaff?: boolean
}

const ButtonBlock = styled.div({
  display: 'grid',
  marginBottom: 10,
  marginTop: 10,
  gridTemplateColumns: '80px 80px',
  gridGap: 10
})

const Wrapper = styled.div<any>(({editMode}) => ({
  ...(editMode && {
    display: 'grid',
    gridTemplateRows: 'auto 50px'
  })
}))

const TextWrapper = styled.div(
  ({highlightColor}) => `
    cursor: auto;
    flex-grow: 1;
    padding-bottom: 10px;
    line-height: 25px;
    margin-left: -10px;
    white-space: pre-wrap;
    height: 100%;
    & mark {
      padding: 4px !important;
      // margin: 0 8px !important;
      position: relative;
      cursor: pointer;
      &:hover:after {
        font-size: 8px;
        color: #000;
        white-space:nowrap;
        top: 0;
        line-height: 11px;
        left: 0;
        position: absolute;
        content: 'x';
        font-weight: bold;
        z-index: 11;
        width: 11px;
        background: white;
        text-align: center;
        opacity: 0.5;
      }
    }
    & mark > span {
      display: none;
    }
    & span {

      &::selection {
        background: ${highlightColor};
      }
    }
`
)

const NamedEntityRecognition = memo((props: Props) => {
  const {block, onDelete, isEditing, onEdit, setFieldValue, index, isAudits, isStaff} = props
  const {name} = block

  const {allow_edits: allowEdits, placeholder, options, value = '', entities = []} =
    block[BLOCK_TYPE.NAMED_ENTITY_RECOGNITION] || {}

  const [text, setText] = useState(entities)
  const [userSelect, setUserSelect] = useState(false)
  const [disableSelection, setDisableSelection] = useState(true)
  const [editMode, togglEditMode] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState({
    tag: options[0].id,
    color: colorByIndex(0)
  })

  const renderText = isEditing || value === '' ? placeholder || '' : value
  let textFieldName = `data.${index}.${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}.value`
  if (isEditing || value === '') {
    textFieldName = `data.${index}.${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}.placeholder`
  }

  const [textFieldValue, setTextFieldValue] = useState(renderText)

  useEffect(() => {
    // reset tags when placeholder and options changed
    if (isEditing) {
      setText([])
      setFieldValue(`data[${index}][${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}].entities`, [])
    } else {
      setText(entities)
      setFieldValue(`data[${index}][${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}].entities`, entities)
    }
  }, [placeholder, options])

  useEffect(() => {
    setFieldValue(
      `data[${index}][${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}].entities`,
      isEditing ? [] : text
    )
  }, [text])

  useEffect(() => {
    setSelectedCategory({
      tag: options[0].id,
      color: colorByIndex(0)
    })
  }, [options])

  const handleTextChange = useCallback(
    (e) => {
      const {value} = e.target
      setTextFieldValue(value)
    },
    [textFieldValue]
  )

  const formatEntitiesForUIRendering = (entities: []) => {
    const entitiesInstance = entities
    return entitiesInstance.filter((itm) => {
      const [optionName, index] = findOptionNameFromId(itm.tag)
      if (!optionName) {
        return false
      }
      itm.color = colorByIndex(index)
      return itm
    })
  }

  const findOptionNameFromId = (id) => {
    let name
    let index
    options.map((option, i) => {
      if (option.id === id) {
        name = option.name
        index = i
      }
    })

    return [name, index]
  }

  const handleAnnotate = (text) => {
    if (userSelect) {
      setUserSelect(false)
      return false
    }

    if (!isAudits) {
      setText(text)
      setFieldValue(
        `data[${index}][${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}].entities`,
        isEditing ? [] : text
      )
      setFieldValue(`data[${index}][${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}].value`, renderText)
    }
  }

  const boxRef = useRef()
  const inputRef = React.createRef()

  useEffect(() => {
    if (boxRef !== undefined && boxRef.current !== undefined) {
      boxRef.current.addEventListener('mouseup', (e) => {
        if (e.detail >= 3) {
          setUserSelect(true)
          e.preventDefault()
        }
      })
    }
  }, [boxRef])

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.style.setProperty('height', '100%', 'important')
    }
  }, [inputRef])

  return (
    <Content {...props}>
      <HeaderContainer extendMargin={true}>
        {name && <Label>{name}</Label>}
        <BlockHeader
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={isEditing}
          blockType={BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}
        />
      </HeaderContainer>
      <BodyContainer
        row={true}
        style={{display: 'grid', gridTemplateColumns: 'auto 195px', gridGap: 0, paddingTop: 0}}
      >
        <Wrapper editMode={editMode}>
          {editMode ? (
            <TextArea
              ref={inputRef}
              style={{height: '90% !important'}}
              positionErrorBelow={false}
              value={textFieldValue}
              onChange={handleTextChange}
              scrollable={true}
            />
          ) : (
            <>
              {!selectedCategory ? (
                <div
                  style={{
                    paddingLeft: '10px',
                    height: '100%',
                    wordSpacing: '2px',
                    paddingTop: '10px',
                    paddingRight: '20px',
                    lineHeight: '30px'
                  }}
                >
                  {renderText}
                </div>
              ) : (
                <TextWrapper
                  onMouseDown={(e) => {
                    e.stopPropagation()
                  }}
                  onMouseEnter={() => {
                    setDisableSelection(false)
                  }}
                  onMouseLeave={() => {
                    setDisableSelection(true)
                    window.getSelection().empty()
                  }}
                  style={{userSelect: disableSelection ? 'none' : 'auto'}}
                  highlightColor={selectedCategory.color}
                  ref={boxRef}
                >
                  <TextAnnotator
                    style={{
                      paddingLeft: '20px',
                      height: '100%',
                      wordSpacing: '2px',
                      paddingTop: '10px',
                      paddingRight: '20px',
                      lineHeight: '30px'
                    }}
                    content={renderText}
                    value={formatEntitiesForUIRendering(text)}
                    onChange={handleAnnotate}
                    getSpan={(span) => ({
                      ...span,
                      ...selectedCategory
                    })}
                  />
                </TextWrapper>
              )}
            </>
          )}

          {allowEdits && (
            <ButtonBlock>
              {editMode ? (
                <>
                  <SecondaryButton
                    style={{width: '100%', marginRight: 10}}
                    type='button'
                    disabled={false}
                    onClick={() => {
                      togglEditMode(false)
                      setTextFieldValue(renderText)
                    }}
                    hideFocus
                  >
                    Cancel
                  </SecondaryButton>
                  <PrimaryButton
                    style={{width: '100%'}}
                    type='button'
                    disabled={false}
                    onClick={() => {
                      if (!isEditing) {
                        setText([])
                        setFieldValue(
                          `data[${index}][${BLOCK_TYPE.NAMED_ENTITY_RECOGNITION}].entities`,
                          []
                        )
                      }
                      setFieldValue(textFieldName, textFieldValue)
                      togglEditMode(false)
                    }}
                  >
                    Save
                  </PrimaryButton>
                </>
              ) : (
                <SecondaryButton
                  style={{width: '100%'}}
                  type='button'
                  onClick={() => togglEditMode(true)}
                  hideFocus
                  disabled={isAudits}
                >
                  Edit Text
                </SecondaryButton>
              )}
            </ButtonBlock>
          )}
        </Wrapper>

        <TaggableListWrapper
          options={options}
          onSelect={(category) => {
            setSelectedCategory(category)
          }}
          onUnselect={() => {
            if (isStaff) {
              setSelectedCategory(false)
            }
          }}
          selectedCategory={selectedCategory}
        />
      </BodyContainer>
    </Content>
  )
})

export default NamedEntityRecognition
