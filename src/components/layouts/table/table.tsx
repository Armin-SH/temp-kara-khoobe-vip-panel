import React from 'react'
import {Media} from '@elements'
import {TableProps} from './table.props'
import DesktopTable from './desktop'
import MobileTable from './mobile'
import {useDispatch, useSelector} from "react-redux";
import {OrderActions} from "@store/order/order-actions";
import {ReducerTypes} from "@store/reducer";


const Table = (
  {
    data = [],
    actions = false,
    selectRows = false,
    pagination = false,
    header = {},
    expandable = false,
    expandableHeader = 'جزئیات سفارش',
    expandKey = '',
    mobileHeader = {},
    modalAction = () => {
    },
    modal = false,
    expandableDataKey = []
  }: TableProps) => {

  const dispatch = useDispatch()
  const {live, page} = useSelector((state: ReducerTypes) => state.order);
  const nextPageHandler = (newPage: number) => {
    dispatch(OrderActions.getExtendedOrderList({live: live, page: newPage}))
  }

  const previousPageHandler = (newPage: number) => {
    dispatch(OrderActions.getExtendedOrderList({live: live, page: newPage}))
  }

  return (
    <>
      <Media style={{width: '100%'}} greaterThan={'sm'}>
        <DesktopTable
          nextCallback={nextPageHandler}
          previousCallback={previousPageHandler}
          expandableDataKey={expandableDataKey}
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
          page={page}
        />
      </Media>
      <Media style={{width: '100%'}} lessThan={"md"}>
        <MobileTable modal={modal} modalAction={modalAction} header={mobileHeader} data={data}/>
      </Media>
    </>
  )
}

export default Table;