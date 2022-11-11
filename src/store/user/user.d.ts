export interface UserReducerTypes {
  getInfoLoading: boolean,

  restrictionLevel: 'NotActive' | 'Unauthorized' | 'Vip' | 'Pending' | undefined

  oldPassword: string

  newPassword: string

  passwordFlag: boolean

  changePasswordLoading: boolean

  file: any

  uploadFileLoading: boolean

  userInfo: UserInfoProps

  userInfoError: boolean

  updateUSerInfoLoading: boolean

  id: string

  address: AddressProps

  selectedAddressId: string

  addressLoading: boolean

  addressListLoading: boolean

  addressList: Array<any>
}

export interface AddressProps {
  title: string,
  geoLat: number,
  geoLong: number,
  number: string,
  unit: string,
  fullAddress: string,
  _id?: string,
  userInfo?: {
    phonenumber: string
  }
}

export interface UserInfoProps {
  firstName: string,

  lastName: string,

  phoneNumber: string,

  internalNumber: string,

  nationalCode: string,

  corporationName: string,

  corporationTelephone: string,

  corporationCode: string,

  ceoNationalCardUrl: string,
}

export type UserInfoFields = | 'firstName' | 'lastName' | 'phoneNumber' | 'internalNumber' | 'nationalCode' | 'corporationName' | 'corporationTelephone' | 'corporationCode' | 'ceoNationalCardUrl'