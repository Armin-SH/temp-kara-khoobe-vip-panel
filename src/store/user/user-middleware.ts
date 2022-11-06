import {all, put, select, takeLatest} from "redux-saga/effects";
import {AlertActionType} from "@store/alert/alert-action";
import {userStore} from "@store/user/user-store";
import {AddressProps, UserReducerTypes} from "@store/user/user";
import {changePasswordApi, updateUserProfileApi, uploadFileApi, userInfoApi} from "@api/user";
import {deleteUserAddressApi, insertNewAddressApi, updateNewAddressApi, userAddressListApi} from '@api/address'
import {UserActionTypes} from "@store/user/user-actions";


function* getUserInfoWatcher() {
  try {
    const {}: UserReducerTypes = yield select(userStore);
    const response: { data: { ceoNationalCardUrl: string, authorizeState: string, ceoFirstname: string, ceoLastname: string, ceoPhonenumber: string, ceoInternalNumber: string, ceoNationalCode: string, corporationName: string, corporationTelephone: string, corporationCode: string, _id: string } } = yield userInfoApi();
    yield put({
      type: UserActionTypes.SET_USER_RESTRICTED_LEVEL,
      data: {
        restrictedLevel: response.data?.authorizeState,
      }
    })


    yield put({
      type: UserActionTypes.SET_USER_INFO, data: {
        corporationCode: response?.data?.corporationCode,
        corporationName: response?.data?.corporationName,
        firstName: response?.data?.ceoFirstname,
        corporationTelephone: response?.data?.corporationTelephone,
        internalNumber: response?.data?.ceoInternalNumber,
        lastName: response?.data?.ceoLastname,
        nationalCode: response?.data?.ceoNationalCode,
        phoneNumber: response?.data?.ceoPhonenumber,
        ceoNationalCardUrl: response?.data?.ceoNationalCardUrl,
        id: response?.data?._id
      }
    })

  } catch (error) {
    yield put({type: UserActionTypes.SET_USER_INFO})
  }
}

function* changeUserPasswordWatcher() {
  const {newPassword, passwordFlag, oldPassword}: UserReducerTypes = yield select(userStore);

  if (passwordFlag) {
    return null;
  }

  try {
    const response: { data: { status: string } } = yield changePasswordApi({newPassword: newPassword, oldPassword: oldPassword === oldPassword ? '' : oldPassword});

    if (response?.data?.status === "SamePassword") {
      yield put({
        type: AlertActionType.SHOW_ALERT,
        text: "پسوورد با موفقیت تغییر پیدا کرد",
        severity: "success"
      });
      yield put({type: UserActionTypes.GET_USER_INFO});
    }

    yield put({type: UserActionTypes.SET_NEW_PASSWORD_LOADING})


  } catch (error) {
    yield put({type: UserActionTypes.SET_NEW_PASSWORD_LOADING})
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در ذخیره سازی پسوورد مشکلی پیش آمده است. لطفا مجددا تلاش کنید",
      severity: "error"
    });
  }
}

function* uploadUserFileWatcher() {
  const {file}: UserReducerTypes = yield select(userStore);
  try {
    const response: { data: { url: string } } = yield uploadFileApi({file: file});
    yield put({type: UserActionTypes.GET_USER_INFO});

  } catch (error) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در ذخیره سازی فایل مشکلی پیش آمده است. لطفا مجددا تلاش کنید",
      severity: "error"
    });
  }
}

function* updateUserInfoWatcher() {
  const {userInfo}: UserReducerTypes = yield select(userStore);
  try {
    const response: { data: { status: string } } = yield updateUserProfileApi(userInfo);
    yield put({type: UserActionTypes.GET_USER_INFO});
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "اطلاعات با موفقیت ویرایش شد",
      severity: "success"
    });

    yield put({type: UserActionTypes.SET_UPDATE_LOADING})


  } catch (error) {
    yield put({type: UserActionTypes.SET_UPDATE_LOADING})
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در ذخیره اطلاعات مشکلی پیش آمده است. لطفا مجددا تلاش کنید",
      severity: "error"
    });
  }
}

function* setUserAddressWatcher() {
  const {address}: UserReducerTypes = yield select(userStore);
  try {
    const response: { data: AddressProps } = yield insertNewAddressApi(address);
    yield put({
      type: UserActionTypes.SET_USER_NEW_ADDRESS,
      data: {
        address: response?.data
      }
    });
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "آدرس جدید با موفقیت اضافه شد",
      severity: "success"
    });
    yield put({type: UserActionTypes.SET_ADDRESS_LOADING});

  } catch (error) {
    yield put({type: UserActionTypes.SET_ADDRESS_LOADING});
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در ذخیره سازی آدرس شما مشکلی پیش آمده است. لطفا مجددا تلاش کنید",
      severity: "error"
    });
  }
}

function* updateUserAddressWatcher() {
  const {address, selectedAddressId}: UserReducerTypes = yield select(userStore);
  try {
    const response: { data: any } = yield updateNewAddressApi({...address, _id: selectedAddressId});
    yield put({
      type: UserActionTypes.SET_EDITED_ADDRESS,
      data: {
        address: response.data
      }
    })
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "آدرس جدید با موفقیت ویرایش شد",
      severity: "success"
    });


  } catch (error) {
    yield put({type: UserActionTypes.SET_ADDRESS_LOADING});
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در ویرایش آدرس شما مشکلی پیش آمده است. لطفا مجددا تلاش کنید",
      severity: "error"
    });
  }
}

function* deleteUserAddressWatcher() {
  const {selectedAddressId}: UserReducerTypes = yield select(userStore);
  try {
    const response: { data: { status: string } } = yield deleteUserAddressApi({id: selectedAddressId});

    yield put({type: UserActionTypes.SET_DELETED_ADDRESS, data: {id: selectedAddressId}})

    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "آدرس با موفقیت حذف شد",
      severity: "success"
    });


  } catch (error) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در حدف آدرس مشکلی پیش آمده است. لطفا مجددا تلاش کنید",
      severity: "error"
    });
  }
}

function* getUserAddressWatcher() {
  try {
    const response: { data: { addresses: Array<object> } } = yield userAddressListApi();
    yield put({
      type: UserActionTypes.SET_USER_ADDRESS_LIST,
      data: {
        addressList: response?.data?.addresses,
      }
    });


  } catch (error) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: "در دریافت لیست آدرس های شما مشکلی پیش آمده است. لطفا مجددا صفحه را بارگذاری کنید",
      severity: "error"
    });
  }
}


function* userMiddleware() {
  yield all([
    takeLatest(UserActionTypes.GET_USER_INFO, getUserInfoWatcher),
    takeLatest(UserActionTypes.CHANGE_USER_PASSWORD, changeUserPasswordWatcher),
    takeLatest(UserActionTypes.UPLOAD_USER_FILE, uploadUserFileWatcher),
    takeLatest(UserActionTypes.UPDATE_USER_INFO, updateUserInfoWatcher),
    takeLatest(UserActionTypes.SET_USER_ADDRESS, setUserAddressWatcher),
    takeLatest(UserActionTypes.UPDATE_USER_ADDRESS, updateUserAddressWatcher),
    takeLatest(UserActionTypes.DELETE_USER_ADDRESS, deleteUserAddressWatcher),
    takeLatest(UserActionTypes.GET_USER_ADDRESS, getUserAddressWatcher),
  ])
}

export default userMiddleware;
