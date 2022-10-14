import React from 'react'
import {default as MaterialPopper} from '@mui/material/Popper';
import {PopperProps} from './popper.props'


const Popper = ({open, children, anchorEl, id, className, placement}: PopperProps) => {

  return (
    <MaterialPopper className={className} placement={placement} open={open} anchorEl={anchorEl} id={id}>
      {children}
    </MaterialPopper>
  )
}

export default Popper