import React, {useEffect, useState} from 'react'
import qs from 'qs'
import Charts from '../../components/Charts/Charts'
import useNetworker from 'hooks/useNetworker'
import {Chart} from 'utils/constants'
import {PALETTE} from 'styles/palette'
import {IUser} from 'client/types/generic'

interface Props {
  user: IUser
}

const OverviewContainer = ({user}: Props) => {
  const [chartData, setChartData] = useState([])
  const [range, setRange] = useState('weekly')
  const [loading, setLoading] = useState(false)
  const orgId = user.current_organization_id
  const networker = useNetworker()

  useEffect(() => {
    async function fetchOverview() {
      setLoading(true)
      const payload = {
        range: range,
        type: [Chart.COMPLETED, Chart.PENDING, Chart.AHT, Chart.TAT, Chart.ACCURACY]
      }
      const {data, erorrs} = await networker.httpHandler(`/orgs/${orgId}/metrics`, {
        method: 'GET',
        params: payload,
        paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
        data: payload
      })
      if (!erorrs) {
        setChartData(data)
      } else {
        console.error('Error fetching overview data', JSON.stringify(erorrs))
      }
      setLoading(false)
    }

    fetchOverview()
  }, [range])

  return (
    <Charts
      title='Performance Overview'
      range={range}
      setRange={setRange}
      loading={loading}
      charts={[
        {
          data: chartData,
          title: 'Completed and Pending Tasks Over Time',
          lines: [
            {dataKey: Chart.PENDING, fill: '#fff', stroke: PALETTE.ERROR_MAIN},
            {dataKey: Chart.COMPLETED, fill: '#fff', stroke: PALETTE.PRIMARY_GREEN_DARK}
          ]
        },
        {
          data: chartData,
          title: 'Average Handling Time (AHT)',
          inSeconds: true,
          lines: [{dataKey: Chart.AHT, fill: '#fff', stroke: PALETTE.LINK}]
        },
        {
          data: chartData,
          title: 'Turn Around Time (TAT)',
          inSeconds: true,
          lines: [{dataKey: Chart.TAT, fill: '#fff', stroke: PALETTE.TEXT_MAIN}]
        },
        {
          data: chartData,
          title: 'Accuracy',
          inPercent: true,
          lines: [{dataKey: Chart.ACCURACY, fill: '#fff', stroke: PALETTE.PRIMARY_MAIN}]
        }
      ]}
    />
  )
}

export default OverviewContainer
