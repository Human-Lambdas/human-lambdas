import React, {memo, ReactElement} from 'react'
import styled from '@emotion/styled'
import ListPageHeader from './ListPageHeader'
import ListPageContent from './ListPageContent'
import ListPageFooter from './ListPageFooter'

interface Props {
  pageHeader: ReactElement
  pageFooter: ReactElement
  itemList?: ReactElement
  emptyList?: ReactElement
}

const Layout = styled.div({
  display: 'flex',
  flex: 1,
  overflow: 'auto',
  flexDirection: 'column',
  backgroundColor: '#fff'
})

const Container = styled.div({
  marginTop: 40,
  display: 'flex',
  flex: 1,
  justifyContainer: 'center',
  backgroundColor: '#fff'
})

const Content = styled.div({
  width: '100%',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

const ListPage = memo((props: Props) => {
  const {pageHeader, itemList, emptyList, pageFooter} = props
  return (
    <Layout>
      <Container>
        <Content>
          <ListPageHeader pageHeader={pageHeader} />
          {!itemList.length ? (
            <>{emptyList ? emptyList : null}</>
          ) : (
            <>
              <ListPageContent itemList={itemList} />
              {pageFooter && <ListPageFooter pageFooter={pageFooter} />}
            </>
          )}
        </Content>
      </Container>
    </Layout>
  )
})

export default ListPage
