import {all, put, select, takeLatest} from "redux-saga/effects";
import {orderStore} from "./order-store";
import {OrderReducerTypes, SpecialityCategoryProps} from "./order";
import {orderListApi, specialitiesApi, specialityCategoryApi, storeOrderApi} from "@api/order";
import {OrderActionTypes} from "./order-actions";
import {AlertActionType} from "@store/alert/alert-action";
import Router from "next/router";
import routes from '@routes'


function* getSpecialityCategoryWatcher() {
  try {
    const response: { data: { categories: Array<SpecialityCategoryProps> } } = yield specialityCategoryApi();
    yield put({
      type: OrderActionTypes.SET_SPECIALITY_CATEGORY,
      data: {
        specialityCategoryList: response?.data?.categories,
      }
    })

  } catch (error) {
    yield put({type: OrderActionTypes.SET_SPECIALITY_CATEGORY})
    yield put({type: OrderActionTypes.GET_SPECIALITY_CATEGORY})
  }
}

function* getOrderSpecialitiesWatcher() {

  const {specialityCategoryItem}: OrderReducerTypes = yield select(orderStore);
  try {
    const response: { data: { specialitiesSummery: Array<SpecialityCategoryProps> } } = yield specialitiesApi({specialityCategory: specialityCategoryItem});
    yield put({
      type: OrderActionTypes.SET_SPECIALITY_LIST,
      data: {
        specialityList: response?.data?.specialitiesSummery,
      }
    })

  } catch (error) {
    yield put({type: OrderActionTypes.SET_SPECIALITY_LIST})
  }
}

function* storeOrderRequestWatcher() {

  const {orderItem, modalItem, live}: OrderReducerTypes = yield select(orderStore);
  try {
    const response: { data: { specialitiesSummery: Array<SpecialityCategoryProps> } } = yield storeOrderApi({orderItem: orderItem});
    yield put({type: OrderActionTypes.SET_INITIAL_ORDER, data: {success: true}})
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "سفارش شما با موفقیت ثبت شد",
      severity: "success"
    });
    if (modalItem) {
      yield put({
        type: OrderActionTypes.GET_ORDER_LIST,
        data: {
          page: 1,
          live: live,
        }
      })
      yield put({
        type: OrderActionTypes.SET_RE_ORDER_MODAL,
        data: {
          open: false,
        }
      })
    }
    yield Router.push(routes['route.request.present'])
  } catch (error) {
    yield put({type: OrderActionTypes.SET_SPECIALITY_LIST})
    yield put({type: OrderActionTypes.SET_INITIAL_ORDER, data: {success: false}})
  }
}

function* getOrderListWatcher() {

  const {page, live}: OrderReducerTypes = yield select(orderStore);
  try {
    const response: { data: { vipOrders: Array<any>, nextPage: number } } = yield orderListApi({page: page, live: live});
    yield put({
      type: OrderActionTypes.SET_ORDER_LIST,
      data: {
        orderList: response?.data?.vipOrders,
        page: response?.data?.nextPage
      }
    });
  } catch (error) {

  }
}


function* orderMiddleware() {
  yield all([
    takeLatest(OrderActionTypes.GET_SPECIALITY_CATEGORY, getSpecialityCategoryWatcher),
    takeLatest(OrderActionTypes.SET_SPECIALITY_CATEGORY_VALUE, getOrderSpecialitiesWatcher),
    takeLatest(OrderActionTypes.STORE_ORDER_REQUEST, storeOrderRequestWatcher),
    takeLatest(OrderActionTypes.GET_ORDER_LIST, getOrderListWatcher),
    takeLatest(OrderActionTypes.GET_EXTENDED_ORDER_LIST, getOrderListWatcher),
  ])
}

export default orderMiddleware;
