import React from 'react';
import {Typography} from "@mui/material";
import {TextProps} from './text.props';
import {styled} from '@mui/material/styles';
import {typography} from '@utils'

// @ts-ignore
const StyledTypography = styled(({type, width, disabled, zIndex, align, direction, ...props}: TextProps) => <Typography {...props}/>)<TextProps>`
  font-family: ${props => typography[props.type || "regular"]}, serif;
  width: ${props => props.width};
  ${(props) => props.disabled ? `
    color: #e1e1e1;
  ` : null}
  ${(props) => props.zIndex ? `
    z-index: ${props.zIndex};
  ` : `z-index: 4; `}
  ${(props) => props.align ? `
    text-align: ${props.align};
  ` : `text-align: center; `}
  ${(props) => props.direction ? `
    direction: ${props.direction};
  ` : `direction: rtl; `}
`;


export const Text = (props: TextProps) => {
  const {children, color, style, typography, className, width, variant, align, disabled, type, dataTestId, ...rest} = props;

  return (
    <StyledTypography
      disabled={disabled}
      type={type}
      width={width}
      className={className}
      color={color}
      typography={typography}
      variant={variant}
      align={align}
      sx={style}
      data-testid={dataTestId}
      {...rest}>
      {children}
    </StyledTypography>
  )
}

Text.defaultProps = {
  typography: 'light'
}

export default Text;
