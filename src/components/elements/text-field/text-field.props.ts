import {KeyboardEvent, RefObject} from "react";

export interface TextFieldProps {
  className?: string
  InputProps?: any
  variant?: "outlined" | "filled" | "standard" | undefined
  placeholder?: string
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | "tertiary" | "control" | "common.white"
  backgroundColor?: string
  inputMode?: "text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined
  type?: string
  onMouseEnter?: any
  onInput?: any
  fieldsetBackground?: string
  rows?: number
  padding?: string
  onChange?: any
  value?: any
  defaultValue?: string
  borderWidth?: string
  disabled?: boolean
  id?: string
  fullWidth?: boolean
  error?: boolean
  label?: string
  helperText?: string
  inputProps?: any
  maxRows?: number
  placeholdermobilesize?: string
  placeholderalign?: 'left' | "center" | "right"
  placeholderdesktopsize?: string
  mobileLogin?: boolean
  placeholdertabletsize?: string
  multiline?: boolean
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  inputRef?: RefObject<HTMLInputElement>
  InputLabelProps?: any
  size?: 'small' | 'medium' | 'large'
  search?: boolean
  sx?: any
}