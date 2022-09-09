import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingIndicatorProps {
  color?: "primary" | "success" | "error" | "warning" | "info" | "secondary" | "inherit"
  variant?: 'determinate' | 'indeterminate'
  size?: string
  className?: string
  value?: number
  thickness?: number
  disableShrink?: boolean
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const {color, size, className, ...rest} = props;

  return (
    <CircularProgress
      className={className}
      size={size}
      color={color}
      {...rest}
    />
  )
}

export default LoadingIndicator