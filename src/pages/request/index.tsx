import React from 'react'
import {Div} from '@elements'
import {Table} from '@layouts'
import styles from '@styles/request/request.module.css'

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

const tempDataHeader = {name: 'مشخصات', mobile: 'شماره تماس', state: 'استان', speciality: 'دسته تخصص', payment: 'پرداختی (ریال)', status: 'وضعیت'}
const tempDataMobileHeader = {name: 'مشخصات', mobile: 'شماره تماس', state: 'استان', speciality: 'دسته تخصص', payment: 'پرداختی (ریال)', status: 'وضعیت'}
const Request = () => {

  return (
    <Div className={styles.wrapper}>
      <Table
        modal={false}
        expandable={true}
        actions={true}
        pagination={true}
        selectRows={true}
        header={tempDataHeader}
        data={tempData}
        mobileHeader={tempDataMobileHeader}
      />
    </Div>
  )
}

export default Request