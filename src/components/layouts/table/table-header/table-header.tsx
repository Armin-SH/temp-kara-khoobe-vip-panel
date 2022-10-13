import React from 'react'
import {Div, Checkbox} from '@elements'
import {TableHeaderProps} from './table-header.props'
import styles from './table-header.module.css'


const TableHeader = ({data}: TableHeaderProps) => {

  if (data === 'selectRows') {
    return (
    <Div className={styles.container}>
      <Checkbox checked={false} />
    </Div>
    )
  }

  if (data === 'actions') {
    return (
      <Div className={styles.container}>
       اقدامات
      </Div>
    )
  }

  return (
    <Div className={styles.container}>
      {data}
    </Div>
  )
}

export default TableHeader;