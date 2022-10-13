import React, {createContext, useReducer} from 'react'
import {Div} from '@elements'
import {TableProps} from './table.props'
import TableBody from './table-body'
import styles from './table.module.css'

const defaultValue = {
  state: {},
  dispatch: function (p: { payload: any; type: string }) {

  }
}

export const TableContext = createContext(defaultValue)

const Table = ({data = [], actions = false, selectRows = false, pagination = false, header = {}}: TableProps) => {


  const tempCellNames: Array<string> = Object.keys(header)

  const obj: any = {};

  for (const key of tempCellNames) {
    obj[key] = [];
  }

  for (const arrayKey in data) {
    for (const objKey of tempCellNames) {
      //@ts-ignore
      obj[objKey].push(data[arrayKey][objKey])
    }
  }

  const selectRowArray = new Array(data.length)
  for (let i = 0; i < data.length; i++) {
    selectRowArray[i] = false
  }

  obj['selectedRows'] = selectRowArray
  const initialState = {
    selectRows: selectRows,
    actions: actions,
    data: obj,
    pagination: pagination,
    header: Object.values(header),
    length: data.length,
    cellKeys: tempCellNames,
    expandArray: []
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SELECT_ROW": {
        const tempSelectedRows = state.data.selectedRows
        tempSelectedRows[action?.payload?.id] = action?.payload?.checked
        return {
          ...state,
          data: {...state.data, selectedRows: tempSelectedRows}
        }
      }
      case "SET_EXPAND": {
        console.log(action)
        const position = state.expandArray.indexOf(action?.payload?.id)
        return {
          ...state,
          expandArray: position === -1 ? [...state.expandArray, action?.payload?.id] : state.expandArray.splice(position, 1)
        }
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  return (
    // @ts-ignore
    <TableContext.Provider value={{state: state, dispatch: dispatch}}>
      <Div mobile={"column"} className={styles.container}>
        <TableBody/>
        {pagination ? (
          <Div className={styles.paginationContainer}>

          </Div>
        ) : null}
      </Div>
    </TableContext.Provider>
  )
}

export default Table;