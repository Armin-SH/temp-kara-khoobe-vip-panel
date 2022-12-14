import {AuthReducerTypes} from "@store/auth/auth";
import {AlertReducerTypes} from "@store/alert/alert";
import {HomeReducerTypes} from "@store/home/home";
import {UserReducerTypes} from '@store/user/user'
import {OrderReducerTypes} from './order/order'
import {SpecialistTableReducerTypes} from './specialist-table/specialist-table'

export interface ReducerTypes {
  auth: AuthReducerTypes
  alert: AlertReducerTypes
  home: HomeReducerTypes
  user: UserReducerTypes
  order: OrderReducerTypes
  specialistTable: SpecialistTableReducerTypes
}