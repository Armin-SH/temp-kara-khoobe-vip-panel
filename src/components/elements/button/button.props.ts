import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;

  variant?: 'text' | 'outlined' | 'contained';

  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'control' | 'tertiary';

  endIcon?: any

  startIcon?: any

  size?: "small" | "medium" | "large" | undefined

  className?: any

  disabled?: boolean

  onClick?: any

  component?: 'label' | undefined

  href?: string | object

  LinkProps?: any

  shape?: "circle" | "square" | "rectangle"

  icon?: boolean

  loading?: boolean
}
