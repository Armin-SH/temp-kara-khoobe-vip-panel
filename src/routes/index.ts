import {authRoutes} from "./auth";
import {contactRoutes} from './contacts'
import {messageRoutes} from './messages'
import {profileRoutes} from './profile'
import {requestRoutes} from './request'
import {settingRoutes} from './settings'
import {orderRoutes} from './order'
import {homeRoutes} from './home'
import {userRoutes} from "./user";
import {questionRoutes} from './questions'
import {specialityRoutes} from './speciality'
import {categoryRoutes} from './category'
import {addressRoutes} from "./address";
import {offerRoutes} from "./offer";

export default {
  ...authRoutes,
  ...contactRoutes,
  ...settingRoutes,
  ...messageRoutes,
  ...profileRoutes,
  ...requestRoutes,
  ...orderRoutes,
  ...homeRoutes,
  ...userRoutes,
  ...questionRoutes,
  ...specialityRoutes,
  ...categoryRoutes,
  ...addressRoutes,
  ...offerRoutes,
}
