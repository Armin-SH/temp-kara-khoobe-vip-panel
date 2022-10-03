import React from 'react'
import {Div} from '@elements'
import styles from '@styles/home/reports.module.css'
import {Cell, Pie, PieChart} from 'recharts';

const data = [
  {name: 'Group A', value: 200},
  {name: 'Group B', value: 200},
  {name: 'Group C', value: 200},
  {name: 'Group D', value: 200},
  {name: 'Group E', value: 200},
  {name: 'Group F', value: 200},
  {name: 'Group G', value: 200},
  {name: 'Group H', value: 200},
  {name: 'Group I', value: 200},
  {name: 'Group J', value: 200},
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Reports = () => {


  return (
    <Div mobile={"column"}>
      <Div className={styles.topContainer} desktop={"row-reverse"} tablet={"column"} mobile={"column"}>
        <Div className={styles.performanceContainer}>
          <PieChart width={318} height={368}>
            <Pie
              data={data}
              cx={159}
              width={250}
              height={250}
              cy={184}
              startAngle={225}
              endAngle={-45}
              innerRadius={65}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
          </PieChart>
        </Div>
        <Div className={styles.chartContainer}>

        </Div>
      </Div>
      <Div>
      </Div>
    </Div>
  )
}

export default Reports