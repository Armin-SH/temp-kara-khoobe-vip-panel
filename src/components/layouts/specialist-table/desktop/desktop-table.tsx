import React, {useEffect} from 'react'
import {Div} from '@elements'
import {TableProps} from './desktop-table.props'
import TableBody from './table-body'
import styles from './desktop-table.module.css'
import {useDispatch} from "react-redux";
import {SpecialistTableActions} from "@store/specialist-table/specialist-table-actions";

const DesktopTable = (
  {
    data = [],
    actions = false,
    selectRows = false,
    header = {},
  }: TableProps) => {

  const dispatch = useDispatch()


  useEffect(() => {
    if (data && data.length) {
      dispatch(SpecialistTableActions.setData({
        data: data,
        actions: actions,
        selectRows: selectRows,
        header: header,
      }))
    }
  }, [data])

  return (
    <Div mobile={"column"} className={styles.container}>
      <TableBody/>
    </Div>
  )
}

export default DesktopTable;