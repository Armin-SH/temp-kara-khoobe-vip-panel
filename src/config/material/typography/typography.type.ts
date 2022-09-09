interface FontType {
  fontSize: string
  lineHeight: number
  "@media only screen and (min-width: 640px)": any
}


export interface TypographyType {
  extraHuge: FontType
  huge: FontType
  extraLarge: FontType
  large: FontType
  medium: FontType
  small: FontType
  tiny: FontType
  extraTiny: FontType
  fontFamily: string
}
