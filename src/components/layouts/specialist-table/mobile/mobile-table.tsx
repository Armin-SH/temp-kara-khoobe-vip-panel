import React from 'react'
import TableItem from './table-item'
import styles from './mobile-table.module.css'
import {Button, Div, LoadingIndicator, Text} from '@elements'
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";


const MobileAccountingTable = ({data, header}: { data: Array<any>, header: object }) => {
  const Keys = Object.keys(header)

  const Values = Object.values(header)


  return (
    <Div mobile={'column'} className={styles.tableWrapper}>
      {data.map((item, index) => (
        <TableItem
          keys={Keys}
          values={Values}
          index={index}
          key={index}
          item={item}
        />
      ))}
    </Div>
  )
}

export default MobileAccountingTable