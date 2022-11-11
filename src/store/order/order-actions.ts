import {OrderItemKeys} from './order'

const preType = 'ORDER_';

export const OrderActionTypes = {
  GET_ORDER_LIST: `${preType}GET_ORDER_LIST`,
  SET_ORDER_LIST: `${preType}SET_ORDER_LIST`,
  GET_SPECIALITY_CATEGORY: `${preType}GET_SPECIALITY_CATEGORY`,
  GET_ORDER_SPECIALITIES: `${preType}GET_ORDER_SPECIALITIES`,
  SET_SPECIALITY_CATEGORY: `${preType}SET_SPECIALITY_CATEGORY`,
  SET_ORDER_ITEM: `${preType}SET_ORDER_ITEM`,
  SET_SPECIALITY_CATEGORY_VALUE: `${preType}SET_SPECIALITY_CATEGORY_VALUE`,
  SET_SPECIALITY_LIST: `${preType}SET_SPECIALITY_LIST`,
  STORE_ORDER_REQUEST: `${preType}STORE_ORDER_REQUEST`,
  SET_INITIAL_ORDER: `${preType}SET_INITIAL_ORDER`,
  SET_RE_ORDER_MODAL: `${preType}SET_RE_ORDER_MODAL`,
  GET_EXTENDED_ORDER_LIST: `${preType}GET_EXTENDED_ORDER_LIST`,
  SET_PREVIOUS_PAGE: `${preType}SET_PREVIOUS_PAGE`,
};

const getOrderList = (data: { live: boolean, page: number }) => ({type: OrderActionTypes.GET_ORDER_LIST, data: data});
const getSpecialityCategory = () => ({type: OrderActionTypes.GET_SPECIALITY_CATEGORY})
const setOrderItem = (data: { key: OrderItemKeys, value: string | number | undefined }) => ({type: OrderActionTypes.SET_ORDER_ITEM, data: data})
const setSpecialityCategoryValue = (data: { value: string }) => ({type: OrderActionTypes.SET_SPECIALITY_CATEGORY_VALUE, data: data})
const storeOrderRequest = () => ({type: OrderActionTypes.STORE_ORDER_REQUEST})
const setInitialOrder = (data: { success: boolean }) => ({type: OrderActionTypes.SET_INITIAL_ORDER, data: data})
const setReOrderModal = (data: { open: boolean, index?: number }) => ({type: OrderActionTypes.SET_RE_ORDER_MODAL, data: data})
const getExtendedOrderList = (data: { live: boolean, page: number }) => ({type: OrderActionTypes.GET_EXTENDED_ORDER_LIST, data: data})
const setPreviousPage = (data: { page: number }) => ({type: OrderActionTypes.SET_PREVIOUS_PAGE, data: data})

export const OrderActions = {
  getOrderList: getOrderList,
  getSpecialityCategory: getSpecialityCategory,
  setOrderItem: setOrderItem,
  setSpecialityCategoryValue: setSpecialityCategoryValue,
  storeOrderRequest: storeOrderRequest,
  setInitialOrder: setInitialOrder,
  setReOrderModal: setReOrderModal,
  getExtendedOrderList: getExtendedOrderList,
  setPreviousPage: setPreviousPage,
};
