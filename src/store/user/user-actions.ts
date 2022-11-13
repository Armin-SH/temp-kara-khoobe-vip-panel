import {AddressProps, UserInfoFields} from './user'

const preType = 'USER_';

export const UserActionTypes = {
  GET_USER_INFO: `${preType}GET_USER_INFO`,
  SET_USER_INFO: `${preType}SET_USER_INFO`,
  SET_USER_RESTRICTED_LEVEL: `${preType}SET_USER_RESTRICTED_LEVEL`,
  CHANGE_USER_PASSWORD: `${preType}CHANGE_USER_PASSWORD`,
  SET_OLD_PASSWORD: `${preType}SET_OLD_PASSWORD`,
  SET_NEW_PASSWORD: `${preType}SET_NEW_PASSWORD`,
  SET_NEW_PASSWORD_LOADING: `${preType}SET_NEW_PASSWORD_LOADING`,
  UPLOAD_USER_FILE: `${preType}UPLOAD_USER_FILE`,
  SET_USER_FILE: `${preType}SET_USER_FILE`,
  SET_USER_DETAILS: `${preType}SET_USER_DETAILS`,
  UPDATE_USER_INFO: `${preType}UPDATE_USER_INFO`,
  SET_UPDATE_LOADING: `${preType}SET_UPDATE_LOADING`,
  SET_USER_ADDRESS: `${preType}SET_USER_ADDRESS`,
  UPDATE_USER_ADDRESS: `${preType}UPDATE_USER_ADDRESS`,
  DELETE_USER_ADDRESS: `${preType}DELETE_USER_ADDRESS`,
  SET_ADDRESS_LOADING: `${preType}SET_ADDRESS_LOADING`,
  GET_USER_ADDRESS: `${preType}GET_USER_ADDRESS`,
  SET_USER_ADDRESS_LIST: `${preType}SET_USER_ADDRESS_LIST`,
  SET_USER_NEW_ADDRESS: `${preType}SET_USER_NEW_ADDRESS`,
  SET_DELETED_ADDRESS: `${preType}SET_DELETED_ADDRESS`,
  SET_EDITED_ADDRESS: `${preType}SET_EDITED_ADDRESS`,
};

const getUserInfo = () => ({type: UserActionTypes.GET_USER_INFO});
const changeUserPassword = () => ({type: UserActionTypes.CHANGE_USER_PASSWORD})
const setOldPassword = (data: { password: string }) => ({type: UserActionTypes.SET_OLD_PASSWORD, data: data})
const setNewPassword = (data: { password: string }) => ({type: UserActionTypes.SET_NEW_PASSWORD, data: data})
const uploadUserFile = (data: { key: 'corporationIdentifier' | 'ceoNationalCard' }) => ({type: UserActionTypes.UPLOAD_USER_FILE, data: data})
const setUserFile = (data: { file: any, key: 'corporationIdentifier' | 'ceoNationalCard' }) => ({type: UserActionTypes.SET_USER_FILE, data: data})
const setUserDetails = (data: { value: string, key: UserInfoFields }) => ({type: UserActionTypes.SET_USER_DETAILS, data: data})
const updateUserInfo = () => ({type: UserActionTypes.UPDATE_USER_INFO})
const setUserAddress = (data: { address: AddressProps }) => ({type: UserActionTypes.SET_USER_ADDRESS, data: data})
const updateUserAddress = (data: { address: AddressProps, id: string }) => ({type: UserActionTypes.UPDATE_USER_ADDRESS, data: data})
const deleteUserAddress = (data: { id: string }) => ({type: UserActionTypes.DELETE_USER_ADDRESS, data: data})
const getUserAddress = () => ({type: UserActionTypes.GET_USER_ADDRESS})

export const UserActions = {
  getUserInfo: getUserInfo,
  changeUserPassword: changeUserPassword,
  setNewPassword: setNewPassword,
  setOldPassword: setOldPassword,
  uploadUserFile: uploadUserFile,
  setUserFile: setUserFile,
  setUserDetails: setUserDetails,
  updateUserInfo: updateUserInfo,
  setUserAddress: setUserAddress,
  updateUserAddress: updateUserAddress,
  deleteUserAddress: deleteUserAddress,
  getUserAddress: getUserAddress,
};
