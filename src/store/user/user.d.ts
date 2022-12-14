export interface UserReducerTypes {
  getInfoLoading: boolean,

  restrictionLevel: 'NotActive' | 'Unauthorized' | 'Vip' | 'Pending' | undefined

  oldPassword: string

  newPassword: string

  passwordFlag: boolean

  changePasswordLoading: boolean

  nationalIdFile: any,

  identifierFile: any,

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

  uploadKey: string

  userError: {
    corporationCodeError: boolean,
    corporationNameError: boolean,
    firstNameError: boolean,
    corporationTelephoneError: boolean,
    lastNameError: boolean,
    internalNumberError: boolean,
    nationalCodeError: boolean,
    phoneNumberError: boolean,
  }
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

  corporationIdentifierUrl: string,
}

export type UserInfoFields = | 'firstName' | 'lastName' | 'phoneNumber' | 'internalNumber' | 'nationalCode' | 'corporationName' | 'corporationTelephone' | 'corporationCode' | 'ceoNationalCardUrl'