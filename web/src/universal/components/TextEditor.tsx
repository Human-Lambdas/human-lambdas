import React, {useState, useEffect, useRef, memo} from 'react'
import styled from '@emotion/styled'
import RichTextEditor, {EditorValue} from 'react-rte'
import BodyContainer from './blocks/BodyContainer'
import {PALETTE} from 'universal/styles/palette'
interface TextEditorProps {
  isRequired?: boolean
  label?: string
  name?: string
  placeholder?: string | any
  value: string | any
  style?: object
  error?: string | undefined
  disabled?: boolean
  readOnly?: boolean | any
  setFieldValue?: any
  format: string | any
  isTaskMenu?: boolean
}

const StyledTextEditor = styled(RichTextEditor)`
  height: 100%;
  font-family: inherit !important;
  & .wysiwyg-btn {
    opacity: 0.7;
  }
  ${({isTaskMenu, readOnly}) =>
    !isTaskMenu && readOnly
      ? `
  border: none !important;
`
      : ``}
  ${({isTaskMenu, error}) =>
    isTaskMenu
      ? `
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid ${error ? PALETTE.ERROR_MAIN : PALETTE.BORDER_MAIN_GRAY};
    outline: none;
    font-size: 15px !important;
    & .text-editor-body {
      height: 60px;
    }
    & .text-editor-tooolbar {
      font-size: 10px !important;
      margin: 0 7px;
    }
    & :active, :focus, :hover {
      border-color: ${PALETTE.PRIMARY_MAIN};
    }
    & .DraftEditor-editorContainer {
      border: none !important;
    }
    & .public-DraftEditorPlaceholder-root {
      height: 100%;
      overflow: auto;
    }
  `
      : ``}
`

const toolbarConfig = {
  display: [
    'INLINE_STYLE_BUTTONS',
    'BLOCK_TYPE_BUTTONS',
    'LINK_BUTTONS',
    'BLOCK_TYPE_DROPDOWN',
    'HISTORY_BUTTONS'
  ],
  INLINE_STYLE_BUTTONS: [
    {label: 'Bold', style: 'BOLD', className: 'wysiwyg-btn'},
    {label: 'Italic', style: 'ITALIC', className: 'wysiwyg-btn'},
    {label: 'Underline', style: 'UNDERLINE', className: 'wysiwyg-btn'}
  ],
  BLOCK_TYPE_DROPDOWN: [
    {label: 'Normal', style: 'unstyled'},
    {label: 'Heading Large', style: 'header-one'},
    {label: 'Heading Medium', style: 'header-two'},
    {label: 'Heading Small', style: 'header-three'}
  ],
  BLOCK_TYPE_BUTTONS: [
    {label: 'UL', style: 'unordered-list-item', className: 'wysiwyg-btn'},
    {label: 'OL', style: 'ordered-list-item', className: 'wysiwyg-btn'}
  ]
}

const editorText = RichTextEditor.createValueFromString('', 'html')

const TextEditor = memo((props: TextEditorProps) => {
  const {name, placeholder, value, format, readOnly, setFieldValue, isTaskMenu} = props
  const renderValue = value

  const editorValueFromProps = (value: string) => {
    if (format && value) {
      return [value, format]
    }
    return ['', 'html']
  }

  const [editorValue, setEditorValue] = useState(
    editorText.setContentFromString(...editorValueFromProps(renderValue))
  )

  const handleEditorChange = (value: EditorValue) => {
    setEditorValue(value)
  }

  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
      setEditorValue(editorText.setContentFromString(...editorValueFromProps(renderValue)))
    } else {
      didMountRef.current = true
    }
  }, [renderValue, editorText])

  const containerStyle = {
    width: '100%',
    ...(isTaskMenu && {padding: '0px'})
  }

  return (
    <BodyContainer style={containerStyle}>
      <StyledTextEditor
        className='text-editor'
        isTaskMenu={isTaskMenu}
        toolbarConfig={toolbarConfig}
        toolbarClassName='text-editor-tooolbar'
        editorClassName='text-editor-body'
        name={name}
        value={editorValue}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleEditorChange}
        onBlur={() => {
          setFieldValue(name, editorValue.toString(format))
        }}
      />
    </BodyContainer>
  )
})

export default TextEditor
