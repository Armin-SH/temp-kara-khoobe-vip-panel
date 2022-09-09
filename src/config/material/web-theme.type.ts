import {PaletteType, TypographyType} from './'

export interface WebThemeType {
  direction: string
  palette: PaletteType
  typography: TypographyType
  spacing: Array<number>[number]
}
