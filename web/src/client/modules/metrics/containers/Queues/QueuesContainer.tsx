import React, {useEffect, useState} from 'react'
import qs from 'qs'
import Charts from '../../components/Charts/Charts'
import useNetworker from 'hooks/useNetworker'
import {Chart} from 'utils/constants'
import LoadingPage from 'components/LoadingPage'

const QueuesContainer = (props) => {
  const {queues, setActive, queueIds, user} = props
  const [chartData, setChartData] = useState({})
  const [range, setRange] = useState('weekly')
  const [loading, setLoading] = useState(false)
  const orgId = user.current_organization_id
  const networker = useNetworker()

  useEffect(() => {
    async function fetchQueues() {
      setLoading(true)
      const type = [Chart.COMPLETED, Chart.AHT, Chart.PENDING, Chart.TAT, Chart.ACCURACY]
      const {data} = await networker.httpHandler(`/orgs/${orgId}/metrics/queues`, {
        method: 'GET',
        params: {range, type, queue_id: queueIds},
        paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
        data: {range, type, queue_id: queueIds}
      })
      setChartData(data)
      setLoading(false)
    }

    fetchQueues()
  }, [range, queueIds])

  let renderComp
  const {completed, pending, aht, tat, accuracy}: any = chartData

  const charts = [
    {data: completed, title: 'Completed Tasks Over Time', lines: queues},
    {data: pending, title: 'Pending Tasks Over Time', lines: queues},
    {data: aht, title: 'Average Handling Time (AHT)', inSeconds: true, lines: queues},
    {data: tat, title: 'Turn Around Time (TAT)', inSeconds: true, lines: queues},
    {data: accuracy, title: 'Accuracy', inPercent: true, lines: queues}
  ]

  if (completed && pending && aht && tat && accuracy) {
    renderComp = (
      <Charts
        filterMenu={true}
        loading={loading}
        lines={queues}
        charts={charts}
        range={range}
        setRange={setRange}
        setActive={setActive}
        title={'Queue Performance'}
      />
    )
  } else {
    renderComp = <LoadingPage />
  }

  return renderComp
}

export default QueuesContainer
