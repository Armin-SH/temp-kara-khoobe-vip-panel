import React from 'react'
import {Div} from '@elements'
import {Table} from '@layouts'
import styles from './request-list.module.css'
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";


const RequestList = () => {
  const {tableList} = useSelector((state: ReducerTypes) => state.order);


  const tempDataHeader = {speciality: 'تخصص', startDate: 'تاریخ مورد نیاز', state: 'وضعیت سفارش'}
  const tempDataHeaderMobile = {speciality: 'تخصص', paymentPeriod: 'دوره پرداخت', startDate: 'تاریخ مورد نیاز', state: 'وضعیت سفارش', specialistsNumber: 'تعداد متخصصین', fullAddress: 'آدرس'}

  return (
    <Div className={styles.wrapper}>
      <Table
        expandableDataKey={[{key: 'fullAddress', value: 'آدرس'}, {key: 'paymentPeriod', value: 'دوره پرداخت'}, {key: 'specialistsNumber', value: 'تعداد متخصصین'}]}
        modal={false}
        expandable={true}
        actions={true}
        pagination={true}
        header={tempDataHeader}
        data={tableList}
        mobileHeader={tempDataHeaderMobile}
      />
    </Div>
  )

}

export default RequestList;