import {all, takeLatest} from "redux-saga/effects";
import {AuthActionTypes} from "@store/auth/auth-actions";

/**
 * userCheckMobileExistWatcher
 *
 * check mobile existence for navigate user to login or register flow
 */
function* userCheckMobileExistWatcher() {

}

function* authMiddleware() {
  yield all([
    takeLatest(AuthActionTypes.CHECK_MOBILE_EXIST, userCheckMobileExistWatcher),
  ])
}

export default authMiddleware;
