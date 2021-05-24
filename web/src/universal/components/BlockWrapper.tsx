import styled from '@emotion/styled'

const BlockWrapper = styled.div<{type: string; index: number}>(({type, index}) => ({
  width: '100%',
  backgroundColor: '#fff !important',
  borderRadius: 4,
  border: '1px solid #e7e9ec',
  boxShadow: 'rgba(0, 0, 0, 0.025) 0px 2px 4px',
  zIndex: type === 'date' ? 10 - index : 1
}))

export default BlockWrapper
