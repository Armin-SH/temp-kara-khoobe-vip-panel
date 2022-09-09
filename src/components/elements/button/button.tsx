import React from 'react';
import {default as MaterialButton} from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import {ButtonProps} from './button.props';
import {styled} from '@mui/material/styles'
import Link from 'next/link'
import {paletteTheme} from '@config/material'
import LoadingIndicator from '../loading-indicator'

const CssButton = styled(({shape, href, ...props}: ButtonProps) => <MaterialButton {...props}/>)<ButtonProps>((props: ButtonProps) => {
  const costumeLargeWidth = props.shape !== 'rectangle' ? {
    width: "56px",
    minWidth: '56px',
  } : {};

  const costumeSmallWidth = props.shape !== 'rectangle' ? {
    width: "32px",
    minWidth: '32px',
  } : {};

  const costumeMediumWidth = props.shape !== 'rectangle' ? {
    width: "48px",
    minWidth: '48px',
  } : {};

  return ({
    "&.MuiButton-outlined": {
      backgroundColor: "#ffffff",
    },
    boxShadow: 'none',
    "&:hover": {
      boxShadow: 'none',
    },
    "&:active": {
      boxShadow: 'none'
    },
    fontSize: '1rem',
    height: "40px",
    "@media (min-width: 640px)": {
      height: "48px"
    },
    borderRadius: props.shape === "circle" ? '100% 100% 100% 0' : '8px',
    zIndex: 4,
    overflow: 'hidden',
    padding: '0 4px',
    ...costumeMediumWidth,
    "&.MuiButton-sizeLarge": {
      fontSize: '1rem',
      height: '48px',
      borderRadius: props.shape === "circle" ? '100%' : '8px',
      "@media (min-width: 640px)": {
        height: "56px"
      },
      ...costumeLargeWidth,
    },
    "&.MuiButton-sizeSmall": {
      fontSize: '1rem',
      height: "32px",
      borderRadius: props.shape === "circle" ? '100%' : '8px',
      "@media (min-width: 640px)": {
        height: "40px"
      },
      ...costumeSmallWidth,
    },
  })
});

export const CustomButton = ({children, variant, color, endIcon, size, className, startIcon, disabled, onClick, href, LinkProps, shape, loading, ...rest}: ButtonProps) => {
  const dividerColor = variant === "contained" ? 'common.white' : color === 'inherit' ? color : paletteTheme[color || "primary"].main;

  if (loading) {
    children = <LoadingIndicator color={'inherit'} size={'20px'}/>
  }

  const Button = <CssButton
    shape={shape}
    disabled={disabled}
    onClick={onClick}
    className={className}
    color={color}
    variant={variant}
    endIcon={endIcon}
    startIcon={startIcon}
    size={size}
    data-testid={'button-test-id'}
    {...rest}>
    {startIcon && !loading ? <Divider orientation="vertical" variant="middle" flexItem color={dividerColor}/> : null}
    {children}
  </CssButton>;

  if (href) {
    return (
      <Link href={href} passHref={true} {...LinkProps}>
        {Button}
      </Link>
    );
  }

  return (
    Button
  );
};

CustomButton.defaultProps = {
  color: "primary",
  variant: "contained",
  shape: "rectangle",
  size: 'large',
  loading: false,
};

export default CustomButton;
