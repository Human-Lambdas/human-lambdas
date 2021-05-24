import React from 'react'
import styled from '@emotion/styled'
import LineChart from 'components/LineChart'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import ChartHeader from '../../components/ChartHeader/ChartHeader'
import ChartContainer from '../../components/ChartContainer/ChartContainer'
import ChartTitle from '../../components/ChartTitle/ChartTitle'
import AppTopbar from 'components/AppTopbar'
import {PALETTE} from 'styles/palette'

interface ChartsProps {
  filterMenu: boolean
  title?: string
  range: any
  charts: any
  setRange: (range: any) => void
  lines: any
  loading?: boolean
  setActive: (id: string) => void
}

const Title = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontSize: 15,
  fontWeight: 500
})

const Charts = (props: ChartsProps) => {
  const {charts, filterMenu, title, range, setRange, lines = [], setActive, loading} = props
  const rightBarItems = [
    <ChartHeader
      key='rightBarItems'
      menuItems={lines}
      filter={filterMenu}
      title={title}
      range={range}
      setRange={setRange}
      setActive={setActive}
    />
  ]
  const leftBarItems = [<Title key='leftBarItems'>{title}</Title>]
  return (
    <>
      <AppTopbar leftBarItems={leftBarItems} rightBarItems={rightBarItems} />
      <PageWrapper>
        {charts.map(({title, data, inSeconds, lines, inPercent}) => (
          <ChartContainer key={title}>
            <ChartTitle>{title}</ChartTitle>
            <LineChart
              data={data}
              xAxis='date'
              inSeconds={inSeconds}
              inPercent={inPercent}
              lines={lines}
              loading={loading}
            />
          </ChartContainer>
        ))}
      </PageWrapper>
    </>
  )
}

export default Charts
