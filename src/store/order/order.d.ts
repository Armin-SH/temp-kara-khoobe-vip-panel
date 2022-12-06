export interface OrderReducerTypes {
  orderList: Array<any>

  orderListLoading: boolean

  specialityCategoryList: Array<any>

  specialityList: Array<any>

  specialityLoading: boolean

  specialityCategoryLoading: boolean

  orderItem: OrderItemProps

  specialityCategoryItem: string

  storeOrderLoading: boolean

  page: number

  live: boolean

  reOrderModal: boolean

  originalOrderList: Array<any>

  modalItem: any

  extendedListLoading: boolean

  tableList: Array<any>

  lastPage: boolean

  tablePage: number

  storeOrderError: boolean

  cancelOrderId: string

  cancelOrderLoading: boolean

  hasChildren: boolean

  subSpecialityList: Array<any>,

  subSpecialityItem: string,

  subSpecialityLoading: boolean,

  specialistOrderId: string

  specialistListLoading: boolean

  orderSpecialist: Array<any>
}

export interface SpecialityCategoryProps {
  title: string

  _id: string
}

export interface OrderItemProps {
  address: string
  speciality: string
  specialistsNumber: number | string
  paymentPeriod: PaymentPeriodType | string
  startDate: any
  endDate: any
}

export type PaymentPeriodType = "Daily" | "Weekly" | "Monthly"

export type OrderItemKeys = 'paymentPeriod' | 'address' | 'endDate' | 'speciality' | 'startDate' | 'specialistsNumber'

export enum PaymentPeriod {
  Daily = 'روزانه',
  Weekly = 'هفتگی',
  Monthly = 'ماهانه',
}

export enum OrderStatus {
  Preparing = 'در حال جستجو',
}