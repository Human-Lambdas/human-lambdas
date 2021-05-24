const getItemStyle = (_isDragging, draggableStyle) => {
  const {transform} = draggableStyle
  let activeTransform = {}
  if (transform) {
    activeTransform = {
      transform: `translate(0, ${transform.substring(
        transform.indexOf(',') + 1,
        transform.indexOf(')')
      )})`
    }
  }
  return {
    userSelect: 'none',
    // background: isDragging ? '#fff' : '#fff',
    background: '#fff',
    outline: 'none',
    width: '100%',
    height: '100%',
    ...draggableStyle,
    ...activeTransform
  }
}

export default getItemStyle
