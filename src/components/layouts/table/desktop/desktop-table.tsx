import React, {createContext, useEffect, useReducer} from 'react'
import {Button, Div, LoadingIndicator, Text} from '@elements'
import {TableProps, TableState} from './desktop-table.props'
import TableBody from './table-body'
import styles from './desktop-table.module.css'
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

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
    expandableData: [[]],
    expandableDataKey: [],
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
    expandableDataKey = [],
    previousCallback = (page: number) => {
    },
    nextCallback = (page: number) => {
    },
    page = 1
  }: TableProps) => {
  const {lastPage, extendedListLoading} = useSelector((state: ReducerTypes) => state.order);


  const initialState: TableState = {
    selectRows: false,
    actions: false,
    data: [],
    pagination: false,
    header: [],
    length: 0,
    cellKeys: [],
    expandArray: [],
    showAction: {id: null, action: true},
    selectAll: false,
    rows: 1,
    expandedItem: null,
    expandable: false,
    expandableHeader: '',
    expandKey: '',
    modalAction: () => {
    },
    modal: false,
    expandableData: [],
    expandableDataKey: [],
    page: 1,
  };

  const reducer = (state: TableState, action: any) => {
    function newExpandFunction(value: boolean, index: number) {
      return value ? false : index === action?.payload?.id;
    }

    switch (action.type) {
      case "SET_DATA": {
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
        const tempExpandableParentData = []

        for (const headerKey in expandableDataKey) {
          const tempExpendableData = []
          for (const dataKey in data) {
            // @ts-ignore
            tempExpendableData.push(data[dataKey][expandableDataKey[headerKey].key])
          }
          tempExpandableParentData.push(tempExpendableData)
        }

        const selectRowArray = new Array(data.length)
        for (let i = 0; i < data.length; i++) {
          selectRowArray[i] = false
        }

        obj['selectedRows'] = selectRowArray
        return {
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
          expandableData: tempExpandableParentData,
          expandableDataKey: expandableDataKey,
          page: lastPage ? page : page - 1,
        }
      }

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

      case "SET_PAGE": {
        return {
          ...state,
          page: action?.payload?.page
        }
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({type: 'SET_DATA'})
  }, [data])

  const handleNextPage = () => {
    nextCallback(state.page + 1)
    dispatch({type: 'SET_PAGE', payload: {page: state.page + 1}})
  }

  const handlePreviousPage = () => {
    previousCallback(state.page - 1)
    dispatch({type: 'SET_PAGE', payload: {page: state.page - 1}})
  }

  return (
    // @ts-ignore
    <TableContext.Provider value={{state: state, dispatch: dispatch}}>
      <Div mobile={"column"} className={styles.container}>
        <TableBody/>
        {pagination ? (
          <Div className={styles.paginationContainer}>
            <Button loading={extendedListLoading} disabled={extendedListLoading || lastPage} onClick={handleNextPage} size={'medium'} className={styles.paginationButton}>
              صفحه بعد
            </Button>
            {extendedListLoading ? (
              <LoadingIndicator size={'28px'} color={'primary'}/>
            ) : (
              <Text typography={'medium'} type={'bold'} color={'primary'}>
                {state.page}
              </Text>
            )}
            <Button loading={extendedListLoading} disabled={extendedListLoading || !lastPage && page === 2} onClick={handlePreviousPage} size={'medium'} className={styles.paginationButton}>
              صفحه قبل
            </Button>
          </Div>
        ) : null}
      </Div>
    </TableContext.Provider>
  )
}

export default DesktopTable;