import * as React from "react";
import {DayProps} from "./day.props";
import {styled} from '@mui/material/styles'

const NormalDay = styled("li")<DayProps>`
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-family: IRANSansMedium, serif;
  position: relative;
  transform-style: preserve-3d;
  border-radius: 50%;
  @media only screen and (max-width: 639px) {
    font-size: 20px;
  }
  color: ${props => props.selectedDay ? "#ffffff" : "#343434"};
  background-color: ${props => props.selectedDay ? "#FCA600" : "transparent"}
`;

const DisableDay = styled("li")<DayProps>`
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-family: IRANSansMedium, serif;
  position: relative;
  transform-style: preserve-3d;
  color: #000;
  min-width: 25px;
  min-height: 25px;
  @media only screen and (max-width: 639px) {
    font-size: 20px;
  }
`;

const PassedDay = styled("li")<DayProps>`
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-family: IRANSansMedium, serif;
  position: relative;
  transform-style: preserve-3d;
  color: #000;
  opacity: 0.4;
  @media only screen and (max-width: 639px) {
    font-size: 20px;
  }
`;

const NullDay = styled("li")<DayProps>`
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-family: IRANYekanFN, serif;
  position: relative;
  transform-style: preserve-3d;
  color: transparent;
  border: transparent;
  min-width: 25px;
  min-height: 25px;
  @media only screen and (max-width: 639px) {
    font-size: 20px;
  }
`;

export const Day = (props: DayProps) => {
  const {daysEvent, children, disabledDay, holidays, passedDay} = props;

  if (!children) {
    return <NullDay {...props} />
  }
  if (passedDay) {
    return <PassedDay {...props} />
  }
  if (disabledDay || holidays) {
    return <DisableDay {...props} />;
  }
  // @ts-ignore
  return <NormalDay {...props} {...daysEvent ? daysEvent() : null} />
};
