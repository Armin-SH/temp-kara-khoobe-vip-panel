import {ReactNode} from "react";

export interface PopperProps {
  open: boolean

  children: ReactNode

  anchorEl: any

  id?: string

  className?: string

  placement?: 'auto-end'
    | 'auto-start'
    | 'auto'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
}