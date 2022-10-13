import React, {useContext} from 'react'
import {Div} from '@elements'
import TableColumn from '../table-column'
import styles from './table-body.module.css'
import {TableContext} from '../table'

const TableBody = () => {

  const context = useContext(TableContext)

  console.log(context)
  return (
    <Div className={styles.container}>
      <Div className={styles.headerBackground}/>
      {context.state.selectRows ? (
        <TableColumn headerData={'selectRows'} columnData={context.state?.data?.selectedRows} cellName={'selectRows'}/>
      ) : null}
      {context.state.cellKeys.map((item, index) => {
        return (
          // @ts-ignore
          <TableColumn headerData={context.state.header[index]} columnData={context.state.data[item]} cellName={item} key={`column_${index}`}/>
        )
      })}
      {context.state.actions ? (
        <TableColumn headerData={'actions'} columnData={context?.state.data?.selectedRows} cellName={'actions'}/>
      ) : null}
    </Div>
  )
}

export default TableBody;