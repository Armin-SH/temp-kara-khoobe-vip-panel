import {AuthActionTypes} from "@store/auth/auth-actions";
import {all, put, select, takeLatest} from "redux-saga/effects";
import {AlertActionType} from "@store/alert/alert-action";
import {authStore} from "@store/auth/auth-store";
import {AuthReducerTypes} from "@store/auth/auth";
import {passwordLoginApi, refreshTokenApi, sendValidationCodeApi, verifyValidationCodeApi} from "@api/auth";
import Router from "next/router";
import routes from '@routes'
import {getFromCookie, removeFromCookie, saveToCookie} from '@utils'


function* sendValidationCodeWatcher() {
  try {
    const {mobile}: AuthReducerTypes = yield select(authStore);

    if (mobile) {
      const response: { data: { id: string } } = yield sendValidationCodeApi({mobile: mobile});
      yield put({
        type: AuthActionTypes.SET_UID_CODE,
        data: {
          uId: response?.data?.id,
        }
      })
      yield Router.push(routes['route.auth.verify'])
    }
  } catch (error) {
    yield put({
      type: AuthActionTypes.SET_UID_CODE,
      data: {
        uId: null,
      }
    })
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در گرفتن اطلاعات شخصی شما مشکلی پیش آمده است، لطفا مجددا وارد سایت شوید.",
      severity: "error"
    });
  }
}

function* verifyOtpCodeWatcher() {
  try {
    const {mobile, otpCode, uId, deviceId}: AuthReducerTypes = yield select(authStore);

    const response: { data: { token: string, refreshToken: string } } = yield verifyValidationCodeApi({code: otpCode, mobile: mobile, id: uId, deviceID: deviceId});

    yield put({type: AuthActionTypes.SET_VERIFY_LOADING,})
    yield saveToCookie("token", response?.data?.token)
    yield saveToCookie("refreshToken", response?.data?.refreshToken)
    yield Router.push(routes['route.home.index'])

  } catch (error: any) {
    yield put({type: AuthActionTypes.SET_VERIFY_LOADING,})
    if (error?.response?.data?.statusCode) {
      yield put({
        type: AlertActionType.SHOW_ALERT,
        text: "کد اعتبار سنجی وارد شده صحیح نمی باشد",
        severity: "error"
      });
    } else {
      yield put({
        type: AlertActionType.SHOW_ALERT,
        text: "در گرفتن اطلاعات شخصی شما مشکلی پیش آمده است، لطفا مجددا وارد سایت شوید.",
        severity: "error"
      });
    }
  }
}

function* loginWithPasswordWatcher() {
  try {
    const {mobile, password, deviceId}: AuthReducerTypes = yield select(authStore);

    const response: { data: { token: string, refreshToken: string } } = yield passwordLoginApi({mobile: mobile, password: password, deviceID: deviceId});
    console.log(response)
    yield put({type: AuthActionTypes.SET_LOGIN_LOADING})
    yield saveToCookie("token", response?.data?.token)
    yield saveToCookie("refreshToken", response?.data?.refreshToken)
    yield Router.push(routes['route.home.index'])

  } catch (e: any) {
    yield put({type: AuthActionTypes.SET_LOGIN_LOADING})
    if (e.response.data.statusCode === 401) {
      yield put({
        type: AlertActionType.SHOW_ALERT,
        text: "نام کاربری یا کلمه عبور صحیح نمی باشد",
        severity: "error"
      });
    } else {
      yield put({
        type: AlertActionType.SHOW_ALERT,
        text: "در گرفتن اطلاعات شخصی شما مشکلی پیش آمده است، لطفا مجددا وارد سایت شوید.",
        severity: "error"
      });
    }
  }
}

function* checkRefreshTokenWatcher() {
  console.log('middleware')
  try {
    const {deviceId}: AuthReducerTypes = yield select(authStore);
    const refreshToken = getFromCookie('refreshToken')
    console.log(refreshToken)
    if (refreshToken) {
      const response: { data: { token: string, refreshToken: string } } = yield refreshTokenApi({token: refreshToken, deviceID: deviceId});

      yield saveToCookie("token", response?.data?.token)
    }

  } catch (e: any) {
    if (e.response.data.statusCode === 401) {
      removeFromCookie('refreshToken')
      Router.push(routes['route.auth.login'])
    }
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در گرفتن اطلاعات شخصی شما مشکلی پیش آمده است، لطفا مجددا وارد سایت شوید.",
      severity: "error"
    });
  }
}


function* authMiddleware() {
  yield all([
    takeLatest(AuthActionTypes.SEND_VALIDATION_CODE, sendValidationCodeWatcher),
    takeLatest(AuthActionTypes.VERIFY_OTP_CODE, verifyOtpCodeWatcher),
    takeLatest(AuthActionTypes.LOGIN_WITH_PASSWORD, loginWithPasswordWatcher),
    takeLatest(AuthActionTypes.CHECK_REFRESH_TOKEN, checkRefreshTokenWatcher),
  ])
}

export default authMiddleware;
