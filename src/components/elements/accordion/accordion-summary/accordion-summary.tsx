import React from 'react'
import AccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary'
import {styled} from '@mui/material/styles'

const CssAccordionSummary = styled(AccordionSummary)<AccordionSummaryProps>(({theme}) => ({
  boxShadow: "none",
  "&.MuiAccordionSummary-root": {
    padding: 0,
    alignItems: "baseline"
  },
  "& .MuiAccordionSummary-content": {
    alignSelf: "center",
    justifyContent: 'center',
    margin: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    alignSelf: "center",
  },
}))


const CustomAccordionSummary = ({children, ...rest}: any) => {

  return (
    <CssAccordionSummary {...rest}>
      {children}
    </CssAccordionSummary>
  )
}


export default CustomAccordionSummary;
