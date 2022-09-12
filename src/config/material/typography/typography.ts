import {TypographyType} from '@config/material'


export const typographyTheme: TypographyType = {
  fontFamily: ['IRANYekanRegular', 'Helvetica', 'Calibri', 'Arial', 'sans-serif',].join(','),
  extraHuge: {
    lineHeight: 1.5,
    fontSize: "2.25rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "6rem"
    },
  },
  huge: {
    lineHeight: 1.5,
    fontSize: "3rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "4rem"
    },
  },
  extraLarge: {
    lineHeight: 1.5,
    fontSize: "2.5rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "2.5rem"
    },
  },
  large: {
    lineHeight: 1.5,
    fontSize: "1.5rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "2rem"
    },
  },
  medium: {
    lineHeight: 1.5,
    fontSize: "1.25rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1.5rem"
    },
  },
  small: {
    lineHeight: 1.5,
    fontSize: "1rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1.25rem"
    },
  },
  tiny: {
    lineHeight: 1.5,
    fontSize: "0.875rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1rem"
    },
  },
  extraTiny: {
    lineHeight: 1.5,
    fontSize: "0.75rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1rem"
    },
  },
}
