import {AuthActionTypes} from './auth-actions';
import {AuthReducerTypes} from "./auth";


const initialState: AuthReducerTypes = {
  isLoggedIn: false,
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {

    case AuthActionTypes.CHECK_MOBILE_EXIST:
      return {
        ...state,
      };

    default:
      return state
  }
}

export default authReducer;
