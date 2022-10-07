import React from 'react'
import TabletReportTable from './tablet'
import MobileReportTable from './mobile'
import {Media} from '@elements'

const ReportTable = () => {

  return (
    <>
      <Media style={{width: '100%'}} lessThan={"md"}>
        <MobileReportTable/>
      </Media>
      <Media style={{width: '100%'}} greaterThan={"sm"}>
        <TabletReportTable/>
      </Media>
    </>
  )
}

export default ReportTable;