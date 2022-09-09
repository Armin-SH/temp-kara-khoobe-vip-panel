import {PaletteType} from './palette.type'
import {blue, green, grey, orange, primary, red, secondary, tertiary} from "../colors";

export const paletteTheme: PaletteType = {
  action: {
    activatedOpacity: 0.12,
    active: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
  },
  background: {
    default: "#fff",
    paper: "#fff"
  },
  grey: {
    100: grey['100'],
    200: grey['200'],
    300: grey['300'],
    400: grey['400'],
    500: grey['500'],
    600: grey['600'],
    700: grey['700'],
    800: grey['800'],
    900: grey['900'],
  },
  common: {
    black: "#121212",
    white: "#fff"
  },
  text: {
    disabled: "rgba(0, 0, 0, 0.38)",
    primary: "#373737",
    secondary: "#929292",
  },
  primary: {
    contrastText: primary['100'],
    light: primary['300'],
    main: primary['500'],
    dark: primary['700'],
  },
  secondary: {
    contrastText: secondary['100'],
    light: secondary['300'],
    main: secondary['500'],
    dark: secondary['800'],
  },
  tertiary: {
    contrastText: tertiary['100'],
    light: tertiary['300'],
    main: tertiary['500'],
    dark: tertiary['700'],
  },
  success: {
    contrastText: green['100'],
    light: green['300'],
    main: green['500'],
    dark: green['700'],
  },
  info: {
    contrastText: blue["100"],
    light: blue["300"],
    main: blue["500"],
    dark: blue["700"],
  },
  error: {
    contrastText: red["100"],
    light: red["300"],
    main: red["500"],
    dark: red["700"],
  },
  warning: {
    contrastText: orange["100"],
    light: orange["300"],
    main: orange["500"],
    dark: orange["700"],
  },
  control: {
    contrastText: tertiary["900"],
    light: grey["300"],
    main: grey["500"],
    dark: grey["700"],
  },
}

