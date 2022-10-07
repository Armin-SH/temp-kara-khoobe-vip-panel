import React from 'react'
import AccordionDetails from '@mui/material/AccordionDetails'
import {styled} from '@mui/material/styles'


const CssAccordionDetails = styled(AccordionDetails)(({theme}) => ({
  boxShadow: "none",
  border: "none",
  padding: 0,
}))

const CustomAccordionDetails = ({children, ...rest}: any) => {

  return (
    <CssAccordionDetails {...rest}>
      {children}
    </CssAccordionDetails>
  )
}


export default CustomAccordionDetails;
