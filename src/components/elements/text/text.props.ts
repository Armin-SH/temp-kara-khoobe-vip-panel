import {ReactNode} from "react";

export interface TextProps {
  itemProp?: string

  children: ReactNode

  color: "primary" | "tertiary.main" | "error.main" | "secondary.main" | "grey.500" | "grey.300" | "grey.900" | "inherit" | "common.white" | undefined;

  typography?: "extraHuge" | "huge" | "extraLarge" | "large" | "medium" | "small" | "tiny" | "extraTiny"

  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "span" | "inherit" | undefined

  align?: "center" | "justify" | "left" | "right" | "inherit"

  style?: any

  width?: string

  className?: string

  direction?: string

  zIndex?: number

  disabled?: boolean

  type?: "medium" | "bold" | "light" | "regular"

  dataTestId?: string
}
