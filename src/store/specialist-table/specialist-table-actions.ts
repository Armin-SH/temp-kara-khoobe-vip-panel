const preType = 'SPECIALIST_TABLE_';
import {PropsType} from './specialist-table'

export const SpecialistTableActionTypes = {
  SET_DATA: `${preType}SET_DATA`,
  SELECT_ROW: `${preType}SELECT_ROW`,
  SELECT_ALL: `${preType}SELECT_ALL`,
  SET_ACTION: `${preType}SET_ACTION`,
};

const setData = (data: PropsType) => ({type: SpecialistTableActionTypes.SET_DATA, data: data});
const selectAll = (data: { select: boolean }) => ({type: SpecialistTableActionTypes.SELECT_ALL, data: data})
const setAction = (data: { showAction: boolean, id: number }) => ({type: SpecialistTableActionTypes.SET_ACTION, data: data})
const selectRow = (data: { id: number, checked: boolean }) => ({type: SpecialistTableActionTypes.SELECT_ROW, data: data})


export const SpecialistTableActions = {
  setData: setData,
  selectAll: selectAll,
  setAction: setAction,
  selectRow: selectRow,
};
