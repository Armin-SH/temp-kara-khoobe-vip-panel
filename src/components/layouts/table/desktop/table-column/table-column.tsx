import React from 'react'
import {Div} from '@elements'
import {TableColumnProps} from './table-column.props'
import TableHeader from '../table-header'
import TableCell from '../table-cell'
import styles from './table-column.module.css'


const TableColumn = ({columnData, headerData, cellName}: TableColumnProps) => {


  if (cellName === 'selectRows') {
    return (
      <Div mobile={'column'} className={styles.container}>
        <TableHeader data={headerData}/>
        {columnData.map((item, index) => {
          return (
            <TableCell index={index} data={item} id={cellName} key={`column_${index}`}/>
          )
        })}
      </Div>
    )
  }

  if (cellName === 'actions') {
    return (
      <Div mobile={'column'} className={styles.container}>
        <TableHeader data={headerData}/>
        {columnData.map((item, index) => {
          return (
            <TableCell index={index} data={item} id={cellName} key={`column_${index}`}/>
          )
        })}
      </Div>
    )
  }

  if (cellName === 'expandable') {
    return (
      <Div mobile={'column'} className={styles.container}>
        <TableHeader data={headerData}/>
        {columnData.map((item, index) => {
          return (
            <TableCell index={index} data={item} id={cellName} key={`column_${index}`}/>
          )
        })}
      </Div>
    )
  }

  if (cellName === 'modal') {
    return (
      <Div mobile={'column'} className={styles.container}>
        <TableHeader data={'وضعیت'}/>
        {columnData.map((item, index) => {
          return (
            <TableCell index={index} data={'درخواست'} id={cellName} key={`column_${index}`}/>
          )
        })}
      </Div>
    )
  }

  return (
    <Div mobile={'column'} className={styles.container}>
      <TableHeader data={headerData}/>
      {columnData.map((item, index) => {
        return (
          <TableCell index={index} data={item} id={cellName} key={`column_${index}`}/>
        )
      })}
    </Div>
  )
}

export default TableColumn;