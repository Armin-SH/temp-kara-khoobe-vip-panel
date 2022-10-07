import React from 'react'
import TabletAccountingTable from './tablet'
import MobileAccountingTable from './mobile'
import {Media} from '@elements'

const AccountingTable = () => {

  return (
    <>
      <Media style={{width: '100%'}} lessThan={"md"}>
        <MobileAccountingTable/>
      </Media>
      <Media style={{width: '100%'}} greaterThan={"sm"}>
        <TabletAccountingTable/>
      </Media>
    </>
  )
}

export default AccountingTable;