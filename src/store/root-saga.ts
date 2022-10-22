import {spawn} from 'redux-saga/effects'
import authMiddleware from "@store/auth/auth-middleware";
import userMiddleware from "@store/user/user-middleware";

export default function* rootSaga() {
  yield spawn(authMiddleware);
  yield spawn(userMiddleware);
}
