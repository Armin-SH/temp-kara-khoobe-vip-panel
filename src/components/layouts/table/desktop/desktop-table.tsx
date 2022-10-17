import React, {createContext, useReducer} from 'react'
import {Div, Image, Text} from '@elements'
import {TableProps, TableState} from './desktop-table.props'
import TableBody from './table-body'
import styles from './desktop-table.module.css'
import Pagination from '@mui/material/Pagination';
import {ArrowBottomIcon, ArrowTopIcon} from '@icons'

const defaultValue = {
  state: {
    selectAll: false,
    expandArray: [],
    showAction: {id: null, action: false},
    selectRows: false,
    cellKeys: [],
    expandable: false,
    data: {
      selectedRows: []
    },
    actions: false,
    pagination: false,
    header: [],
    length: 0,
    rows: 10,
    expandedItem: null,
    expandableHeader: '',
    expandKey: '',
    modalAction: () => {
    },
    modal: false
  },
  dispatch: function (p: { payload: any; type: string }) {
  }
}

export const TableContext = createContext(defaultValue)

const DesktopTable = (
  {
    data = [],
    actions = false,
    selectRows = false,
    pagination = false,
    header = {},
    expandable = false,
    expandableHeader = 'وضعیت درخواست',
    expandKey = '',
    modalAction = () => {
    },
    modal = false,
  }: TableProps) => {


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
  const initialState: TableState = {
    selectRows: selectRows,
    actions: actions,
    data: obj,
    pagination: pagination,
    header: Object.values(header),
    length: data.length,
    cellKeys: tempCellNames,
    expandArray: selectRowArray,
    showAction: {id: null, action: true},
    selectAll: false,
    rows: 10,
    expandedItem: null,
    expandable: expandable,
    expandableHeader: expandableHeader,
    expandKey: expandKey,
    modalAction: modalAction,
    modal: modal,
  };

  const reducer = (state: TableState, action: any) => {
    function newExpandFunction(value: boolean, index: number) {
      return value ? false : index === action?.payload?.id;
    }

    switch (action.type) {
      case "SELECT_ROW": {
        const tempSelectedRows = state.data?.selectedRows
        tempSelectedRows[action?.payload?.id] = action?.payload?.checked
        return {
          ...state,
          data: {...state.data, selectedRows: tempSelectedRows}
        }
      }
      case "SELECT_ALL": {
        return {
          ...state,
          selectAll: action.payload.select,
        }
      }
      case "SET_ACTION": {
        return {
          ...state,
          showAction: {id: action?.payload?.id, action: action?.payload?.showAction},
        }
      }
      case "SET_EXPAND": {
        const tempArray = state.expandArray.map(newExpandFunction);
        return {
          ...state,
          expandArray: tempArray,
          expandedItem: action?.payload?.expand ? action?.payload?.id : null,
        }
      }
      case "SET_ROWS": {
        return {
          ...state,
          rows: state.rows + action?.payload?.rows
        }
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRows = (value: number) => {
    if ((state.rows === 1 && value === -1) || (state.rows === data.length && value === +1)) {
      return null
    }
    return dispatch({type: 'SET_ROWS', payload: {rows: value}})
  }

  return (
    // @ts-ignore
    <TableContext.Provider value={{state: state, dispatch: dispatch}}>
      <Div mobile={"column"} className={styles.container}>
        <TableBody/>
        {pagination ? (
          <Div className={styles.paginationContainer}>
            <Div className={styles.paginationRightContainer}>
              <Div className={styles.button}>
                <Div className={styles.arrowContainer} mobile={"column"}>
                  <Div onClick={() => handleRows(+1)} className={styles.arrow}>
                    <Image src={ArrowTopIcon}/>
                  </Div>
                  <Div onClick={() => handleRows(-1)} className={styles.arrow}>
                    <Image src={ArrowBottomIcon}/>
                  </Div>
                </Div>
                <Text className={styles.rows} color={"common.white"} typography={"tiny"}>
                  {state.rows}
                </Text>
              </Div>
              <Text color={"grey.500"} typography={"tiny"}>
                مقدار نمایش
              </Text>
              <Text color={"grey.500"} typography={"tiny"}>
                {`( نمایش ${state.rows} از ${data.length} )`}
              </Text>
            </Div>
            <Pagination color={'primary'} count={25} shape={'rounded'}/>
          </Div>
        ) : null}
      </Div>
    </TableContext.Provider>
  )
}

export default DesktopTable;