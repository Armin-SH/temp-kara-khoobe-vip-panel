import {all, put, select, takeLatest} from "redux-saga/effects";
import {AlertActionType} from "@store/alert/alert-action";
import {userStore} from "@store/user/user-store";
import {UserReducerTypes} from "@store/user/user";
import {userInfoApi} from "@api/user";
import {UserActionTypes} from "@store/user/user-actions";


function* getUserInfoWatcher() {
  try {
    const {}: UserReducerTypes = yield select(userStore);
    const response: {} = yield userInfoApi();

    console.log(response)
    yield put({type: UserActionTypes.SET_USER_INFO})

  } catch (error) {
    yield put({type: UserActionTypes.SET_USER_INFO})

    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در گرفتن اطلاعات شخصی شما مشکلی پیش آمده است، لطفا مجددا وارد سایت شوید.",
      severity: "error"
    });
  }
}


function* userMiddleware() {
  yield all([
    takeLatest(UserActionTypes.GET_USER_INFO, getUserInfoWatcher),
  ])
}

export default userMiddleware;
