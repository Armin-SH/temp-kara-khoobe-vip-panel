const preType = 'AUTH_';

export const AuthActionTypes = {
  CHECK_MOBILE_EXIST: `${preType}CHECK_MOBILE_EXIST`,
};

const checkMobileExist = () => ({type: AuthActionTypes.CHECK_MOBILE_EXIST});

export const AuthActions = {
  checkMobileExist: checkMobileExist,
};
