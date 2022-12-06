import React from 'react'
import {Media} from '@elements'
import {TableProps} from './table.props'
import DesktopTable from './desktop'
import MobileTable from './mobile'


const Table = (
  {
    data = [],
    actions = false,
    selectRows = false,
    header = {},
    mobileHeader = {},
  }: TableProps) => {


  return (
    <>
      <Media style={{width: '100%'}} greaterThan={'sm'}>
        <DesktopTable
          data={data}
          header={header}
          actions={actions}
          selectRows={selectRows}
        />
      </Media>
      <Media style={{width: '100%'}} lessThan={"md"}>
        <MobileTable
          header={mobileHeader}
          data={data}
        />
      </Media>
    </>
  )
}

export default Table;