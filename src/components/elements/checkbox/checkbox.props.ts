import {CheckboxProps as MaterialCheckboxProps} from '@mui/material/Checkbox'

export interface CheckboxProps extends MaterialCheckboxProps {
  checked: boolean

  disabled?: boolean
}
