import React from 'react'
import styled from '@emotion/styled'
import {darken} from 'polished'
import Icon from 'universal/components/Icon'
import {PALETTE} from 'universal/styles/palette'
import {colorByIndex} from 'universal/utils/getColor'

interface Props {
  options: any
  selectedCategory: any
  onSelect: () => void
  onHover: () => void
  onClick: () => void
  disabled?: any
  text: any
  objects?: any
}

const ListWrapper = styled.div({
  width: '195px',
  minWidth: '195px',
  userSelect: 'none'
})

const List = styled.div({
  cursor: 'auto'
})

const ListLabel = styled.div({
  fontWeight: '400',
  marginTop: '20px'
})

const CategoryButton = styled.span<{active?: boolean}>(({active}) => ({
  cursor: 'pointer',
  background: 'white',
  clear: 'both',
  width: '100%',
  marginBottom: '5px',
  padding: '10px 10px',
  textAlign: 'left',
  border: active ? '1px solid #6648EE !important' : '1px solid #E8ECEE',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  ':hover': {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.024)'
  }
}))

const EntityText = styled.span`
  background: white;
  clear: both;
  width: 100%;
  marginbottom: 5px;
  padding: 10px 10px;
  position: relative;
  textalign: left;
  border: 1px solid white;
  boxshadow: 0px 2px 4px rgba(0, 0, 0, 0.024);
  borderradius: 4px;
  display: flex;
  flexdirection: row;
  alignitems: center;
  cursor: default;

  &::selection { background: transparent; }

  &:hover {
    border: 1px solid #e8ecee !important;
    border-radius: 4px;
    i {
      display: block !important;
      opacity: 0.6 !important;
    }
  }

  i {
    cursor: pointer;
  }
`

const ColorArtifact = styled.span<{color?: string}>(({color}) => ({
  background: color,
  display: 'inline-block',
  width: '20px',
  height: '20px',
  marginRight: '10px',
  border: `1px solid ${darken(0.3, color)}`
}))

const TaggableListWrapper = (props: Props) => {
  const {options, text, selectedCategory, onSelect, disabled, objects, onHover, onClick} = props
  const getOptionIndex = (id) => {
    let index
    options.map((option, i) => {
      if (option.id === id) {
        index = i
      }
    })

    return index
  }
  return (
    <ListWrapper>
      <List>
        {options.map((option, optionIndex: number) => (
          <CategoryButton
            key={optionIndex}
            onClick={() => {
              if (!disabled) {
                onSelect({tag: option.id, color: colorByIndex(optionIndex)})
              }
            }}
            type='button'
            active={!disabled && selectedCategory.tag === option.id}
          >
            <ColorArtifact color={colorByIndex(optionIndex)} />
            {option.name}
          </CategoryButton>
        ))}
      </List>

      {Array.isArray(text) && text.length > 0 && (
        <List>
          <ListLabel>Entities</ListLabel>
          {text.map((item, key) => {
            return (
              <EntityText key={key}>
                <ColorArtifact key={key} color={item.color} />
                {item.text}
              </EntityText>
            )
          })}
        </List>
      )}

      {Array.isArray(objects) && objects.length > 0 && (
        <List>
          <ListLabel>Objects</ListLabel>
          {objects.map((item, key) => {
            const name = options.find((opt) => opt.id === item.category)?.name
            if (!name) return null
            return (
              <EntityText
                key={key}
                onMouseEnter={() => {
                  onHover(key)
                }}
                onMouseLeave={() => {
                  onHover(null)
                }}
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <ColorArtifact key={key} color={colorByIndex(getOptionIndex(item.category))} />
                {name}

                {!disabled && (
                  <Icon
                    style={{
                      fontSize: 18,
                      position: 'absolute',
                      right: '5px',
                      top: '11px',
                      display: 'none',
                      color: PALETTE.TEXT_MAIN
                    }}
                    onClick={() => {
                      onClick(key)
                    }}
                  >
                    close
                  </Icon>
                )}
              </EntityText>
            )
          })}
        </List>
      )}
    </ListWrapper>
  )
}

export default TaggableListWrapper
