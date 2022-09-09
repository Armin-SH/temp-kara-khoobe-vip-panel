import React from 'react';
import {CheckboxProps} from './checkbox.props'
import {default as MaterialCheckbox} from '@mui/material/Checkbox'
import {styled} from "@mui/material/styles";


const CssCheckbox = styled(({...props}: CheckboxProps) => <MaterialCheckbox {...props}/>)<CheckboxProps>((props: CheckboxProps) => {
  return ({
    "&.MuiCheckbox-root": {
      padding: 0,
    },
  })
});

const BpIcon = styled('span')(() => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: 'transparent',
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});


export const Checkbox = ({color, ...props}: CheckboxProps) => {
  return (
    <CssCheckbox
      sx={{
        '&:hover': {bgcolor: 'transparent'},
      }}
      disableRipple
      color={color}
      checkedIcon={<BpCheckedIcon/>}
      icon={<BpIcon/>}
      {...props}
    />
  )
}

export default Checkbox
