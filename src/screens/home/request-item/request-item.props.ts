import {ReactNode} from "react";

export interface RequestItemProps {
  title: string

  subTitle: string

  doneCounter: number

  inProgressCounter: number

  totalCounter: number

  buttonTitle: string

  children: ReactNode
}