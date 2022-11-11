import {OrderActionTypes} from './order-actions';
import {OrderItemKeys, OrderItemProps, OrderReducerTypes, PaymentPeriodType} from "./order";
import moment from "moment";
import {convertDate} from "@utils";

enum PaymentPeriod {
  Daily = 'روزانه',
  Weekly = 'هفتگی',
  Monthly = 'ماهانه',
}

enum Status {
  Preparing = 'در حال آماده سازی',
  InProgress = 'در حال انجام',
  Succeed = 'تکمیل شده',
  Canceled = 'لغو شده',
}

const initialState: OrderReducerTypes = {
  orderList: [],
  orderListLoading: false,
  specialityCategoryList: [],
  specialityList: [],
  specialityLoading: false,
  specialityCategoryLoading: false,
  orderItem: {
    paymentPeriod: ' ',
    address: " ",
    endDate: moment().toISOString(),
    speciality: " ",
    startDate: '',
    specialistsNumber: '',
  },
  storeOrderError: true,
  specialityCategoryItem: " ",
  storeOrderLoading: false,
  live: true,
  page: 1,
  reOrderModal: false,
  originalOrderList: [],
  modalItem: {},
  extendedListLoading: false,
  tableList: [],
  lastPage: false,
  tablePage: 1,
};

function orderReducer(state = initialState, action: any) {
  switch (action.type) {

    case OrderActionTypes.GET_ORDER_LIST:
      return {
        ...state,
        orderListLoading: true,
        live: action?.data?.live,
        page: action?.data?.page,
      };

    case OrderActionTypes.SET_ORDER_LIST: {
      const tempOrderList = []
      const apiOrderList = action?.data?.orderList
      for (const key in apiOrderList) {
        const tempObject = {
          fullAddress: apiOrderList[key].address.fullAddress,
          addressTitle: apiOrderList[key].address.title,
          // @ts-ignore
          paymentPeriod: PaymentPeriod[apiOrderList[key].paymentPeriod],
          speciality: apiOrderList[key].speciality.title,
          startDate: convertDate(apiOrderList[key].startDate, 'LLLL'),
          // @ts-ignore
          state: Status[apiOrderList[key].state],
          specialistsNumber: `${apiOrderList[key].specialistsNumber} نفر`,
        }
        tempOrderList.push(tempObject)
      }

      return {
        ...state,
        orderListLoading: false,
        orderList: tempOrderList,
        page: action?.data?.page === 0 ? state.page : action?.data?.page,
        lastPage: action?.data?.page === 0,
        tablePage: action?.data?.page === 0 ? state.page : action?.data?.page,
        originalOrderList: apiOrderList,
        tableList: tempOrderList,
        extendedListLoading: false,
        storeOrderError: true,
      };
    }

    case OrderActionTypes.SET_PREVIOUS_PAGE: {
      const chunk = ((action?.deta?.page) * 13)
      return {
        ...state,
        tableList: state.orderList.slice(chunk, chunk + 13),
        tablePage: action?.data?.page,
      }
    }

    case OrderActionTypes.GET_EXTENDED_ORDER_LIST:
      return {
        ...state,
        extendedListLoading: true,
        live: action?.data?.live,
        page: action?.data?.page,
      }

    case OrderActionTypes.GET_SPECIALITY_CATEGORY:
      return {
        ...state,
        specialityCategoryLoading: true,
        specialityLoading: true,
      }

    case OrderActionTypes.SET_SPECIALITY_CATEGORY:
      return {
        ...state,
        specialityCategoryList: action?.data?.specialityCategoryList,
        specialityCategoryLoading: false,
        specialityLoading: false,
      }

    case OrderActionTypes.SET_ORDER_ITEM: {
      const key: OrderItemKeys = action?.data?.key
      const value: string | undefined | number | PaymentPeriodType = action?.data?.value
      const tempOrderItem: OrderItemProps = state.orderItem
      let error = true

      // @ts-ignore
      tempOrderItem[key] = value

      if (tempOrderItem.specialistsNumber && tempOrderItem.endDate && tempOrderItem.startDate && tempOrderItem.paymentPeriod !== " " && tempOrderItem.address !== " " && tempOrderItem.speciality !== " ") {
        error = false
      }

      return {
        ...state,
        orderItem: tempOrderItem,
        storeOrderError: error,
      }
    }

    case OrderActionTypes.SET_SPECIALITY_CATEGORY_VALUE:
      return {
        ...state,
        specialityList: initialState.specialityList,
        orderItem: {
          ...state.orderItem,
          speciality: ' ',
        },
        specialityCategoryItem: action?.data?.value,
        specialityLoading: true,
      }

    case OrderActionTypes.SET_SPECIALITY_LIST:
      return {
        ...state,
        specialityList: action?.data?.specialityList || [],
        specialityLoading: false,
      }

    case OrderActionTypes.STORE_ORDER_REQUEST:
      return {
        ...state,
        storeOrderLoading: true,
      }

    case OrderActionTypes.SET_INITIAL_ORDER:
      return {
        ...state,
        storeOrderLoading: false,
        orderItem: action?.data?.success ? initialState.orderItem : state.orderItem,
        specialityCategoryItem: action?.data?.success ? initialState.specialityCategoryItem : state.specialityCategoryItem,
      }

    case OrderActionTypes.SET_RE_ORDER_MODAL: {

      if (action?.data?.open) {
        const tempObject = state.orderList[action?.data?.index]
        const tempOriginalObject = state.originalOrderList[action?.data?.index]

        return {
          ...state,
          reOrderModal: true,
          orderItem: {
            address: ' ',
            specialistsNumber: tempOriginalObject.specialistsNumber,
            paymentPeriod: tempOriginalObject.paymentPeriod,
            startDate: '',
            endDate: moment(tempOriginalObject.endDate).toISOString(),
            speciality: tempOriginalObject.speciality._id,
          },
          storeOrderError: true,
          modalItem: tempObject
        }
      }

      return {
        ...state,
        reOrderModal: false,
        orderItem: {
          address: '',
          specialistsNumber: '',
          paymentPeriod: '',
          startDate: '',
          endDate: '',
          speciality: '',
        },
        modalItem: {}
      }
    }


    default:
      return state
  }
}

export default orderReducer;
