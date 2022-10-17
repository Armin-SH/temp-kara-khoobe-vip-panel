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
    pagination = false,
    header = {},
    expandable = false,
    expandableHeader = 'وضعیت درخواست',
    expandKey = '',
    mobileHeader = {},
    modalAction = () => {
    },
    modal = false,
  }: TableProps) => {


  return (
    <>
      <Media style={{width: '100%'}} greaterThan={'sm'}>
        <
          DesktopTable
          modal={modal}
          modalAction={modalAction}
          expandKey={expandKey}
          expandableHeader={expandableHeader}
          data={data}
          header={header}
          expandable={expandable}
          actions={actions}
          pagination={pagination}
          selectRows={selectRows}
        />
      </Media>
      <Media style={{width: '100%'}} lessThan={"md"}>
        <MobileTable modal={modal} modalAction={modalAction} header={mobileHeader} data={data}/>
      </Media>
    </>
  )
}

export default Table;