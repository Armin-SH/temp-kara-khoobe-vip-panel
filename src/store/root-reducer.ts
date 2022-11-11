import {combineReducers} from 'redux';
import authReducer from './auth/auth-reducer'
import alertReducer from './alert/alert-reducer'
import homeReducer from './home/home-reducer'
import userReducer from './user/user-reducer'
import orderReducer from './order/order-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  home: homeReducer,
  user: userReducer,
  order: orderReducer,
});

export default rootReducer;