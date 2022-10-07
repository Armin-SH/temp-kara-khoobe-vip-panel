import React, {useState} from 'react'
import {Checkbox, Div, Text} from '@elements'
import styles from './tablet-accounting-table.module.css'

const tempData = [
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
]

const TabletAccountingTable = () => {
  const [checkbox, setCheckbox] = useState(false)

  const handleCheckbox = () => {
    setCheckbox(prevState => !prevState)
  }
  return (
    <Div mobile={"column"} className={styles.container}>
      <Div className={styles.topContainer}>
        <Text type={'bold'} color={"grey.900"} typography={"medium"}>
          تراکنش ها
        </Text>
      </Div>
      <Div className={styles.tableHeader}>
        <Div className={styles.rightHeader}>
          <Checkbox onClick={handleCheckbox} color={'primary'} checked={checkbox}/>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            مشخصات
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            شماره تماس
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            استان
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            دسته تخصص
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            پرداختی (ریال)
          </Text>
          <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.900"}>
            وضعیت
          </Text>
        </Div>
      </Div>
      {tempData.map((item, index) => (
        <Div key={index} className={styles.tableBody}>
          <Div className={styles.rightBody}>
            <Checkbox onClick={handleCheckbox} color={'primary'} checked={checkbox}/>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.name}
            </Text>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.mobile}
            </Text>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.state}
            </Text>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.speciality}
            </Text>
            <Text className={styles.cell} type={"bold"} typography={"tiny"} color={"grey.500"}>
              {item.payment}
            </Text>
            <Text className={`${styles.cell} ${styles.status}`} type={"bold"} typography={"tiny"} color={"common.white"}>
              {item.status}
            </Text>
          </Div>
        </Div>
      ))}
    </Div>
  )
}

export default TabletAccountingTable