'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import style from './chart.module.scss'

const data = [
  { name: '1 Авг', value: 2 },   
  { name: '5 Авг', value: 4 },   
  { name: '10 Авг', value: 4 },  
  { name: '15 Авг', value: 7 },  
  { name: '20 Авг', value: 7 },  
  { name: '25 Авг', value: 5 },  
  { name: '1 Сен', value: 5 }    
]

const CustomYAxisTick = ({ x, y, payload }: any) => (
  <text x={x - 10} y={y} fill="#fff" fontSize={13} textAnchor="end" fontFamily='Lato-Bold'>
    {payload.value}
  </text>
)

const CustomXAxisTick = ({ x, y, payload }: any) => (
  <text x={x} y={y + 10} fill="#fff" fontSize={13} textAnchor="middle" fontFamily='Lato-Regular'>
    {payload.value}
  </text>
)

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className={style.tooltip}>
        {payload[0].value}
      </div>
    )
  }
  return null
}

const Chart = () => {
  return (
    <div className={style.chartContainer}>
      <div className={style.header}>
        <h2 className={style.title}>Бронирования</h2>
        <p className={style.subtitle}>
          <span className={style.divider} />
          Количество бронирований, шт.
        </p>
      </div>

      <div className={style.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false}
              stroke="rgba(255,255,255,0.3)"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={<CustomXAxisTick />}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 2, 4, 6, 8, 10]}
              domain={[0, 10]}
              tick={<CustomYAxisTick />}
              width={30}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={false}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="#FFFFFF"
              strokeWidth={2}
              dot={false}
              activeDot={{ stroke: '#fff', strokeWidth: 2, r: 4 }}
              connectNulls
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart