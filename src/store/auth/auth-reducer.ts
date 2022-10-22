import {AuthActionTypes} from './auth-actions';
import {AuthReducerTypes} from "./auth";


const initialState: AuthReducerTypes = {
  isLoggedIn: false,
  validationCodeLoading: false,
  mobile: '',
  deviceId: '',
  password: '',
  uId: '',
  otpCode: '',
  verifyLoading: false,
  loginLoading: false,
  isNumberValid: false,
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {

    case AuthActionTypes.SEND_VALIDATION_CODE:
      return {
        ...state,
        validationCodeLoading: true,
      };

    case AuthActionTypes.SET_UID_CODE:
      return {
        ...state,
        validationCodeLoading: false,
        uId: action?.data?.uId,
      }

    case AuthActionTypes.SET_MOBILE_NUMBER:
      return {
        ...state,
        mobile: action?.data?.mobile,
      }

    case AuthActionTypes.SET_DEVICE_ID:
      return {
        ...state,
        deviceId: action?.data?.deviceId
      }

    case AuthActionTypes.SET_OTP_CODE:
      return {
        ...state,
        otpCode: action?.data?.otpCode,
      }

    case AuthActionTypes.VERIFY_OTP_CODE:
      return {
        ...state,
        verifyLoading: true,
      }

    case AuthActionTypes.SET_VERIFY_LOADING:
      return {
        ...state,
        verifyLoading: false
      }

    case AuthActionTypes.SET_USER_PASSWORD:
      return {
        ...state,
        password: action?.data?.password,
      }

    case AuthActionTypes.LOGIN_WITH_PASSWORD:
      return {
        ...state,
        loginLoading: true,
      }

    case AuthActionTypes.SET_LOGIN_LOADING:
      return {
        ...state,
        loginLoading: false,
      }

    case AuthActionTypes.SET_MOBILE_VALIDATION:
      return {
        ...state,
        isNumberValid: action?.data?.isNumberValid,
      };

    default:
      return state
  }
}

export default authReducer;
