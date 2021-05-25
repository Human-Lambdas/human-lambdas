import React, {useCallback} from 'react'
import dayjs from 'dayjs'
import {
  LineChart,
  XAxis,
  YAxis,
  // Legend,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import {PALETTE} from 'styles/palette'
import LoadingComponent from 'components/LoadingComponent'
import cutOffString from '../../universal/utils/cutOffString'

interface Props {
  height?: number
  width?: number
  data: any
  xAxis: string
  lines: any
  loading?: boolean
  inSeconds?: boolean // Y-Axis is in seconds
  inPercent?: boolean // Y-Axis is in %
}

const contentStyle = {
  borderRadius: 4
}

const labelStyle = {
  fontWeight: 600,
  color: PALETTE.TEXT_MAIN
}

const itemStyle = {
  fontSize: 13,
  textAlign: 'left'
}

const Chart = (props: Props) => {
  const {data = [], lines = [], xAxis, inSeconds, loading, inPercent} = props
  const xTicks = data.map((f) => f[xAxis]).slice(1, data.length)
  
  let max = 0

  const formatAxis = useCallback(
    (t, dec = 0) => {
      if (inPercent) return `${t*100}%`
      if (t > max) max = t
      if (max > 9999) {
        return `${(t / 3600).toFixed(dec)}hr`
      } else {
        return `${t.toFixed(dec)}s`
      }
    },
    [data, lines, xAxis, inSeconds, inPercent]
  )

  return (
    <ResponsiveContainer height={250}>
      {loading ? (
        <LoadingComponent height={250} />
      ) : (
        <LineChart key={lines} data={data} margin={{left: 12, right: 10, top: 5}}>
          <CartesianGrid vertical={false} stroke={PALETTE.BORDER_GRAY} />
          <XAxis
            dataKey={xAxis}
            type='category'
            tick={{fontSize: 11, fill: PALETTE.TEXT_MAIN, fontWeight: 600}}
            axisLine={{stroke: PALETTE.BORDER_MAIN_GRAY, strokeWidth: 2}}
            tickFormatter={(tick) => dayjs(tick).format(data.length > 13 ? 'DD/MM' : 'MM/YY')}
            ticks={xTicks}
            scale={'point'}
          />
          <YAxis
            tick={{fontSize: 11, fill: PALETTE.TEXT_MAIN, fontWeight: 600}}
            width={40}
            axisLine={{stroke: PALETTE.BORDER_MAIN_GRAY}}
            type={'number'}
            tickFormatter={(tick) => ((inSeconds || inPercent) ? formatAxis(tick) : tick)}
          />
          <Tooltip
            contentStyle={contentStyle}
            labelFormatter={(label) => dayjs(label).format('DD-MM-YYYY')}
            formatter={(value, name) => [
              (inSeconds || inPercent) ? formatAxis(value, 2) : value,
              cutOffString(name, 60).toUpperCase()
            ]}
            labelStyle={labelStyle}
            itemStyle={itemStyle}
          />
          {/* <Legend iconType='circle' iconSize={12} /> */}
          {lines.map((l, idx) => (
            <Line connectNulls
              strokeWidth={1.5}
              // dot={false}
              key={idx}
              type={'monotone'}
              dataKey={l.dataKey}
              stroke={l.stroke}
              fill={'#fff'}
            />
          ))}
        </LineChart>
      )}
    </ResponsiveContainer>
  )
}

export default Chart
