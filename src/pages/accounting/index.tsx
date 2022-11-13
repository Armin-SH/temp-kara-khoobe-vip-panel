import React, {useEffect} from 'react'
import {Div} from '@elements'
import {AccountingTable} from '@screens/accounting'
import styles from '@styles/accounting/accounting.module.css'
import {useRouter} from "next/router";
import routes from "@routes";

const Accounting = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace(routes['route.request.present'])
  }, [])
  return (
    <Div className={styles.wrapper}>
      <AccountingTable/>
    </Div>
  )
}

export default Accounting