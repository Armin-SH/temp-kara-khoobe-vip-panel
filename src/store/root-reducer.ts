import {combineReducers} from 'redux';
import authReducer from './auth/auth-reducer'
import alertReducer from './alert/alert-reducer'
import homeReducer from './home/home-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  home: homeReducer,
});

export default rootReducer;