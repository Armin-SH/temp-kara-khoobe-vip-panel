import {UserActionTypes} from './user-actions';
import {UserInfoFields, UserReducerTypes} from "./user";
import {nationalIdValidation, validMobileNumber} from "@utils";


const initialState: UserReducerTypes = {
  getInfoLoading: false,
  restrictionLevel: undefined,
  newPassword: '',
  oldPassword: '',
  passwordFlag: false,
  changePasswordLoading: false,
  nationalIdFile: null,
  identifierFile: null,
  uploadFileLoading: false,
  userInfo: {
    corporationCode: '',
    corporationName: '',
    firstName: '',
    corporationTelephone: '',
    lastName: '',
    internalNumber: '',
    nationalCode: '',
    phoneNumber: '',
    ceoNationalCardUrl: '',
    corporationIdentifierUrl: '',
  },
  userInfoError: false,
  updateUSerInfoLoading: false,
  id: '',
  address: {
    title: '',
    geoLat: 0,
    geoLong: 0,
    number: '',
    unit: '',
    fullAddress: '',
  },
  selectedAddressId: '',
  addressLoading: false,
  addressListLoading: false,
  addressList: [],
  uploadKey: '',
  userError: {
    corporationCodeError: false,
    corporationNameError: false,
    firstNameError: false,
    corporationTelephoneError: false,
    lastNameError: false,
    internalNumberError: false,
    nationalCodeError: false,
    phoneNumberError: false,
  }
};

