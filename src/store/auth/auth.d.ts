export interface AuthReducerTypes {
  isLoggedIn: boolean,

  validationCodeLoading: boolean

  mobile: string

  deviceId: string

  password: string

  uId: string

  otpCode: string

  verifyLoading: boolean

  loginLoading: boolean

  isNumberValid: boolean

  countDownReset: boolean

  countDownOver: boolean
}