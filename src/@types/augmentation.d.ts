import {AppBarPropsColorOverrides as AppBarPropsColorOverridesMUI} from "@mui/material/AppBar/AppBar";
import {ButtonPropsColorOverrides as ButtonPropsColorOverridesMUI} from "@mui/material/Button/Button";
import {BadgePropsColorOverrides as BadgePropsColorOverridesMUI} from "@mui/material/Badge/Badge";
import {IconButtonPropsColorOverrides as IconButtonPropsColorOverridesMUI} from "@mui/material/IconButton/IconButton";
import {RadioPropsColorOverrides as RadioPropsColorOverridesMUI} from "@mui/material/Radio/Radio";
import {CheckboxPropsColorOverrides as CheckboxPropsColorOverridesMUI} from "@mui/material/Checkbox/Checkbox";
import {TextFieldPropsColorOverrides as TextFieldPropsColorOverridesMUI} from "@mui/material/TextField/TextField";
import {ChipPropsColorOverrides as ChipPropsColorOverridesMUI} from '@mui/material/Chip/Chip'
import {TextFieldPropsSizeOverrides as TextFieldPropsSizeOverridesMUI} from "@mui/material";

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends ButtonPropsColorOverridesMUI {
    control: true;
    tertiary: true;
    purple: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides extends AppBarPropsColorOverridesMUI {
    success: true;
    warning: true;
    error: true;
    info: true;
    control: true;
    tertiary: true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides extends BadgePropsColorOverridesMUI {
    success: true;
    warning: true;
    error: true;
    info: true;
    control: true;
    tertiary: true;
    purple: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides extends IconButtonPropsColorOverridesMUI {
    control: true;
    tertiary: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides extends CheckboxPropsColorOverridesMUI {
    default: false;
    tertiary: true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides extends RadioPropsColorOverridesMUI {
    tertiary: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides extends TextFieldPropsColorOverridesMUI {
    control: true;
    tertiary: true;
  }

  interface TextFieldPropsSizeOverrides extends TextFieldPropsSizeOverridesMUI {
    large: true;
  }
}
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides extends ChipPropsColorOverridesMUI {
    control: true;
    tertiary: true;
    purple: true;
  }
}

