const preType = 'USER_';

export const UserActionTypes = {
  GET_USER_INFO: `${preType}GET_USER_INFO`,
  SET_USER_INFO: `${preType}SET_USER_INFO`,

};

const getUserInfo = () => ({type: UserActionTypes.GET_USER_INFO});


export const UserActions = {
  getUserInfo: getUserInfo,

};
