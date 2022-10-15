import React from 'react'
import {Media} from '@elements'
import {TableProps} from './table.props'
import DesktopTable from './desktop'
import MobileTable from './mobile'

const Table = ({data = [], actions = false, selectRows = false, pagination = false, header = {}, expandable = false}: TableProps) => {


  return (
    <>
      <Media style={{width: '100%'}} greaterThan={'sm'}>
        <DesktopTable data={data} header={header} expandable={expandable} actions={actions} pagination={pagination} selectRows={selectRows}/>
      </Media>
      <Media style={{width: '100%'}} lessThan={"md"}>
        <MobileTable data={data}/>
      </Media>
    </>
  )
}

export default Table;