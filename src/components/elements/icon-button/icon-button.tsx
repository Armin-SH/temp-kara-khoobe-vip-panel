import React from 'react';
import {Button} from "@mui/material";
import {IconButtonProps} from './icon-button.props'
import {styled} from '@mui/material/styles';

const CssIconButton = styled(Button)<IconButtonProps>(({theme}) => ({
  borderRadius: "50%",
  minHeight: "47px",
  minWidth: "47px",
  height: "47px",
  width: "47px",
  padding: 0,
  "@media only screen and (min-width: 640px) and (max-width: 1023px)": {
    minHeight: "37px",
    minWidth: "37px",
    height: "37px",
    width: "37px",
  },
  "@media only screen and (max-width: 639px)": {
    minHeight: "14px",
    minWidth: "14px",
    height: "14px",
    width: "14px",
  },
}))


export const CustomIconButton = ({children, size, color, variant, onClick, className, ...rest}: IconButtonProps) => {
  return (
    <CssIconButton data-testid={'icon-button-test-id'} className={className} color={color} variant={variant} size={size} onClick={onClick} {...rest}>
      {children}
    </CssIconButton>
  )
};

CustomIconButton.defaultProps = {
  variant: 'contained'
};

export default CustomIconButton;
