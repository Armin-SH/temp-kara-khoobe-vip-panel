import React from 'react'
import {Button, Div, Image, Text} from '@elements'
import styles from './tablet-report-table.module.css'
import {FilterIcon} from '@icons'

const tempData = [
  {
    request: 'گچکار',
    time: '12:30',
    date: '1401/5/10',
    quantity: '10',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '12:30',
    date: '1401/5/10',
    quantity: '10',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '12:30',
    date: '1401/5/10',
    quantity: '10',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '12:30',
    date: '1401/5/10',
    quantity: '10',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '12:30',
    date: '1401/5/10',
    quantity: '10',
    status: 'تسویه'
  }
]

const TabletReportTable = () => {

  return (
    <Div mobile={"column"} className={styles.container}>
      <Div className={styles.topContainer}>
        <Button color={"tertiary"} size={"small"} className={styles.filterButton}>
          <Div className={styles.filterContainer}>
            <Div className={styles.filter}>
              <Image src={FilterIcon} alt={"filter"}/>
            </Div>
            <Text color={'grey.500'}>
              فیلتر
            </Text>
          </Div>
        </Button>
        <Text color={"grey.500"} typography={"small"}>
          جدول عملکرد
        </Text>
      </Div>
      <Div className={styles.tableHeader}>
        <Div className={styles.rightHeader}>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            نوع درخواست
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            ساعت
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            تاریخ
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            تعداد
          </Text>
        </Div>
        <Div className={styles.leftHeader}>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            وضعیت
          </Text>
        </Div>
      </Div>
      {tempData.map((item, index) => (
        <Div key={index} className={styles.tableBody}>
          <Div className={styles.rightBody}>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.request}
            </Text>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.time}
            </Text>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.date}
            </Text>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.quantity}
            </Text>
          </Div>
          <Div className={styles.leftBody}>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.status}
            </Text>
          </Div>
        </Div>
      ))}
    </Div>
  )
}

export default TabletReportTable