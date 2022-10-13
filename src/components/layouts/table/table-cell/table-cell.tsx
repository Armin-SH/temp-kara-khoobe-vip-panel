import React from 'react'
import {Checkbox, Div} from '@elements'
import {TableCellProps} from './table-cell.props'
import styles from './table-cell.module.css'


const TableCell = ({data, id}: TableCellProps) => {

  if(id === 'selectRows') {
    return (
      <Div className={styles.container}>
        <Checkbox checked={false} />
      </Div>
    )
  }

  if(id === 'actions') {
    return (
      <Div className={styles.container}>
        ...
      </Div>
    )
  }

  return (
    <Div className={styles.container}>
      {data}
    </Div>
  )
}

export default TableCell;