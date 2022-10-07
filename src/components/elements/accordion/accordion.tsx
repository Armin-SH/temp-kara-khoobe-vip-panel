import React from 'react';
import {Accordion, AccordionProps} from "@mui/material"
import {styled} from '@mui/material/styles'

const CssAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props}>
    {props.children}
  </Accordion>
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none",
    height: 0
  }
}));


const CustomAccordion = ({children, ...rest}: AccordionProps) => {
  return (
    <CssAccordion {...rest}>
      {children}
    </CssAccordion>
  )
}

export default CustomAccordion
