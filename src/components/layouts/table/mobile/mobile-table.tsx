import React from 'react'
import TableItem from './table-item'

const MobileAccountingTable = ({data}: { data: Array<any> }) => {

  return (
    <>
      {data.map((item, index) => (
        <TableItem key={index} item={item}/>
      ))}
    </>
  )
}

export default MobileAccountingTable