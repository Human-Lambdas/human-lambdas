import React, {useEffect, useState} from 'react'
import qs from 'qs'
import Charts from '../../components/Charts/Charts'
import useNetworker from 'hooks/useNetworker'
import {Chart} from 'utils/constants'
import LoadingPage from 'components/LoadingPage'

const WorkersContainer = (props) => {
  const {setActiveUsers, users, userIds, user} = props
  const [chartData, setChartData] = useState({})
  const [range, setRange] = useState('weekly')
  const [loading, setLoading] = useState(false)
  const orgId = user.current_organization_id
  const networker = useNetworker()

  useEffect(() => {
    async function fetchWorkers() {
      setLoading(true)

      const type = [Chart.COMPLETED, Chart.AHT, Chart.ACCURACY]
      const {data} = await networker.httpHandler(`/orgs/${orgId}/metrics/workers`, {
        method: 'GET',
        params: {
          range,
          type,
          worker_id: userIds
        },
        paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
        data: {range, type, worker_id: userIds}
      })

      setChartData(data)

      setLoading(false)
    }

    fetchWorkers()
  }, [range, userIds])

  let renderComp
  const {completed, aht, accuracy} = chartData || {}
  const charts = [
    {data: completed, title: 'Completed Tasks Over Time', lines: users},
    {data: aht, title: 'Average Handling Time (AHT)', inSeconds: true, lines: users},
    {data: accuracy, title: 'Accuracy', inPercent: true, lines: users}
  ]

  if (completed && aht && accuracy) {
    renderComp = (
      <Charts
        loading={loading}
        filterMenu={true}
        charts={charts}
        range={range}
        setRange={setRange}
        setActive={setActiveUsers}
        lines={users}
        title={'Worker Performance'}
      />
    )
  } else {
    renderComp = <LoadingPage />
  }

  return renderComp
}

export default WorkersContainer
