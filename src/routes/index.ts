import {authRoutes} from "./auth";
import {contactRoutes} from './contacts'
import {messageRoutes} from './messages'
import {profileRoutes} from './profile'
import {requestRoutes} from './request'
import {settingRoutes} from './settings'
import {orderRoutes} from './order'
import {homeRoutes} from './home'

export default {
  ...authRoutes,
  ...contactRoutes,
  ...settingRoutes,
  ...messageRoutes,
  ...profileRoutes,
  ...requestRoutes,
  ...orderRoutes,
  ...homeRoutes,
}
