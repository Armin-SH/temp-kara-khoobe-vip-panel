import React from 'react'
import {Div} from '@elements'
import TableColumn from '../table-column'
import styles from './table-body.module.css'
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

const TableBody = () => {
  const state = useSelector((state: ReducerTypes) => state.specialistTable);
  return (
    <Div className={styles.container}>
      <Div className={styles.headerBackground}/>
      {state?.selectRows ? (
        <TableColumn headerData={'selectRows'} columnData={state?.data?.selectedRows} cellName={'selectRows'}/>
      ) : null}
      {state?.cellKeys.map((item, index) => {
        return (
          // @ts-ignore
          <TableColumn headerData={state?.header[index]} columnData={state?.data[item]} cellName={item} key={`column_${index}`}/>
        )
      })}
      {state?.actions ? (
        <TableColumn headerData={'actions'} columnData={state?.data?.selectedRows} cellName={'actions'}/>
      ) : null}
    </Div>
  )
}

export default TableBody;