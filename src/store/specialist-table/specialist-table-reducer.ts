import {SpecialistTableActionTypes} from './specialist-table-actions';
import {SpecialistTableReducerTypes} from "./specialist-table";


const initialState: SpecialistTableReducerTypes = {
  selectRows: false,
  actions: false,
  data: [],
  pagination: false,
  header: [],
  length: 0,
  cellKeys: [],
  showAction: {id: null, action: true},
  selectAll: false,
};

function specialistTableReducer(state = initialState, action: any) {
  switch (action.type) {
    case SpecialistTableActionTypes.SET_DATA: {
      const tempData = action.data.data
      const tempCellNames: Array<string> = Object.keys(action.data.header)

      const obj: any = {};

      for (const key of tempCellNames) {
        obj[key] = [];
      }

      for (const arrayKey in tempData) {
        for (const objKey of tempCellNames) {
          //@ts-ignore
          obj[objKey].push(tempData[arrayKey][objKey])
        }
      }
      const tempExpandableParentData = []

      for (const headerKey in action.data.expandableDataKey) {
        const tempExpendableData = []
        for (const dataKey in tempData) {
          // @ts-ignore
          tempExpendableData.push(tempData[dataKey][action.data.expandableDataKey[headerKey].key])
        }
        tempExpandableParentData.push(tempExpendableData)
      }

      const selectRowArray = new Array(tempData.length)
      for (let i = 0; i < tempData.length; i++) {
        selectRowArray[i] = false
      }

      obj['selectedRows'] = selectRowArray
      return {
        selectRows: action.data.selectRows,
        actions: action.data.actions,
        data: obj,
        pagination: action.data.pagination,
        header: Object.values(action.data.header),
        length: tempData.length,
        cellKeys: tempCellNames,
        expandArray: selectRowArray,
        showAction: {id: null, action: true},
        selectAll: false,
        rows: 10,
        expandedItem: null,
        expandable: action.data.expandable,
        expandableHeader: action.data.expandableHeader,
        expandKey: action.data.expandKey,
        modalAction: action.data.modalAction,
        modal: action.data.modal,
        expandableData: tempExpandableParentData,
        expandableDataKey: action.data.expandableDataKey,
      }
    }
    case SpecialistTableActionTypes.SELECT_ROW: {
      const tempSelectedRows = state.data?.selectedRows
      tempSelectedRows[action?.data?.id] = action?.data?.checked
      return {
        ...state,
        data: {...state.data, selectedRows: tempSelectedRows}
      }
    }
    case SpecialistTableActionTypes.SELECT_ALL: {
      return {
        ...state,
        selectAll: action.data.select,
      }
    }
    case SpecialistTableActionTypes.SET_ACTION: {
      return {
        ...state,
        showAction: {id: action?.data?.id, action: action?.data?.showAction},
      }
    }

    default:
      return state
  }
}

export default specialistTableReducer;
