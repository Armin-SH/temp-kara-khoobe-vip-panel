interface ColorType {
  dark?: string
  light?: string
  main: string
  contrastText: string
}

interface TextType {
  disabled: string
  primary: string
  secondary: string
}

interface BackgroundType {
  paper: string
  default: string
}

interface ActionType {
  activatedOpacity: number
  active: string
  disabled: string
  disabledBackground: string
  disabledOpacity: number
  focus: string
  focusOpacity: number
  hover: string
  hoverOpacity: number
  selected: string
  selectedOpacity: number
}


export interface PaletteType {
  action: ActionType
  background: BackgroundType
  grey: Object
  common: Object
  text: TextType
  primary: ColorType
  secondary: ColorType
  tertiary: ColorType
  success: ColorType
  info: ColorType
  error: ColorType
  warning: ColorType
  control: ColorType
}
