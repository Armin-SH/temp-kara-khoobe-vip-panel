import React from 'react'
import {Div} from '@elements'
import {AccountingTable} from '@screens/accounting'
import styles from '@styles/accounting/accounting.module.css'

const Accounting = () => {
  return (
    <Div className={styles.wrapper}>
      <AccountingTable/>
    </Div>
  )
}

export default Accounting