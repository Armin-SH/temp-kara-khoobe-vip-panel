import React from 'react';
import {TextField as MaterialTextField} from '@mui/material';
import {styled} from '@mui/material/styles';
import {paletteTheme} from '../../../config/material/palette'
import {TextFieldProps} from './text-field.props'
import {typography} from "@utils";

const FilledTextField = styled(({color, borderWidth, backgroundColor, ...props}: TextFieldProps) =>
    <MaterialTextField {...props}/>)<TextFieldProps>((props: TextFieldProps) => ({
  "& input": {
    direction: 'rtl',
    "@media (min-width: 640px)": {
      fontSize: "14px"
    },
    "@media (max-width: 1024px)": {
      fontSize: "19px",
    },
    fontSize: "12px",
    fontFamily: typography.regular,
  },
  "& .MuiFilledInput-input": {
    paddingTop: 0,
    paddingBottom: 0
  },
  "& .MuiFilledInput-root": {
    direction: props.inputMode === "email" || props.inputMode === "numeric" ? 'ltr' : "rtl",
    fontFamily: typography.regular,
    backgroundColor: paletteTheme[props.color || "primary"].main,
    border: 'none',
    borderRadius: '55px',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: '21px',
    height: "39px",
  },
  "& .MuiFilledInput-root:before": {
    border: 'none'
  },
  "& .MuiFilledInput-root:hover": {
    border: 'none',
    backgroundColor: paletteTheme[props.color || "primary"].dark,
  },
  "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
    border: 'none',
  },
  "& .MuiFilledInput-root:after": {
    border: 'none'
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
const OutlinedTextField = styled(({fieldsetBackground, backgroundColor, padding, borderWidth, mobileLogin, variant, ...props}: TextFieldProps) => <MaterialTextField {...props}/>)<TextFieldProps>((props: TextFieldProps) => {
  // let fieldsetOptions = {};
  //
  // // if (props.fieldsetBackground) {
  // //   fieldsetOptions = Object.assign({}, fieldsetOptions, {
  // //     backgroundPositionX: 'center',
  // //     backgroundPositionY: 'center',
  // //     backgroundAttachment: 'scroll',
  // //     backgroundRepeat: 'no-repeat',
  // //     backgroundImage: `url(${props.fieldsetBackground})`,
  // //     backgroundSize: 'contain',
  // //     height: '450px',
  // //     width: 'auto',
  // //     backgroundColor: 'white',
  // //     zIndex: -1,
  // //   })
  // // }

  return ({
    "& .MuiOutlinedInput-root": {
      height: props.multiline ? 'auto' : '56px',
      minHeight: props.multiline ? '56px' : 'auto',
      borderRadius: '8px',
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

  console.log({variant})

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


