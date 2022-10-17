import React from 'react'
import TableItem from './table-item'

const MobileAccountingTable = ({data, header, modal, modalAction}: { data: Array<any>, header: object, modal?: boolean, modalAction?: () => void }) => {

  const Keys = Object.keys(header)

  const Values = Object.values(header)

  return (
    <>
      {data.map((item, index) => (
        <TableItem
          modal={modal}
          modalAction={modalAction}
          keys={Keys}
          values={Values}
          key={index}
          item={item}
        />
      ))}
    </>
  )
}

export default MobileAccountingTable