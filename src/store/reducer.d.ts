import {AuthReducerTypes} from "@store/auth/auth";
import {AlertReducerTypes} from "@store/alert/alert";
import {HomeReducerTypes} from "@store/home/home";

export interface ReducerTypes {
  auth: AuthReducerTypes
  alert: AlertReducerTypes
  home: HomeReducerTypes
}