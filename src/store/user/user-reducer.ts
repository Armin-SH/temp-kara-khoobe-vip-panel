import {UserActionTypes} from './user-actions';
import {UserReducerTypes} from "./user";


const initialState: UserReducerTypes = {
  getInfoLoading: false,
};

function userReducer(state = initialState, action: any) {
  switch (action.type) {

    case UserActionTypes.GET_USER_INFO:
      return {
        ...state,
        getInfoLoading: true,
      };

    case UserActionTypes.SET_USER_INFO:
      return {
        ...state,
        getInfoLoading: false
      }

    default:
      return state
  }
}

export default userReducer;