function userReducer(state = initialState, action: any) {
  switch (action.type) {

    case UserActionTypes.GET_USER_INFO:
      return {
        ...state,
        getInfoLoading: true,
      };

    case UserActionTypes.SET_USER_INFO: {
      let error = true

      if (
        action?.data?.corporationCode &&
        action?.data?.corporationName &&
        action?.data?.firstName &&
        action?.data?.corporationTelephone &&
        action?.data?.internalNumber &&
        action?.data?.lastName &&
        action?.data?.nationalCode &&
        action?.data?.phoneNumber
      ) {
        error = false
      }

      return {
        ...state,
        getInfoLoading: false,
        userInfo: {
          corporationCode: action?.data?.corporationCode,
          corporationName: action?.data?.corporationName,
          firstName: action?.data?.firstName,
          corporationTelephone: action?.data?.corporationTelephone,
          internalNumber: action?.data?.internalNumber,
          lastName: action?.data?.lastName,
          nationalCode: action?.data?.nationalCode,
          phoneNumber: action?.data?.phoneNumber,
          ceoNationalCardUrl: action?.data?.ceoNationalCardUrl,
          corporationIdentifierUrl: action?.data?.corporationIdentifierUrl,
          id: action?.data?._id,
        },
        uploadFileLoading: false,
        userInfoError: error,
      }
    }

    case UserActionTypes.SET_USER_RESTRICTED_LEVEL:
      return {
        ...state,
        restrictionLevel: action?.data?.restrictedLevel,
      }

    case UserActionTypes.CHANGE_USER_PASSWORD:
      return {
        ...state,
        changePasswordLoading: state.newPassword === state.oldPassword,
        passwordFlag: !(state.newPassword === state.oldPassword)
      }

    case UserActionTypes.SET_OLD_PASSWORD:
      return {
        ...state,
        oldPassword: action?.data?.password,
      }

    case UserActionTypes.SET_NEW_PASSWORD:
      return {
        ...state,
        newPassword: action?.data?.password,
        passwordFlag: false,
      }

    case UserActionTypes.SET_NEW_PASSWORD_LOADING:
      return {
        ...state,
        changePasswordLoading: false
      }

    case UserActionTypes.SET_USER_FILE:
      return {
        ...state,
        nationalIdFile: action?.data?.key === 'ceoNationalCard' ? action?.data?.file : state.nationalIdFile,
        identifierFile: action?.data?.key === 'corporationIdentifier' ? action?.data?.file : state.nationalIdFile,
      }

    case UserActionTypes.UPLOAD_USER_FILE:
      return {
        ...state,
        uploadFileLoading: true,
        uploadKey: action?.data?.key,
      }

    case UserActionTypes.SET_USER_DETAILS: {
      const tempInfoObject = state.userInfo
      const tempInfoErrorObject = state.userError
      const key: UserInfoFields = action?.data?.key
      tempInfoObject[key] = action?.data?.value


      let error = true

      if (key === 'nationalCode') {
        tempInfoErrorObject.nationalCodeError = !nationalIdValidation(action?.data?.value)
      } else if (key === 'phoneNumber') {
        tempInfoErrorObject.phoneNumberError = !validMobileNumber(action?.data?.value).isValid
      } else {
        //@ts-ignore
        tempInfoErrorObject[`${key}Error`] = !action?.data?.value
      }
      if (
        tempInfoObject.corporationCode &&
        tempInfoObject.internalNumber &&
        tempInfoObject.firstName &&
        tempInfoObject.phoneNumber &&
        tempInfoObject.corporationTelephone &&
        tempInfoObject.nationalCode &&
        tempInfoObject.corporationName &&
        tempInfoObject.lastName &&
        !tempInfoErrorObject.corporationCodeError &&
        !tempInfoErrorObject.internalNumberError &&
        !tempInfoErrorObject.firstNameError &&
        !tempInfoErrorObject.phoneNumberError &&
        !tempInfoErrorObject.corporationTelephoneError &&
        !tempInfoErrorObject.nationalCodeError &&
        !tempInfoErrorObject.corporationNameError &&
        !tempInfoErrorObject.lastNameError) {
        error = false
      }

      return {
        ...state,
        userInfo: tempInfoObject,
        userInfoError: error,
        userError: tempInfoErrorObject
      }
    }

    case UserActionTypes.UPDATE_USER_INFO:
      return {
        ...state,
        updateUSerInfoLoading: true
      }

    case UserActionTypes.SET_UPDATE_LOADING:
      return {
        ...state,
        updateUSerInfoLoading: false,
      }

    case UserActionTypes.SET_USER_ADDRESS:
      return {
        ...state,
        address: action?.data?.address,
      }

    case UserActionTypes.UPDATE_USER_ADDRESS:
      return {
        ...state,
        address: action?.data?.address,
        selectedAddressId: action?.data?.id,
        addressLoading: true,
      }

    case UserActionTypes.DELETE_USER_ADDRESS:
      return {
        ...state,
        selectedAddressId: action?.data?.id,
        addressLoading: true,
      }

    case UserActionTypes.SET_ADDRESS_LOADING:
      return {
        ...state,
        addressLoading: false,
        selectedAddressId: false,
      }

    case UserActionTypes.GET_USER_ADDRESS:
      return {
        ...state,
        addressListLoading: true,
      }

    case UserActionTypes.SET_USER_ADDRESS_LIST:
      return {
        ...state,
        addressList: action?.data?.addressList,
        addressListLoading: false,
      }

    case UserActionTypes.SET_USER_NEW_ADDRESS: {
      const tempAddressList: Array<any> = state.addressList;
      tempAddressList.push(action?.data?.address)

      return {
        ...state,
        addressList: tempAddressList,
      }
    }

    case UserActionTypes.SET_DELETED_ADDRESS: {
      const tempAddressList: Array<any> = state.addressList
      const index = tempAddressList.findIndex((address) => address._id === action?.data?.id);
      tempAddressList.splice(index, 1);

      return {
        ...state,
        addressList: tempAddressList,
        addressLoading: false,
      }
    }

    case UserActionTypes.SET_EDITED_ADDRESS: {
      const tempAddressList: Array<any> = state.addressList
      const index = tempAddressList.findIndex((address) => address._id === action?.data?.address?._id);
      tempAddressList[index] = action?.data?.address

      return {
        ...state,
        addressList: tempAddressList,
        addressLoading: false,
      }
    }

    default:
      return state
  }
}

export default userReducer;
