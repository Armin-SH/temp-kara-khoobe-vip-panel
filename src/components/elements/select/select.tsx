import React from 'react'
import {SelectProps} from './select.props'
import {Select as MaterialSelect} from "@mui/material";
import {styled} from '@mui/styles'

const StyledSelect = styled(MaterialSelect)((props: SelectProps) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },
  "&.MuiSelect-root": {
    width: "100%",
    height: "47px",
    textAlign: 'right',
    "@media only screen and (max-width: 639px)": {
      height: "38px",
    }
  },
  "& .MuiSelect-icon": {
    left: "7px",
    "@media only screen and (max-width: 639px)": {
      left: props.hasPadding ? "25px" : "7px",
    },
  },
  "& .MuiSelect-select": {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingRight: "14px !important",
  }
}))


export const Select = (props: SelectProps) => {

  const {children, onChange, value, className, placeholder, label, hasPadding, disabled, ...rest} = props;

  return (
    <StyledSelect
      disabled={disabled}
      hasPadding={hasPadding}
      className={className}
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {children}
    </StyledSelect>
  )
}

Select.defaultProps = {
  hasPadding: true,
}

export default Select
