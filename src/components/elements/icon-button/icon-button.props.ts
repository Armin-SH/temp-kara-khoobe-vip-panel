import {ReactNode} from "react";
import {IconButtonProps as Props} from "@mui/material";


export interface IconButtonProps extends Props {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'control' | 'tertiary';
  variant?: 'text' | 'outlined' | 'contained'
  onClick?: any
  className?: any
}
