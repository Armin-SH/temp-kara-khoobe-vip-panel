import React from 'react'
import {Div} from '@elements'
import {TableProps} from './table.props'
import TableBody from './table-body'
import styles from './table.module.css'


const Table = ({data, actions, selectRows, pagination, header}: TableProps) => {

  const cellNames = Object.keys(header)

  const obj : any = {};

  for (const key of cellNames) {
    obj[key] = [];
  }

  for (const arrayKey in data) {
    for (const objKey of cellNames) {
      //@ts-ignore
      obj[objKey].push(data[arrayKey][objKey])
    }
  }
  const headers = Object.values(header)


  return (
    <Div mobile={"column"} className={styles.container}>
      <TableBody actions={actions} length={data.length} selectRows={selectRows} bodyData={obj} cellNames={cellNames} headerData={headers}/>
      {pagination ? (
        <Div className={styles.paginationContainer}>

        </Div>
      ) : null}
    </Div>
  )
}

export default Table;