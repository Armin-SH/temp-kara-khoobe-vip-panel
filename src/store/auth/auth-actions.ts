const preType = 'AUTH_';

export const AuthActionTypes = {
  SEND_VALIDATION_CODE: `${preType}SEND_VALIDATION_CODE`,
  SET_MOBILE_NUMBER: `${preType}SET_MOBILE_NUMBER`,
  SET_UID_CODE: `${preType}SET_UID_CODE`,
  SET_DEVICE_ID: `${preType}SET_DEVICE_ID`,
  SET_OTP_CODE: `${preType}SET_OTP_CODE`,
  VERIFY_OTP_CODE: `${preType}VERIFY_OTP_CODE`,
  SET_VERIFY_LOADING: `${preType}SET_VERIFY_LOADING`,
  SET_USER_PASSWORD: `${preType}SET_USER_PASSWORD`,
  LOGIN_WITH_PASSWORD: `${preType}LOGIN_WITH_PASSWORD`,
  SET_LOGIN_LOADING: `${preType}SET_LOGIN_LOADING`,
  SET_MOBILE_VALIDATION: `${preType}SET_MOBILE_VALIDATION`,
  CHECK_REFRESH_TOKEN: `${preType}CHECK_REFRESH_TOKEN`,
};

const sendValidationCode = () => ({type: AuthActionTypes.SEND_VALIDATION_CODE});
const setMobileNumber = (data: { mobile: string }) => ({type: AuthActionTypes.SET_MOBILE_NUMBER, data: data});
const setDeviceId = (data: { deviceId: string }) => ({type: AuthActionTypes.SET_DEVICE_ID, data: data});
const setOtpCode = (data: { otpCode: string }) => ({type: AuthActionTypes.SET_OTP_CODE, data: data});
const verifyOtpCode = () => ({type: AuthActionTypes.VERIFY_OTP_CODE})
const setUserPassword = (data: { password: string }) => ({type: AuthActionTypes.SET_USER_PASSWORD, data: data})
const loginWithPassword = () => ({type: AuthActionTypes.LOGIN_WITH_PASSWORD})
const setMobileValidation = (data: { isNumberValid: boolean }) => ({type: AuthActionTypes.SET_MOBILE_VALIDATION, data: data});
const checkRefreshToken = () => ({type: AuthActionTypes.CHECK_REFRESH_TOKEN})

export const AuthActions = {
  sendValidationCode: sendValidationCode,
  setMobileNumber: setMobileNumber,
  setDeviceId: setDeviceId,
  setOtpCode: setOtpCode,
  verifyOtpCode: verifyOtpCode,
  setUserPassword: setUserPassword,
  loginWithPassword: loginWithPassword,
  setMobileValidation: setMobileValidation,
  checkRefreshToken: checkRefreshToken,
};
