import {homeActionTypes} from './home-actions';
import {HomeReducerTypes} from "./home";


const initialState: HomeReducerTypes = {
  expanded: false,
  mobileMenu: false,
};

function homeReducer(state = initialState, action: any) {
  switch (action.type) {

    case homeActionTypes.SET_EXPANDED_MENU:
      return {
        ...state,
        expanded: action?.data?.expand,
      };

    case homeActionTypes.SET_MOBILE_MENU:
      return {
        ...state,
        mobileMenu: action?.data?.mobileMenu,
      };

    default:
      return state
  }
}

export default homeReducer;
