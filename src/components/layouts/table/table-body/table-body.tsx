import React from 'react'
import {Div} from '@elements'
import {TableBodyProps} from './table-body.props'
import TableColumn from '../table-column'
import styles from './table-body.module.css'


const TableBody = ({bodyData, headerData, cellNames, selectRows, length, actions}: TableBodyProps) => {
  const selectRowArray = new Array(length)
  for (let i = 0; i < length; i++) {
    selectRowArray[i] = false
  }
  console.log(selectRowArray)
  return (
    <Div className={styles.container}>
      <Div className={styles.headerBackground}/>
      {selectRows ? (
        <TableColumn headerData={'selectRows'} columnData={selectRowArray} cellName={'selectRows'}/>
      ) : null}
      {cellNames.map((item, index) => {
        return (
          // @ts-ignore
          <TableColumn headerData={headerData[index]} columnData={bodyData[item]} cellName={item} key={`column_${index}`}/>
        )
      })}
      {actions ? (
        <TableColumn headerData={'actions'} columnData={selectRowArray} cellName={'actions'}/>
      ) : null}
    </Div>
  )
}

export default TableBody;