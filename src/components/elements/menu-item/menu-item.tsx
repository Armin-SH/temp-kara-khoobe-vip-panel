import React from 'react'

import {MenuItem as MaterialMenuItem} from '@mui/material'


const MenuItem = (props: any) => {

  return (
    <MaterialMenuItem {...props}>
      {props.children}
    </MaterialMenuItem>
  )
}

export default MenuItem
