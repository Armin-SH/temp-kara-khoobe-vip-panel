import React from 'react';
import {TextField as MaterialTextField} from '@mui/material';
import {styled} from '@mui/material/styles';
import {paletteTheme} from '../../../config/material/palette'
import {TextFieldProps} from './text-field.props'
import {typography} from "@utils";

const FilledTextField = styled(({color, borderWidth, backgroundColor, size, search, ...props}: TextFieldProps) =>
  <MaterialTextField {...props}/>)<TextFieldProps>((props: TextFieldProps) => ({
  "& input": {
    paddingBottom: '24px',
    direction: 'rtl',
    "@media (min-width: 640px)": {
      fontSize: "14px"
    },
    "@media (min-width: 1024px)": {
      fontSize: "16px",
    },
    fontSize: "12px",
    fontFamily: typography.bold,
  },
  "& .MuiFilledInput-input": {},
  "& .MuiFilledInput-root": {
    height: props.size === 'large' ? '48px' : props.size === 'medium' ? "32px" : '28px',
    direction: props.inputMode === "email" || props.inputMode === "numeric" ? 'ltr' : "rtl",
    fontFamily: typography.regular,
    // @ts-ignore
    backgroundColor: props.color === 'common.white' ? paletteTheme.common?.white : paletteTheme[props.color || "primary"].main,
    border: 'none',
    borderRadius: props.search ? '55px' : '12px',
    "@media only screen and (min-width: 640px)": {
      borderRadius: props.search ? '55px' : '8px',
    },
    "@media only screen and (min-width: 1024px)": {
      height: props.size === 'large' ? '56px' : props.size === 'medium' ? "48px" : '32px',
    }
  },
  "& .MuiFilledInput-root:before": {
    border: 'none',
    backgroundColor: props.color === 'common.white' ? 'transparent' : 'auto'
  },
  "& .MuiFilledInput-root:hover": {
    border: 'none',
  },
  "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
    border: 'none',
    backgroundColor: props.color === 'common.white' ? 'transparent' : 'auto'
  },
  "& .MuiFilledInput-root:after": {
    border: 'none',
    backgroundColor: props.color === 'common.white' ? 'transparent' : 'auto'
  },
  "& input::placeholder": {
    fontSize: props.placeholdermobilesize,
    textAlign: props.placeholderalign,
    color: '#595858',
    "@media (min-width: 640px)": {
      fontSize: props.placeholdertabletsize,
    },
    "@media (min-width: 1024px)": {
      fontSize: props.placeholderdesktopsize,
    },
  },
}));
// @ts-ignore
const OutlinedTextField = styled(({fieldsetBackground, backgroundColor, padding, borderWidth, mobileLogin, variant, ...props}: TextFieldProps) => <MaterialTextField {...props}/>)<TextFieldProps>((props: TextFieldProps) => {
  return ({
    "& .MuiOutlinedInput-root": {
      height: props.multiline ? 'auto' : '56px',
      minHeight: props.multiline ? '56px' : 'auto',
      borderRadius: props.multiline ? '12px' : '8px',
      color: '#8d8d8d',
      zIndex: 4,
      fontFamily: typography.regular,
      padding: props.padding,
    },
    "& .MuiInputLabel-root": {
      left: 'unset',
      right: '25px',
      color: '#121212',
    },
    "& .MuiInputLabel-animated": {
      transformOrigin: 'top right',
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: props.error ? '1px' : props.borderWidth ? props.borderWidth : '1px !important',
      textAlign: 'right',
    },
    "& input::placeholder": {
      fontSize: props.placeholdermobilesize,
      textAlign: props.placeholderalign,
      "@media (min-width: 640px)": {
        fontSize: props.placeholdertabletsize,
      },
      "@media (min-width: 1024px)": {
        fontSize: props.placeholderdesktopsize,
      },
    },
    "& input": {
      "@media (min-width: 640px)": {
        fontSize: props.mobileLogin ? "24px" : '16px',
      },
      borderRadius: '8px',
      fontSize: props.mobileLogin ? "20px" : "12px",
      fontFamily: typography.regular,
      direction: props.inputMode === "email" || props.inputMode === "numeric" ? 'ltr' : "rtl",
    },
  })
});


const TextField = (props: TextFieldProps) => {
  const {
    className,
    InputProps,
    variant,
    placeholder,
    color,
    inputMode,
    type,
    onInput,
    onChange,
    value,
    defaultValue,
    borderWidth,
    disabled,
    id,
    fullWidth,
    error,
    label,
    helperText,
    inputProps,
    maxRows,
    onKeyPress,
    inputRef,
    InputLabelProps,
    ...rest
  } = props;

  let CssTextField = variant === "filled" ? FilledTextField : OutlinedTextField;

  return (
    <CssTextField
      maxRows={maxRows}
      id={id}
      fullWidth={fullWidth}
      onChange={onChange}
      onInput={onInput}
      type={type}
      inputMode={inputMode}
      className={className}
      InputProps={InputProps}
      placeholder={placeholder}
      color={color}
      value={value}
      defaultValue={defaultValue}
      borderWidth={borderWidth}
      disabled={disabled}
      error={error}
      label={label}
      helperText={helperText}
      inputProps={inputProps}
      variant={variant}
      onKeyPress={onKeyPress}
      inputRef={inputRef}
      InputLabelProps={label ? {shrink: true} : InputLabelProps}
      {...rest}/>
  );
};

TextField.defaultProps = {
  backgroundColor: "#ffffff",
  variant: 'outlined',
  color: 'primary',
  mobileLogin: false,
  placeholderdesktopsize: '24px',
  placeholdertabletsize: '24px',
  placeholdermobilesize: '20px',
};

export default TextField;


